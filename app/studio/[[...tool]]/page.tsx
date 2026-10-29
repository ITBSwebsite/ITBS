import type { Metadata, Viewport } from 'next';
import { NextStudio, metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const metadata: Metadata = { ...studioMetadata, title: 'ITBS Blog Editor' };
export const viewport: Viewport = { ...studioViewport, interactiveWidget: 'resizes-content' };

const isConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export default function StudioPage() {
  return (
    <div
      id="sanity-studio-root"
      className="sanity-studio-frame"
      style={{ position: 'fixed', inset: 0, zIndex: 99999, overflow: 'auto', background: '#f8f8ff', color: '#202938', display: isConfigured ? 'block' : 'grid', placeItems: 'center', padding: isConfigured ? 0 : 'clamp(20px, 5vw, 56px)' }}
    >
      {isConfigured ? (
        <NextStudio config={config} scheme="light" />
      ) : (
        <main className="sanity-studio-setup" style={{ width: 'min(760px, 100%)', padding: 'clamp(28px, 5vw, 56px)', border: '1px solid #e3e5ef', borderRadius: 24, background: '#fff', boxShadow: '0 24px 80px rgba(17,25,102,.10)' }}>
          <span className="sanity-studio-setup-kicker" style={{ color: '#946e00', fontSize: 12, fontWeight: 700, letterSpacing: '.16em' }}>ITBS BLOG CMS</span>
          <h1 style={{ margin: '14px 0', color: '#111966', fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(30px, 5vw, 48px)', lineHeight: 1.12 }}>Connect your Sanity project</h1>
          <p style={{ color: '#202938', fontSize: 16, lineHeight: 1.7 }}>The editor is ready, but it needs a Sanity project before you can sign in and manage posts.</p>
          <ol style={{ display: 'grid', gap: 10, margin: '24px 0', paddingLeft: 22, color: '#202938', fontSize: 16, lineHeight: 1.7 }}>
            <li>Create a Sanity project and dataset for the ITBS blog.</li>
            <li>Set <code style={{ borderRadius: 5, background: '#f2f3f8', padding: '2px 5px', fontSize: '.86em' }}>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code style={{ borderRadius: 5, background: '#f2f3f8', padding: '2px 5px', fontSize: '.86em' }}>NEXT_PUBLIC_SANITY_DATASET</code> in <code style={{ borderRadius: 5, background: '#f2f3f8', padding: '2px 5px', fontSize: '.86em' }}>.env.local</code>.</li>
            <li>Import the existing articles with <code style={{ borderRadius: 5, background: '#f2f3f8', padding: '2px 5px', fontSize: '.86em' }}>npm run cms:import</code>, then deploy the same public variables to Vercel.</li>
          </ol>
          <p className="sanity-studio-setup-note" style={{ borderTop: '1px solid #e3e5ef', paddingTop: 18, color: '#526174', fontSize: 14, lineHeight: 1.7 }}>Only invited Sanity users can sign in and publish. Add your local and production website origins to the Sanity project’s CORS settings.</p>
        </main>
      )}
    </div>
  );
}
