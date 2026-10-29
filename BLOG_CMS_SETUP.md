# ITBS blog CMS setup

The blog editor uses Sanity Studio at `/studio`. Sanity sign-in controls access; only people invited to the Sanity project can edit or publish. The public site does not show a link to the editor. Until Sanity is configured, the existing 13 articles continue to use the bundled JSON content.

## One-time setup

1. Create a Sanity project and a dataset named `production` (or choose another dataset and use that name consistently).
2. Add these public project settings to `.env.local` for local development and to Vercel for Production and Preview:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. In the Sanity project API settings, allow the local site origin (usually `http://localhost:3000`) and the production site origin. Enable credentialed access for the Studio. Add the Vercel preview origin too if you plan to edit from previews.
4. Create a temporary Sanity write token for the import. Put it only in `.env.local` as `SANITY_API_WRITE_TOKEN`, then run `npm run cms:import`. The importer creates the existing articles if they are not already present; rerunning it will keep later Sanity edits intact.
5. Remove `SANITY_API_WRITE_TOKEN` from `.env.local` after import. Never add this token to Vercel or commit it.
6. Add a long random `SANITY_REVALIDATE_SECRET` to `.env.local` and to Vercel. Configure a Sanity webhook for published blog-post create, update, and delete events with URL `https://YOUR-PRODUCTION-HOST/api/revalidate/blog` and request header `Authorization: Bearer YOUR-SAME-SECRET`. The endpoint accepts Sanity’s normal document payload, invalidates all blog content, and refreshes article routes for the `slug` field.
7. Deploy the application once with the Sanity project settings. After that, publishing in Sanity updates the blog archive, article, author list, and sitemap through the webhook; routine article edits do not require another GitHub push or Vercel deployment.
8. Invite the editor accounts from Sanity project access settings. Editors open `/studio`, sign in with their own Sanity account, and use **Blog post** to create, edit, preview, and publish articles.

The article editor supports headings H1–H6, paragraphs, bold/italic, quotes, lists, links, dividers, and authenticated image uploads. Select an inline image to replace or remove it; the featured image and legacy image URL fields also have explicit remove controls. Drafts auto-save in Sanity; click Publish to update the public version. Featured images, alt text, categories, dates, reading time, key takeaways, and SEO title/description are separate fields. Published article HTML is sanitized before the public site renders it.

## Vercel environment variables

Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_REVALIDATE_SECRET` for each Vercel environment that should read or revalidate Sanity content. Keep `SANITY_API_WRITE_TOKEN` local to the one-time import command only. Changes to environment variables require a deployment to take effect; publishing article content does not.
