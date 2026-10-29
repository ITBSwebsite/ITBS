import { timingSafeEqual } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';

function isValidSecret(request: Request, expected: string) {
  const received = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ?? '';
  const receivedBytes = Buffer.from(received);
  const expectedBytes = Buffer.from(expected);
  return receivedBytes.length === expectedBytes.length && timingSafeEqual(receivedBytes, expectedBytes);
}

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return Response.json({ error: 'Revalidation is not configured.' }, { status: 503 });
  if (!isValidSecret(request, secret)) return Response.json({ error: 'Unauthorized.' }, { status: 401 });

  const payload = await request.json().catch(() => ({})) as {
    slug?: string | { current?: string };
    after?: { slug?: string | { current?: string } };
    before?: { slug?: string | { current?: string } };
    document?: { slug?: string | { current?: string } };
  };
  revalidateTag('blog-content', { expire: 0 });
  revalidatePath('/blogs');
  revalidatePath('/authors/itbs-editorial-team');
  revalidatePath('/sitemap.xml');

  const slugCandidates = [payload.slug, payload.after?.slug, payload.before?.slug, payload.document?.slug];
  for (const candidate of slugCandidates) {
    const slug = typeof candidate === 'string' ? candidate : candidate?.current;
    if (slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      revalidatePath(`/blogs/${slug}`);
    }
  }

  return Response.json({ revalidated: true });
}
