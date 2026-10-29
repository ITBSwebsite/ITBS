'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { PatchEvent, set, useClient, type StringInputProps } from 'sanity';

type ToolbarButton = { label: string; title: string; command: string; value?: string };

const buttons: ToolbarButton[] = [
  { label: 'H1', command: 'formatBlock', value: 'h1', title: 'Heading 1' },
  { label: 'H2', command: 'formatBlock', value: 'h2', title: 'Heading 2' },
  { label: 'H3', command: 'formatBlock', value: 'h3', title: 'Heading 3' },
  { label: 'H4', command: 'formatBlock', value: 'h4', title: 'Heading 4' },
  { label: 'H5', command: 'formatBlock', value: 'h5', title: 'Heading 5' },
  { label: 'H6', command: 'formatBlock', value: 'h6', title: 'Heading 6' },
  { label: 'P', command: 'formatBlock', value: 'p', title: 'Paragraph' },
  { label: 'B', command: 'bold', title: 'Bold' },
  { label: 'I', command: 'italic', title: 'Italic' },
  { label: 'Quote', command: 'formatBlock', value: 'blockquote', title: 'Block quote' },
  { label: '• List', command: 'insertUnorderedList', title: 'Bulleted list' },
  { label: '1. List', command: 'insertOrderedList', title: 'Numbered list' },
  { label: 'Left', command: 'justifyLeft', title: 'Align left' },
  { label: 'Centre', command: 'justifyCenter', title: 'Align centre' },
  { label: 'Right', command: 'justifyRight', title: 'Align right' },
  { label: 'Justify', command: 'justifyFull', title: 'Justify paragraph' },
];

const escapeAttribute = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function getVideoEmbedUrl(value: string): string | null {
  try {
    const url = new URL(value.trim());
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    if (host === 'youtu.be' || host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      const segments = url.pathname.split('/').filter(Boolean);
      const id = host === 'youtu.be' ? segments[0] : url.searchParams.get('v') || (['embed', 'shorts', 'live'].includes(segments[0] ?? '') ? segments[1] : undefined);
      return id && /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const id = url.pathname.split('/').filter(Boolean).find((segment) => /^\d+$/.test(segment));
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function BlogHtmlInput(props: StringInputProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLTextAreaElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);
  const selectedImageRef = useRef<HTMLImageElement | null>(null);
  const hasFocus = useRef(false);
  const client = useClient({ apiVersion: '2025-02-19' });
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [hasSelectedImage, setHasSelectedImage] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [sourceHtml, setSourceHtml] = useState(props.value ?? '');

  useEffect(() => {
    const editor = editorRef.current;
    if (editor && !hasFocus.current && !showHtml && editor.innerHTML !== (props.value ?? '')) {
      editor.innerHTML = props.value ?? '';
    }
  }, [props.value, showHtml]);

  const saveHtml = useCallback(() => {
    const editor = editorRef.current;
    if (!editor) return;
    const snapshot = editor.cloneNode(true) as HTMLDivElement;
    snapshot.querySelectorAll('[data-cms-selected-image]').forEach((image) => image.removeAttribute('data-cms-selected-image'));
    props.onChange(PatchEvent.from(set(snapshot.innerHTML)));
  }, [props]);

  const clearImageSelection = () => {
    selectedImageRef.current?.removeAttribute('data-cms-selected-image');
    selectedImageRef.current = null;
    setHasSelectedImage(false);
  };

  const selectImage = (image: HTMLImageElement | null) => {
    editorRef.current?.querySelectorAll<HTMLImageElement>('[data-cms-selected-image]').forEach((item) => item.removeAttribute('data-cms-selected-image'));
    selectedImageRef.current = image;
    if (image) image.setAttribute('data-cms-selected-image', 'true');
    setHasSelectedImage(Boolean(image));
  };

  const removeSelectedImage = () => {
    const image = selectedImageRef.current;
    if (!image?.isConnected) return;
    const figure = image.closest('figure');
    image.remove();
    if (figure && !figure.querySelector('img, iframe') && !figure.textContent?.trim()) figure.remove();
    clearImageSelection();
    editorRef.current?.focus();
    saveHtml();
  };

  const applyCommand = (command: string, value?: string) => {
    if (showHtml) return;
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    saveHtml();
  };

  const addLink = () => {
    if (showHtml) return;
    const url = window.prompt('Enter the link URL (https://…, mailto:… or a site path):');
    if (!url) return;
    const normalized = /^(https?:|mailto:|tel:|\/|#)/i.test(url) ? url : `https://${url}`;
    applyCommand('createLink', normalized);
  };

  const addVideo = () => {
    if (showHtml) return;
    const input = window.prompt('Paste a YouTube or Vimeo video URL:');
    if (!input) return;
    const embedUrl = getVideoEmbedUrl(input);
    if (!embedUrl) {
      setUploadError('Use a valid YouTube or Vimeo link to embed a video.');
      return;
    }
    const title = window.prompt('Add a short accessible video title:', 'Embedded video') || 'Embedded video';
    setUploadError('');
    editorRef.current?.focus();
    document.execCommand(
      'insertHTML',
      false,
      `<figure><iframe src="${escapeAttribute(embedUrl)}" title="${escapeAttribute(title)}" width="720" height="405" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></figure><p><br></p>`,
    );
    saveHtml();
  };

  const toggleHtml = () => {
    if (!showHtml) {
      setSourceHtml(editorRef.current?.innerHTML ?? props.value ?? '');
      setShowHtml(true);
      return;
    }
    if (editorRef.current) editorRef.current.innerHTML = sourceHtml;
    props.onChange(PatchEvent.from(set(sourceHtml)));
    setShowHtml(false);
  };

  const uploadImage = async (file?: File) => {
    if (!file || showHtml) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Choose an image file.');
      return;
    }

    setUploadError('');
    setUploading(true);
    try {
      const asset = await client.assets.upload('image', file, { filename: file.name });
      const suggestedAlt = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
      const alt = window.prompt('Add descriptive alt text for this image:', suggestedAlt) ?? suggestedAlt;
      const selectedImage = selectedImageRef.current;
      if (selectedImage?.isConnected) {
        selectedImage.src = asset.url;
        selectedImage.alt = alt;
        clearImageSelection();
      } else {
        editorRef.current?.focus();
        document.execCommand(
          'insertHTML',
          false,
          `<figure><img src="${escapeAttribute(asset.url)}" alt="${escapeAttribute(alt)}" loading="lazy" /></figure>`,
        );
      }
      saveHtml();
    } catch (error) {
      console.error('Sanity image upload failed.', error);
      setUploadError('Image upload failed. Check your Sanity connection and try again.');
    } finally {
      setUploading(false);
      if (uploadRef.current) uploadRef.current.value = '';
    }
  };

  const toolbarButtonStyle = (disabled = false) => ({
    minWidth: 38,
    border: '1px solid #d8dce8',
    borderRadius: 7,
    padding: '7px 10px',
    background: '#fff',
    color: disabled ? '#758094' : '#111966',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 700,
  } as const);

  return (
    <div className="itbs-blog-html-input" style={{ border: '1px solid #d8dce8', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
      <style>{'.itbs-blog-html-editor img[data-cms-selected-image="true"]{outline:3px solid #e4bd00;outline-offset:3px;cursor:pointer}'}</style>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: 10, borderBottom: '1px solid #e5e7ef', background: '#f8f8ff' }}>
        {buttons.map((button) => (
          <button
            key={button.label}
            type="button"
            title={button.title}
            disabled={showHtml}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => applyCommand(button.command, button.value)}
            style={toolbarButtonStyle(showHtml)}
          >
            {button.label}
          </button>
        ))}
        <button type="button" disabled={showHtml} onMouseDown={(event) => event.preventDefault()} onClick={addLink} style={toolbarButtonStyle(showHtml)}>Add link</button>
        <button type="button" disabled={showHtml || uploading} onMouseDown={(event) => event.preventDefault()} onClick={addVideo} style={toolbarButtonStyle(showHtml)}>Embed video</button>
        <button type="button" disabled={showHtml || uploading} onMouseDown={(event) => event.preventDefault()} onClick={() => uploadRef.current?.click()} style={toolbarButtonStyle(showHtml || uploading)}>{uploading ? 'Uploading…' : hasSelectedImage ? 'Replace selected image' : 'Upload image'}</button>
        <button type="button" disabled={showHtml || !hasSelectedImage || uploading} onMouseDown={(event) => event.preventDefault()} onClick={removeSelectedImage} style={{ ...toolbarButtonStyle(showHtml || !hasSelectedImage || uploading), color: hasSelectedImage ? '#9b2525' : '#758094' }}>Remove selected image</button>
        <button type="button" aria-pressed={showHtml} onMouseDown={(event) => event.preventDefault()} onClick={toggleHtml} style={{ ...toolbarButtonStyle(), background: showHtml ? '#111966' : '#fff', color: showHtml ? '#fff' : '#111966' }}>{showHtml ? 'Visual editor' : 'Show HTML'}</button>
        <input ref={uploadRef} type="file" accept="image/*" hidden onChange={(event) => void uploadImage(event.currentTarget.files?.[0])} />
      </div>
      <div
        ref={editorRef}
        className="itbs-blog-html-editor"
        contentEditable={!showHtml}
        suppressContentEditableWarning
        role="textbox"
        aria-label="Blog article content"
        aria-multiline="true"
        onFocus={() => { hasFocus.current = true; }}
        onBlur={() => { hasFocus.current = false; saveHtml(); }}
        onInput={saveHtml}
        onClick={(event) => {
          const image = (event.target as HTMLElement).closest('img');
          selectImage(image && editorRef.current?.contains(image) ? image as HTMLImageElement : null);
        }}
        onKeyDown={(event) => {
          if ((event.key === 'Backspace' || event.key === 'Delete') && selectedImageRef.current?.isConnected) {
            event.preventDefault();
            removeSelectedImage();
          }
        }}
        style={{ display: showHtml ? 'none' : 'block', minHeight: 420, maxHeight: 900, overflow: 'auto', padding: 20, outline: 'none', color: '#202938', font: '16px/1.7 Georgia, serif' }}
      />
      {showHtml && (
        <textarea
          ref={sourceRef}
          aria-label="Blog article HTML source"
          spellCheck={false}
          value={sourceHtml}
          onChange={(event) => {
            setSourceHtml(event.currentTarget.value);
            props.onChange(PatchEvent.from(set(event.currentTarget.value)));
          }}
          style={{ display: 'block', width: '100%', minHeight: 420, maxHeight: 900, overflow: 'auto', resize: 'vertical', padding: 20, border: 0, outline: 'none', color: '#202938', background: '#fbfbfd', font: '13px/1.6 ui-monospace, SFMono-Regular, Consolas, monospace' }}
        />
      )}
      <div style={{ padding: '8px 12px', borderTop: '1px solid #e5e7ef', color: '#586477', fontSize: 12 }}>
        {showHtml ? 'HTML source mode. Changes auto-save to the draft; switch to Visual editor to preview the markup.' : 'Use alignment and Quote tools for formatting. Embed YouTube/Vimeo videos, or select an image to replace/remove it. Drafts auto-save in Sanity; click Publish to send the saved version live.'}
        {uploadError && <span role="alert" style={{ display: 'block', color: '#a32323', marginTop: 5 }}>{uploadError}</span>}
      </div>
    </div>
  );
}
