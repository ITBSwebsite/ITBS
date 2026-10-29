'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  ChevronDown,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Table2,
  Trash2,
  Underline,
  Undo2,
  Video,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import { PatchEvent, set, useClient, type StringInputProps } from 'sanity';

type ToolbarAction = {
  label: string;
  command: string;
  icon: LucideIcon;
};

const alignmentActions: ToolbarAction[] = [
  { label: 'Align left', command: 'justifyLeft', icon: AlignLeft },
  { label: 'Align centre', command: 'justifyCenter', icon: AlignCenter },
  { label: 'Align right', command: 'justifyRight', icon: AlignRight },
  { label: 'Justify text', command: 'justifyFull', icon: AlignJustify },
];

const escapeAttribute = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function getVideoEmbedUrl(value: string): string | null {
  try {
    const url = new URL(value.trim());
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    if (host === 'youtu.be' || host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      const segments = url.pathname.split('/').filter(Boolean);
      const id = host === 'youtu.be'
        ? segments[0]
        : url.searchParams.get('v') || (['embed', 'shorts', 'live'].includes(segments[0] ?? '') ? segments[1] : undefined);
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
  const savedRangeRef = useRef<Range | null>(null);
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

  const rememberSelection = useCallback(() => {
    const editor = editorRef.current;
    const selection = window.getSelection();
    if (!editor || !selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    if (editor.contains(range.commonAncestorContainer)) savedRangeRef.current = range.cloneRange();
  }, []);

  const restoreSelection = useCallback(() => {
    const editor = editorRef.current;
    const range = savedRangeRef.current;
    if (!editor) return;
    editor.focus();
    if (!range || !editor.contains(range.commonAncestorContainer)) return;
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }, []);

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
    restoreSelection();
    document.execCommand(command, false, value);
    rememberSelection();
    saveHtml();
  };

  const addLink = () => {
    if (showHtml) return;
    rememberSelection();
    const url = window.prompt('Enter the link URL (https://…, mailto:… or a site path):');
    if (!url) return;
    const normalized = /^(https?:|mailto:|tel:|\/|#)/i.test(url) ? url : `https://${url}`;
    applyCommand('createLink', normalized);
  };

  const addVideo = () => {
    if (showHtml) return;
    rememberSelection();
    const input = window.prompt('Paste a YouTube or Vimeo video URL:');
    if (!input) return;
    const embedUrl = getVideoEmbedUrl(input);
    if (!embedUrl) {
      setUploadError('Use a valid YouTube or Vimeo link to embed a video.');
      return;
    }
    const title = window.prompt('Add a short accessible video title:', 'Embedded video') || 'Embedded video';
    setUploadError('');
    restoreSelection();
    document.execCommand(
      'insertHTML',
      false,
      `<figure><iframe src="${escapeAttribute(embedUrl)}" title="${escapeAttribute(title)}" width="720" height="405" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></figure><p><br></p>`,
    );
    saveHtml();
  };

  const addTable = () => {
    if (showHtml) return;
    restoreSelection();
    const cells = '<td>Write here</td><td>Write here</td><td>Write here</td>';
    const table = `<table><thead><tr><th>Heading</th><th>Heading</th><th>Heading</th></tr></thead><tbody><tr>${cells}</tr><tr>${cells}</tr></tbody></table><p><br></p>`;
    document.execCommand('insertHTML', false, table);
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
        restoreSelection();
        document.execCommand(
          'insertHTML',
          false,
          `<figure><img src="${escapeAttribute(asset.url)}" alt="${escapeAttribute(alt)}" loading="lazy" /></figure><p><br></p>`,
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

  const button = (
    label: string,
    Icon: LucideIcon,
    onClick: () => void,
    disabled = false,
    destructive = false,
  ) => (
    <button
      className={`itbs-editor-tool${destructive ? ' is-destructive' : ''}`}
      key={label}
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      onMouseDown={(event) => {
        rememberSelection();
        event.preventDefault();
      }}
      onClick={onClick}
    >
      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
      <span className="itbs-editor-tool-label">{label}</span>
    </button>
  );

  return (
    <div className="itbs-blog-html-input">
      <header className="itbs-editor-header">
        <div className="itbs-editor-identity">
          <Image className="itbs-editor-logo" src="/images/itbs-logo.png" alt="ITBS" width={125} height={24} priority />
          <div>
            <strong>ITBS Blog Editor</strong>
            <span>Compose and format your article</span>
          </div>
        </div>
        <div className="itbs-editor-mode" role="tablist" aria-label="Editor mode">
          <button type="button" role="tab" aria-selected={!showHtml} className={!showHtml ? 'is-active' : ''} onClick={() => showHtml && toggleHtml()}>
            Word
          </button>
          <button type="button" role="tab" aria-selected={showHtml} className={showHtml ? 'is-active' : ''} onClick={() => !showHtml && toggleHtml()}>
            <Code2 size={16} aria-hidden="true" /> HTML
          </button>
        </div>
      </header>

      <div className={`itbs-editor-toolbar${showHtml ? ' is-source-mode' : ''}`} aria-label="Article formatting toolbar">
        <div className="itbs-editor-tool-group" aria-label="History">
          {button('Undo', Undo2, () => applyCommand('undo'), showHtml)}
          {button('Redo', Redo2, () => applyCommand('redo'), showHtml)}
        </div>

        <div className="itbs-editor-tool-group itbs-editor-format-group" aria-label="Text style">
          <label className="itbs-editor-select-wrap">
            <span className="sr-only">Text style</span>
            <select aria-label="Text style" defaultValue="p" disabled={showHtml} onMouseDown={rememberSelection} onChange={(event) => applyCommand('formatBlock', event.currentTarget.value)}>
              <option value="p">Paragraph</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
              <option value="h4">Heading 4</option>
              <option value="h5">Heading 5</option>
              <option value="h6">Heading 6</option>
            </select>
            <ChevronDown className="itbs-editor-select-chevron" size={14} aria-hidden="true" />
          </label>
          {button('Bold', Bold, () => applyCommand('bold'), showHtml)}
          {button('Italic', Italic, () => applyCommand('italic'), showHtml)}
          {button('Underline', Underline, () => applyCommand('underline'), showHtml)}
        </div>

        <div className="itbs-editor-tool-group" aria-label="Paragraph layout">
          {alignmentActions.map(({ label, command, icon: Icon }) => button(label, Icon, () => applyCommand(command), showHtml))}
        </div>

        <div className="itbs-editor-tool-group" aria-label="Lists and quotes">
          {button('Bulleted list', List, () => applyCommand('insertUnorderedList'), showHtml)}
          {button('Numbered list', ListOrdered, () => applyCommand('insertOrderedList'), showHtml)}
          {button('Block quote', Quote, () => applyCommand('formatBlock', 'blockquote'), showHtml)}
        </div>

        <div className="itbs-editor-tool-group" aria-label="Insert content">
          {button('Add link', Link2, addLink, showHtml)}
          {button('Insert table', Table2, addTable, showHtml)}
          {button(uploading ? 'Uploading image' : 'Add image', ImagePlus, () => uploadRef.current?.click(), showHtml || uploading)}
          {button('Embed video', Video, addVideo, showHtml)}
          {button('Remove selected image', Trash2, removeSelectedImage, showHtml || !hasSelectedImage || uploading, true)}
        </div>

        <input
          ref={uploadRef}
          type="file"
          accept="image/*"
          hidden
          onClick={rememberSelection}
          onChange={(event) => void uploadImage(event.currentTarget.files?.[0])}
        />
      </div>

      <div
        ref={editorRef}
        className={`itbs-blog-html-editor${showHtml ? ' is-hidden' : ''}`}
        contentEditable={!showHtml}
        suppressContentEditableWarning
        role="textbox"
        aria-label="Blog article content"
        aria-multiline="true"
        onFocus={() => { hasFocus.current = true; }}
        onBlur={() => { hasFocus.current = false; saveHtml(); }}
        onInput={() => { rememberSelection(); saveHtml(); }}
        onKeyUp={rememberSelection}
        onMouseUp={rememberSelection}
        onClick={(event) => {
          const image = (event.target as HTMLElement).closest('img');
          selectImage(image && editorRef.current?.contains(image) ? image as HTMLImageElement : null);
          rememberSelection();
        }}
        onKeyDown={(event) => {
          if ((event.key === 'Backspace' || event.key === 'Delete') && selectedImageRef.current?.isConnected) {
            event.preventDefault();
            removeSelectedImage();
          }
        }}
      />

      {showHtml && (
        <textarea
          ref={sourceRef}
          className="itbs-blog-html-source"
          aria-label="Blog article HTML source"
          spellCheck={false}
          value={sourceHtml}
          onChange={(event) => {
            setSourceHtml(event.currentTarget.value);
            props.onChange(PatchEvent.from(set(event.currentTarget.value)));
          }}
        />
      )}

      <footer className="itbs-editor-footer">
        <span className="itbs-editor-save-indicator"><span aria-hidden="true" /> Draft changes save automatically in Sanity</span>
        <span>{showHtml ? 'HTML mode' : hasSelectedImage ? 'Image selected · replace or remove it from the toolbar' : 'Select an image to replace or remove it'}</span>
        {uploadError && <span className="itbs-editor-error" role="alert">{uploadError}</span>}
      </footer>
    </div>
  );
}
