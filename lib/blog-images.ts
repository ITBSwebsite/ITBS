const ARTICLE_IMAGE_DIMENSIONS: Record<string, [number, number]> = {
  '/images/blogs/2629a4cb9962b9.webp': [1022, 732],
  '/images/blogs/1163ec0d320aeb.webp': [1637, 472],
  '/images/blogs/24c43695421c26.webp': [1427, 722],
  '/images/blogs/e6f5cb3eef3290.webp': [1056, 749],
  '/images/blogs/7334bc70c58f7d.webp': [559, 682],
  '/images/blogs/30963f9e9f0338.png': [700, 450],
  '/images/blogs/ce99d1b6baafd5.png': [700, 450],
  '/images/blogs/7b436d410aa6d7.png': [700, 450],
  '/images/blogs/f8aeab62434ca2.webp': [700, 450],
  '/images/blogs/ff64d00e9702dd.webp': [700, 450],
  '/images/blogs/be939578819253.webp': [700, 450],
  '/images/blogs/24ead4856e7922.webp': [700, 450],
  '/images/blogs/62e1af0a31ff4d.webp': [2560, 1646],
};

export function reserveArticleImageDimensions(content: string) {
  return content.replace(/<img\b([^>]*)>/gi, (_match, attributes: string) => {
    const source = attributes.match(/\bsrc=(["'])(.*?)\1/i)?.[2];
    const dimensions = source ? ARTICLE_IMAGE_DIMENSIONS[source] : undefined;
    if (!dimensions) return '<img' + attributes + '>';
    const cleanAttributes = attributes.replace(/\s+(?:width|height)=(["']).*?\1/gi, '');
    return '<img' + cleanAttributes + ' width="' + dimensions[0] + '" height="' + dimensions[1] + '">';
  });
}
