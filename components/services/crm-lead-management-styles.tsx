const CRM_STYLES = `
  .crm-page { --crm-navy:#111966;--crm-navy-deep:#0c1250;--crm-yellow:#fcf000;--crm-gold:#eab308;--crm-copy:#202938;--crm-line:#e3e5ef;overflow:clip;background:#fff;color:var(--text-primary);font-family:var(--font-body),"Cardo",Georgia,serif; }
  .crm-page * { box-sizing:border-box; }
  .crm-page a { text-decoration:none; }
  .crm-container { width:min(1240px,calc(100% - 48px));margin:0 auto; }
  .crm-hero { position:relative;isolation:isolate;overflow:hidden;padding:clamp(30px,4vw,52px) 0 clamp(56px,6vw,78px);background:linear-gradient(180deg,#fff 0%,#F5F5F5 54%,#F5F5F5 100%); }
  .crm-hero-glow { position:absolute;z-index:-1;border-radius:50%;pointer-events:none;filter:blur(72px); }
  .crm-hero-glow--one { width:450px;height:450px;top:38px;right:-130px;background:radial-gradient(circle,rgba(252,240,0,.3),rgba(17,25,102,.07) 50%,transparent 72%); }
  .crm-hero-glow--two { width:330px;height:330px;bottom:-190px;left:-160px;background:radial-gradient(circle,rgba(17,25,102,.16),transparent 70%); }
  .crm-breadcrumb { position:relative;z-index:1;display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:clamp(32px,5vw,58px);color:#73789b;font-size:13px; }
  .crm-breadcrumb a { color:var(--crm-navy);transition:color .2s ease; } .crm-breadcrumb a:hover { color:var(--brand-gold-text); }
  .crm-hero-grid { position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);align-items:center;gap:clamp(38px,6vw,82px); }
  .crm-hero-copy { max-width:675px; }
  .crm-hero-badge,.crm-eyebrow { display:inline-flex;align-items:center;gap:9px;color:#777018;font-size:11px;line-height:1.3;letter-spacing:.14em;text-transform:uppercase;font-weight:700; }
  .crm-hero-copy h1,.crm-section-heading h2,.crm-intro-copy h2,.crm-platform-heading h2,.crm-followup-inner h2 { font-family:"The Seasons",Georgia,"Times New Roman",serif;letter-spacing:-.03em; }
  .crm-hero-copy h1 { max-width:700px;margin:0 0 20px;color:var(--crm-navy);font-size:clamp(42px,5.2vw,68px);font-weight:700;line-height:1.08; }
  .crm-hero-copy h1 span { display:inline;color:var(--crm-navy);background:linear-gradient(transparent 72%,rgba(255,249,174,.96) 72%);box-decoration-break:clone;-webkit-box-decoration-break:clone; }
  .crm-hero-copy>p { max-width:635px;margin:0;color:var(--crm-copy);font-size:clamp(16px,1.3vw,18px);line-height:1.78; }
  .crm-hero-benefits { display:flex;flex-wrap:wrap;gap:10px 18px;list-style:none;padding:0;margin:24px 0 0; }
  .crm-hero-benefits li { display:inline-flex;align-items:center;gap:7px;color:#333a70;font-size:12px;font-weight:700; }
  .crm-hero-benefits svg { flex:none;color:var(--brand-gold-text); }
  .crm-hero-actions { display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-top:28px; }
  .crm-button { min-height:50px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 20px;border-radius:5px;font-size:14px;font-weight:700;transition:background .2s ease,color .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease; }
  .crm-button--primary { color:#fff;background:var(--crm-navy);border:1px solid var(--crm-navy);box-shadow:0 10px 25px rgba(17,25,102,.2); }
  .crm-button--primary:hover { color:#fff;background:#0c1250;border-color:#0c1250;box-shadow:0 13px 28px rgba(17,25,102,.26);transform:translateY(-2px); }
  .crm-button--quiet { color:var(--crm-navy);background:rgba(255,255,255,.72);border:1px solid rgba(17,25,102,.18); }
  .crm-button--quiet:hover { background: var(--brand-hover-yellow);border-color:var(--crm-gold); }
  .crm-hero-visual { position:relative;min-width:0;padding:24px 10px 28px; }
  .crm-hero-image-wrap { position:relative;display:grid;place-items:center;min-height:350px;padding:20px;border:1px solid rgba(17,25,102,.1);border-radius:24px;background:rgba(255,255,255,.8);box-shadow:0 25px 65px rgba(17,25,102,.1); }
  .crm-hero-image { position:relative;z-index:1;display:block;width:min(100%,520px);height:auto; }
  .crm-hero-image-ring { position:absolute;border:1px solid rgba(234,179,8,.33);border-radius:50%;pointer-events:none; }
  .crm-hero-image-ring--one { width:76%;aspect-ratio:1; } .crm-hero-image-ring--two { width:92%;aspect-ratio:1;border-color:rgba(17,25,102,.1); }
  .crm-intro-section { padding:clamp(54px,6vw,78px) 0;background:#fff; }
  .crm-intro-grid { display:grid;grid-template-columns:.92fr 1.08fr;align-items:center;gap:clamp(42px,7vw,88px); }
  .crm-intro-copy .crm-eyebrow { font-size:13px; }
  .crm-intro-copy h2 { max-width:620px;margin:16px 0 18px;color:var(--crm-navy);font-size:clamp(40px,4.8vw,60px);line-height:1.08; }
  .crm-intro-copy>p { max-width:570px;margin:0;color:var(--crm-copy);font-size:16px;line-height:1.8; }
  .crm-intro-points { display:grid;gap:11px;margin-top:23px; }
  .crm-intro-points span { display:flex;align-items:center;gap:10px;color:#333a70;font-size:13px;font-weight:700; }
  .crm-intro-points svg { display:grid;flex:none;padding:3px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:50%; }
  .crm-dashboard-wrap { position:relative;min-width:0;padding:18px 0 25px; }
  .crm-dashboard-frame { position:relative;overflow:hidden;padding:8px;border:1px solid rgba(17,25,102,.09);border-radius:18px;background:#F5F5F5;box-shadow:0 22px 56px rgba(17,25,102,.09); }
  .crm-dashboard-image { display:block;width:100%;height:auto;border-radius:12px; }
  .crm-comparison-section { position:relative;overflow:hidden;padding:clamp(56px,6vw,78px) 0;background:linear-gradient(135deg,#0c1250 0%,#111966 61%,#202b7d 100%); }
  .crm-comparison-section::before { content:"";position:absolute;right:-190px;top:-250px;width:540px;height:540px;border-radius:50%;background:radial-gradient(circle,rgba(252,240,0,.12),transparent 68%);pointer-events:none; }
  .crm-section-heading { position:relative;z-index:1;max-width:760px;margin:0 auto 40px;text-align:center; }
  .crm-eyebrow { margin-bottom:13px; } .crm-eyebrow i { width:7px;height:7px;border-radius:50%;background:var(--crm-gold);box-shadow:0 0 0 4px rgba(234,179,8,.15); }
  .crm-section-heading h2 { margin:0;color:var(--crm-navy);font-size:clamp(33px,4.4vw,54px);line-height:1.14; }
  .crm-section-heading p { max-width:700px;margin:15px auto 0;color:var(--crm-copy);font-size:15px;line-height:1.75; }
  .crm-section-heading--light .crm-eyebrow { color:#f4e56a; } .crm-section-heading--light h2 { color:#fff; } .crm-section-heading--light p { color:rgba(255,255,255,.75); }
  .crm-comparison-section .crm-section-heading { margin-bottom:27px; }
  .crm-comparison-grid { position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:20px; }
  .crm-comparison-card { min-width:0;padding:clamp(22px,3vw,34px);border:1px solid rgba(255,255,255,.14);border-radius:16px;transition:transform .28s cubic-bezier(.2,.8,.2,1),box-shadow .28s ease,border-color .28s ease; }
  .crm-comparison-card--without { color:#fff;background:rgba(255,255,255,.075); }
  .crm-comparison-card--with { color:var(--crm-navy);background:var(--crm-yellow);border-color:rgba(252,240,0,.8);box-shadow:0 18px 42px rgba(0,0,0,.12); }
  .crm-comparison-heading { display:flex;align-items:center;gap:12px;padding-bottom:19px;border-bottom:1px solid currentColor; }
  .crm-comparison-card--without .crm-comparison-heading { border-color:rgba(255,255,255,.17); }
  .crm-comparison-card--with .crm-comparison-heading { border-color:rgba(17,25,102,.2); }
  .crm-comparison-symbol { display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:50%; }
  .crm-comparison-card--without .crm-comparison-symbol { color:#fff;background:rgba(255,255,255,.12); }
  .crm-comparison-card--with .crm-comparison-symbol { color:var(--crm-yellow);background:var(--crm-navy); }
  .crm-comparison-heading h3 { margin:0;font-family:"The Seasons",Georgia,serif;font-size:23px; }
  .crm-comparison-card ul { display:flex;flex-direction:column;gap:0;list-style:none;margin:0;padding:0; }
  .crm-comparison-card li { display:grid;grid-template-columns:18px 1fr;gap:11px;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.12);font-size:14px;line-height:1.62; }
  .crm-comparison-card li:last-child { padding-bottom:0;border-bottom:0; }
  .crm-comparison-card--without li>svg { color:#f5c84b;margin-top:2px; }
  .crm-comparison-card--with li { border-color:rgba(17,25,102,.16); }
  .crm-comparison-card--with li>svg { color:#625400;margin-top:2px; }
  .crm-followup-section { position:relative;isolation:isolate;overflow:hidden;padding:clamp(62px,7vw,86px) 0;background:radial-gradient(ellipse at 50% 0%,#252f7f 0%,#111966 42%,#0c1250 100%);color:#fff;text-align:center; }
  .crm-followup-orb { position:absolute;z-index:-1;border:1px solid rgba(252,240,0,.17);border-radius:50%;pointer-events:none; }
  .crm-followup-orb--one { width:560px;height:560px;top:-350px;left:calc(50% - 280px); } .crm-followup-orb--two { width:420px;height:420px;top:-280px;left:calc(50% - 210px); }
  .crm-followup-inner { max-width:940px; }
  .crm-followup-inner h2 { max-width:900px;margin:0 auto 19px;color:#fff;font-size:clamp(42px,7vw,78px);line-height:1.05; }
  .crm-followup-inner>p { max-width:790px;margin:0 auto;color:rgba(255,255,255,.78);font-size:clamp(15px,1.4vw,18px);line-height:1.8; }
  .crm-followup-link { display:inline-flex;align-items:center;gap:8px;margin-top:27px;color:var(--crm-yellow);font-size:14px;font-weight:700;transition:gap .2s ease; }
  .crm-followup-link:hover { gap:12px; }
  .crm-problem-section { padding:clamp(54px,6vw,80px) 0;background:#F5F5F5; }
  .crm-problem-section .crm-section-heading { margin-bottom:35px; }
  .crm-source-row { display:grid;grid-template-columns:repeat(5,1fr);gap:14px;align-items:start;margin:0 0 26px; }
  .crm-source-item { position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;color:var(--crm-navy);font-size:12px;text-align:center; }
  .crm-source-icon { display:grid;place-items:center;width:68px;height:68px;color:var(--crm-navy);background:#fff;border:1px solid #e2e5ef;border-radius:50%;box-shadow:0 8px 20px rgba(17,25,102,.07);transition:transform .28s cubic-bezier(.2,.8,.2,1),background .28s ease,box-shadow .28s ease; }
  .crm-source-icon svg { width:26px;height:26px; }
  .crm-source-drop { position:absolute;top:78px;left:calc(50% + 39px);width:calc(100% - 62px);height:22px;border-top:1px dashed #b7bdd1; }
  .crm-source-drop::after { content:"";position:absolute;right:-2px;top:-4px;width:7px;height:7px;border-right:1px solid #aab1c6;border-bottom:1px solid #aab1c6;transform:rotate(45deg); }
  .crm-fragmented-banner { display:flex;align-items:center;gap:17px;padding:22px 25px;border:1px solid rgba(234,179,8,.45);border-radius:14px;background:linear-gradient(95deg,#fff9bf,#fff 73%);box-shadow:0 12px 27px rgba(17,25,102,.045); }
  .crm-fragmented-icon { display:grid;place-items:center;flex:none;width:58px;height:58px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:50%; }
  .crm-fragmented-icon svg { width:28px;height:28px; }
  .crm-fragmented-banner>div { display:flex;flex-direction:column;gap:5px; }
  .crm-fragmented-banner b { color:var(--crm-navy);font-family:"The Seasons",Georgia,serif;font-size:18px; }
  .crm-fragmented-banner strong { color:var(--brand-gold-text);font-size:14px; }
  .crm-fragmented-tag { margin-left:auto;padding:7px 10px;color:var(--brand-gold-text);background:#fff;border:1px solid #eee3a0;border-radius:20px;font-size:10px;font-weight:700;white-space:nowrap; }
  .crm-problem-outcomes { display:grid;grid-template-columns:repeat(4,1fr);margin-top:24px;border-top:1px solid #e0e3ee; }
  .crm-problem-outcomes>div { display:grid;grid-template-columns:46px 1fr;align-content:center;gap:4px 11px;min-height:88px;padding:16px 13px;border-right:1px solid #e0e3ee; }
  .crm-problem-outcomes>div:last-child { border-right:0; }
  .crm-problem-outcomes>div>span { grid-row:span 2;display:grid;place-items:center;width:45px;height:45px;color:var(--crm-navy);background:#fff;border:1px solid #e3e5ef;border-radius:50%;transition:transform .26s ease,background .26s ease; }
  .crm-problem-outcomes>div>span svg { width:21px;height:21px; }
  .crm-problem-outcomes b { align-self:end;color:var(--crm-navy);font-size:13px; }
  .crm-problem-outcomes small { color:#686e92;font-size:11px;line-height:1.4; }
  .crm-platform-section { position:relative;overflow:hidden;padding:clamp(56px,6vw,82px) 0;background:radial-gradient(circle at 82% 26%,rgba(66,75,157,.42),transparent 28%),linear-gradient(135deg,#0b1046 0%,#111966 62%,#171f70 100%);color:#fff; }
  .crm-platform-section::after { content:"";position:absolute;right:-190px;bottom:-360px;width:620px;height:620px;border:1px solid rgba(252,240,0,.13);border-radius:50%;pointer-events:none; }
  .crm-platform-heading { position:relative;z-index:1;max-width:800px;margin:0 auto 37px;text-align:center; }
  .crm-eyebrow--light { color:#f5e66c; }
  .crm-platform-heading h2 { margin:14px 0 12px;color:#fff;font-size:clamp(36px,4.5vw,54px);line-height:1.12; }
  .crm-platform-heading>p { max-width:730px;margin:0 auto;color:rgba(255,255,255,.74);font-size:15px;line-height:1.7; }
  .crm-platform-map { position:relative;z-index:1;display:grid;grid-template-columns:minmax(150px,.72fr) minmax(0,2.15fr) minmax(205px,.95fr);gap:17px;align-items:center; }
  .crm-map-sources h3,.crm-map-outcomes h3 { margin:0 0 13px;color:rgba(255,255,255,.83);font-size:11px;letter-spacing:.12em;text-transform:uppercase; }
  .crm-source-stack { display:flex;flex-direction:column;gap:8px;padding:13px;border:1px solid rgba(255,255,255,.17);border-radius:13px;background:rgba(255,255,255,.035); }
  .crm-source-stack>div { display:flex;align-items:center;gap:9px;color:rgba(255,255,255,.86);font-size:12px;font-weight:700; }
  .crm-source-stack>div>span { display:grid;place-items:center;width:29px;height:29px;flex:none;color:var(--crm-navy);background:var(--crm-yellow);border-radius:50%; }
  .crm-map-core { display:grid;grid-template-columns:minmax(0,1fr) 122px;align-items:center;gap:17px; }
  .crm-feature-stack { display:flex;flex-direction:column;gap:8px; }
  .crm-platform-feature { display:grid;grid-template-columns:32px 1fr;align-items:center;gap:10px;min-height:57px;padding:9px 11px;color:var(--crm-navy);background:#F5F5F5;border:1px solid rgba(255,255,255,.5);border-radius:10px;box-shadow:0 8px 18px rgba(0,0,0,.1);transition:transform .24s ease,box-shadow .24s ease; }
  .crm-platform-feature>span { display:grid;place-items:center;width:31px;height:31px;color:var(--crm-navy);background:rgba(252,240,0,.45);border-radius:50%; }
  .crm-platform-feature>div { display:flex;flex-direction:column;gap:3px;min-width:0; }
  .crm-platform-feature b { font-size:12px; } .crm-platform-feature small { color:#666d91;font-size:9px;line-height:1.35; }
  .crm-platform-node { position:relative;display:grid;place-items:center;width:118px;aspect-ratio:1; }
  .crm-node-orbit { position:absolute;inset:0;border:1px solid rgba(252,240,0,.22);border-radius:50%; }
  .crm-node-orbit--two { inset:11px;border-color:rgba(255,255,255,.24); }
  .crm-node-core { position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:78px;height:78px;color:var(--crm-navy);background:#fff;border:4px solid rgba(252,240,0,.85);border-radius:50%;box-shadow:0 0 0 8px rgba(252,240,0,.1),0 0 38px rgba(252,240,0,.13); }
  .crm-node-core span { font-family:"The Seasons",Georgia,serif;font-size:22px;font-weight:700;letter-spacing:.03em; }
  .crm-node-core small { margin-top:1px;color:#72789a;font-size:8px;letter-spacing:.16em;text-transform:uppercase; }
  .crm-map-outcomes { display:flex;flex-direction:column;gap:14px; }
  .crm-outcome-item { display:grid;grid-template-columns:31px 1fr;align-items:center;gap:9px; }
  .crm-outcome-item>span { display:grid;place-items:center;width:30px;height:30px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:50%; }
  .crm-outcome-item>div { display:flex;flex-direction:column;gap:3px; }
  .crm-outcome-item b { color:#fff;font-size:11px; } .crm-outcome-item small { color:rgba(255,255,255,.62);font-size:9px;line-height:1.4; }
  .crm-feature-slider-section { padding:clamp(54px,6vw,78px) 0;background:#fff; }
  .crm-feature-slider-heading { max-width:900px;margin:0 auto 29px;text-align:center; }
  .crm-feature-slider-heading .crm-eyebrow { margin-bottom:12px; }
  .crm-feature-slider-heading h2 { margin:0;color:var(--crm-navy);font-family:"The Seasons",Georgia,"Times New Roman",serif;font-size:clamp(36px,4.6vw,57px);line-height:1.12;letter-spacing:-.03em; }
  .crm-feature-tabs { display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;padding:4px;border:1px solid #e3e5ed;border-radius:40px;background:#fff; }
  .crm-feature-tab { min-height:52px;padding:9px 12px;color:var(--crm-navy);background:transparent;border:1px solid transparent;border-radius:30px;cursor:pointer;font-family:var(--font-body),"Cardo",Georgia,serif;font-size:clamp(11px,1.05vw,14px);font-weight:700;line-height:1.25;transition:background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease; }
  .crm-feature-tab:hover { background: var(--brand-hover-yellow); }
  .crm-feature-tab.is-active { color:var(--crm-yellow);background:var(--crm-navy);box-shadow:0 5px 15px rgba(17,25,102,.16); }
  .crm-feature-tab:focus-visible { outline:3px solid #a98500;outline-offset:3px; }
  .crm-feature-panel { display:grid;grid-template-columns:minmax(0,.96fr) minmax(350px,1.04fr);align-items:center;gap:clamp(30px,5vw,70px);min-height:390px;margin-top:24px;padding:clamp(27px,5vw,62px);overflow:hidden;border:1px solid #eef0f5;border-radius:23px;background:linear-gradient(135deg,#F5F5F5 0%,#F5F5F5 100%); }
  .crm-feature-copy { max-width:610px;animation:crmSlideIn .86s cubic-bezier(.22,.7,.2,1) both; }
  .crm-feature-count { display:inline-flex;align-items:center;gap:9px;margin-bottom:17px;color:#73799b;font-size:10px;font-weight:700;letter-spacing:.13em; }
  .crm-feature-count b { padding:5px 8px;color:var(--crm-navy);background:#fff;border:1px solid #e2e5ef;border-radius:20px;font-size:9px;letter-spacing:.04em; }
  .crm-feature-copy h3 { margin:0 0 17px;color:var(--crm-navy);font-family:"The Seasons",Georgia,"Times New Roman",serif;font-size:clamp(28px,3.2vw,43px);font-weight:600;line-height:1.2;letter-spacing:-.025em; }
  .crm-feature-copy>p { max-width:570px;margin:0;color:var(--crm-copy);font-size:clamp(14px,1.3vw,16px);line-height:1.8; }
  .crm-feature-copy-foot { display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:28px;padding-top:17px;border-top:1px solid #e0e3ed;color:var(--crm-navy); }
  .crm-feature-copy-foot>span { display:flex;align-items:center;gap:8px;color:#202938;font-size:11px;font-weight:700; }
  .crm-feature-copy-foot>span svg { flex:none;color:var(--brand-gold-text); }
  .crm-feature-copy-foot>svg { color:var(--brand-gold-text); }
  @keyframes crmSlideIn { from { opacity:0;transform:translateY(10px); } to { opacity:1;transform:translateY(0); } }
  .crm-feature-art { position:relative;display:flex;flex-direction:column;justify-content:center;min-width:0;min-height:330px;padding:22px;overflow:hidden;border:1px solid rgba(17,25,102,.07);border-radius:20px;background:linear-gradient(145deg,#F5F5F5 0%,#fff 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.85);animation:crmArtIn .96s cubic-bezier(.22,.7,.2,1) both; }
  .crm-feature-art::before,.crm-feature-art::after { content:"";position:absolute;border:1px solid rgba(17,25,102,.07);border-radius:50%;pointer-events:none; }
  .crm-feature-art::before { width:330px;height:330px;top:-230px;right:-110px; }
  .crm-feature-art::after { width:240px;height:240px;bottom:-195px;left:-100px;border-color:rgba(234,179,8,.23); }
  @keyframes crmArtIn { from { opacity:.35;transform:translateX(12px) scale(.99); } to { opacity:1;transform:translateX(0) scale(1); } }
  .crm-art-toolbar { position:relative;z-index:1;display:flex;align-items:center;gap:10px;margin-bottom:20px;padding-bottom:12px;border-bottom:1px solid rgba(17,25,102,.09);color:#73799a;font-size:9px;letter-spacing:.12em; }
  .crm-art-toolbar>b { color:var(--crm-navy);font-size:10px;letter-spacing:.06em; }
  .crm-art-toolbar>span:last-child { margin-left:auto;font-size:8px; }
  .crm-art-dots { display:flex;gap:4px; } .crm-art-dots i { width:6px;height:6px;border-radius:50%;background:#c6ccda; } .crm-art-dots i:first-child { background:var(--crm-gold); }
  .crm-art-capture,.crm-art-allocation,.crm-art-tracking,.crm-art-reminders,.crm-art-team { position:relative;z-index:1; }
  .crm-art-source-grid { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
  .crm-art-source-grid>span { display:flex;align-items:center;gap:9px;min-height:54px;padding:10px 12px;color:#414775;background:#fff;border:1px solid #e2e5ef;border-radius:10px;box-shadow:0 5px 12px rgba(17,25,102,.035);font-size:11px;font-weight:700; }
  .crm-art-source-grid svg { flex:none;color:var(--brand-gold-text); }
  .crm-art-connector { position:relative;width:1px;height:28px;margin:0 auto;background:#aeb4c6; }
  .crm-art-connector::after { content:"";position:absolute;bottom:-1px;left:-4px;width:8px;height:8px;border-right:1px solid #8b91a8;border-bottom:1px solid #8b91a8;transform:rotate(45deg); }
  .crm-art-lead-card { display:flex;align-items:center;gap:10px;padding:13px;background:#fff;border:1px solid rgba(234,179,8,.55);border-radius:11px;box-shadow:0 8px 20px rgba(17,25,102,.07); }
  .crm-art-lead-card>span { display:grid;place-items:center;flex:none;width:34px;height:34px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:9px; }
  .crm-art-lead-card>div { display:flex;flex-direction:column;gap:4px;min-width:0; }
  .crm-art-lead-card b { color:var(--crm-navy);font-size:11px; } .crm-art-lead-card small { color:#7b809b;font-size:9px; }
  .crm-art-lead-card>svg { margin-left:auto;color:#797f9d; }
  .crm-art-incoming { display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border:1px solid #e1e4ed;border-radius:11px;box-shadow:0 6px 17px rgba(17,25,102,.05); }
  .crm-art-avatar { display:grid;place-items:center;flex:none;width:39px;height:39px;color:var(--crm-navy);background:#fff4ad;border:2px solid #fff;border-radius:50%;font-size:10px;font-weight:700;box-shadow:0 2px 6px rgba(17,25,102,.1); }
  .crm-art-incoming>div { display:flex;flex-direction:column;gap:4px;min-width:0; }
  .crm-art-incoming>div small { color:#888eaa;font-size:8px;letter-spacing:.12em; }
  .crm-art-incoming>div b { color:#303762;font-size:10px; }
  .crm-art-auto { display:inline-flex;align-items:center;gap:4px;margin-left:auto;padding:5px 7px;color:var(--brand-gold-text);background:#fff8bd;border-radius:20px;font-size:8px;font-weight:700; }
  .crm-art-route-line { position:relative;width:62%;height:33px;margin:0 auto;border-right:1px solid #aab1c4;border-bottom:1px solid #aab1c4;border-left:1px solid #aab1c4;border-radius:0 0 10px 10px; }
  .crm-art-route-line::before { content:"";position:absolute;top:-1px;left:50%;height:22px;border-left:1px solid #aab1c4; }
  .crm-art-route-line i { position:absolute;bottom:-4px;width:7px;height:7px;border-radius:50%;background:#c6ccda; }
  .crm-art-route-line i:first-child { left:-4px; } .crm-art-route-line i:nth-child(2) { left:calc(50% - 3px);background:var(--crm-gold); } .crm-art-route-line i:last-child { right:-4px; }
  .crm-art-reps { display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:14px; }
  .crm-art-rep { display:flex;flex-direction:column;align-items:center;gap:6px;padding:11px 6px;background:#fff;border:1px solid #e1e4ed;border-radius:10px; }
  .crm-art-rep>b { display:grid;place-items:center;width:35px;height:35px;color:#434976;background:#F5F5F5;border-radius:50%;font-size:9px; }
  .crm-art-rep>small { color:#717795;font-size:8px; }
  .crm-art-rep--active { border-color:#e7d439;background:#fffdf0;box-shadow:0 5px 13px rgba(17,25,102,.05); }
  .crm-art-rep--active>b { color:var(--crm-navy);background:var(--crm-yellow); }
  .crm-art-assigned { display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;color:#676d91;font-size:9px;font-weight:700; }
  .crm-art-assigned svg { color:var(--brand-gold-text); }
  .crm-art-summary,.crm-art-team-head { display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:18px; }
  .crm-art-summary>span:first-child,.crm-art-team-head>span:first-child { display:flex;flex-direction:column;gap:4px; }
  .crm-art-summary small,.crm-art-team-head small { color:#888eaa;font-size:8px;letter-spacing:.12em; }
  .crm-art-summary b,.crm-art-team-head b { color:var(--crm-navy);font-size:12px; }
  .crm-art-period { display:inline-flex;align-items:center;gap:6px;padding:7px 9px;color:#666d91;background:#fff;border:1px solid #e1e4ed;border-radius:7px;font-size:8px; }
  .crm-art-stage-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:9px; }
  .crm-art-stage-grid>div { display:flex;flex-direction:column;gap:8px;min-height:130px;padding:12px 10px;background:#fff;border:1px solid #e2e5ed;border-radius:10px; }
  .crm-art-stage-grid>div>small { color:#898eaa;font-size:7px;letter-spacing:.09em; }
  .crm-art-stage-grid>div>b { color:#414775;font-size:9px; }
  .crm-art-stage-value { color:var(--crm-navy);font-family:"The Seasons",Georgia,serif;font-size:24px;font-weight:700; }
  .crm-art-stage-grid i { display:block;height:5px;margin-top:auto;border-radius:5px;background:linear-gradient(90deg,var(--crm-yellow),#f6dc38); }
  .crm-art-stage-grid>div:nth-child(2) i { background:linear-gradient(90deg,#c9cedc,#e4e7ef); }
  .crm-art-stage-grid>div:nth-child(3) i { background:linear-gradient(90deg,#aeb6d0,#d5d9e6); }
  .crm-art-tracking-foot { display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid #dfe3ec;color:#73799a;font-size:9px; }
  .crm-art-tracking-foot>span { display:flex;align-items:center;gap:6px; }
  .crm-art-tracking-foot>span>span,.crm-art-live-dot::before { width:7px;height:7px;border-radius:50%;background:#b49a00; }
  .crm-art-tracking-foot svg { color:var(--brand-gold-text); }
  .crm-art-reminder-date { display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:13px;background:#fff;border:1px solid #e1e4ed;border-radius:10px; }
  .crm-art-reminder-date>span:first-child { display:flex;flex-direction:column;gap:4px; }
  .crm-art-reminder-date small { color:#898eaa;font-size:8px;letter-spacing:.11em; }
  .crm-art-reminder-date b { color:var(--crm-navy);font-family:"The Seasons",Georgia,serif;font-size:16px; }
  .crm-art-bell { display:grid;place-items:center;width:39px;height:39px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:50%; }
  .crm-art-reminder-item { display:grid;grid-template-columns:22px 1fr auto;align-items:center;gap:9px;padding:12px 2px;border-bottom:1px solid rgba(17,25,102,.09); }
  .crm-art-reminder-check { display:grid;place-items:center;width:20px;height:20px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:50%; }
  .crm-art-reminder-check--pending { background:#fff;border:1px solid #bdc3d2; }
  .crm-art-reminder-item>div { display:flex;flex-direction:column;gap:4px; }
  .crm-art-reminder-item b { color:#343a6b;font-size:10px; } .crm-art-reminder-item small { color:#8288a3;font-size:8px; }
  .crm-art-due { padding:5px 7px;color:var(--brand-gold-text);background:#fff8bf;border-radius:20px;font-size:8px;font-weight:700;white-space:nowrap; }
  .crm-art-reminder-arrow { color:#7d839f; }
  .crm-art-reminder-note { display:flex;align-items:center;gap:7px;margin-top:12px;color:#6f7592;font-size:9px; }
  .crm-art-reminder-note svg { color:var(--brand-gold-text); }
  .crm-art-team-head { margin-bottom:15px; }
  .crm-art-live-dot { display:inline-flex;align-items:center;gap:6px;padding:6px 8px;color:#606789;background:#fff;border:1px solid #e2e5ed;border-radius:20px;font-size:8px; }
  .crm-art-live-dot::before { content:"";display:block; }
  .crm-art-timeline { position:relative;display:flex;flex-direction:column;gap:8px; }
  .crm-art-timeline-line { position:absolute;top:17px;bottom:17px;left:15px;border-left:1px dashed #b8bed0; }
  .crm-art-timeline>div { position:relative;display:grid;grid-template-columns:31px 1fr 16px;align-items:center;gap:9px;min-height:54px;padding:8px 11px;background:#fff;border:1px solid #e1e4ed;border-radius:10px; }
  .crm-art-timeline>div>i { z-index:1;display:grid;place-items:center;width:30px;height:30px;color:var(--crm-navy);background:var(--crm-yellow);border:3px solid #fff;border-radius:50%; }
  .crm-art-timeline>div>span { display:flex;flex-direction:column;gap:4px; }
  .crm-art-timeline>div b { color:#343a6b;font-size:10px; } .crm-art-timeline>div small { color:#8288a3;font-size:8px; }
  .crm-art-timeline>div>svg { color:var(--brand-gold-text); }
  .crm-art-team-foot { display:flex;align-items:center;gap:7px;margin-top:13px;color:#727895;font-size:9px; }
  .crm-art-team-foot svg { color:var(--brand-gold-text); }
  .crm-success-section { position:relative;isolation:isolate;overflow:hidden;padding:clamp(54px,6vw,78px) 0;background:linear-gradient(135deg,#0b1046 0%,#111966 62%,#202976 100%);color:#fff; }
  .crm-success-glow { position:absolute;z-index:-1;top:-260px;right:-60px;width:560px;height:560px;border:1px solid rgba(252,240,0,.18);border-radius:50%;box-shadow:0 0 0 60px rgba(252,240,0,.025),0 0 0 120px rgba(252,240,0,.02);pointer-events:none; }
  .crm-success-grid { display:grid;grid-template-columns:minmax(0,1fr) minmax(380px,.85fr);align-items:center;gap:clamp(40px,7vw,94px); }
  .crm-success-copy h2 { max-width:680px;margin:15px 0 19px;color:#fff;font-family:"The Seasons",Georgia,"Times New Roman",serif;font-size:clamp(37px,4.7vw,59px);line-height:1.1;letter-spacing:-.03em; }
  .crm-success-copy h2 span { color:var(--crm-yellow); }
  .crm-success-copy>p { max-width:650px;margin:0;color:rgba(255,255,255,.77);font-size:clamp(14px,1.3vw,16px);line-height:1.8; }
  .crm-success-journey { position:relative;display:flex;flex-direction:column;gap:10px;padding:19px;border:1px solid rgba(255,255,255,.15);border-radius:17px;background:rgba(255,255,255,.055);box-shadow:0 18px 48px rgba(0,0,0,.14); }
  .crm-success-journey-line { position:absolute;top:54px;bottom:65px;left:42px;border-left:1px dashed rgba(252,240,0,.5); }
  .crm-success-step { position:relative;z-index:1;display:grid;grid-template-columns:44px 1fr 20px;align-items:center;gap:11px;min-height:68px;padding:10px 12px;border:1px solid rgba(255,255,255,.08);border-radius:11px;background:#F5F5F5;color:var(--crm-navy);transition:transform .24s ease,box-shadow .24s ease,border-color .24s ease; }
  .crm-success-step>span { display:grid;place-items:center;width:39px;height:39px;color:var(--crm-navy);background:var(--crm-yellow);border-radius:10px; }
  .crm-success-step>div { display:flex;flex-direction:column;gap:4px; }
  .crm-success-step b { font-family:"The Seasons",Georgia,serif;font-size:15px; }
  .crm-success-step small { color:#757b99;font-size:10px; }
  .crm-success-step>svg { color:var(--brand-gold-text); }
  .crm-success-step--final { color:#fff;background:rgba(252,240,0,.11);border-color:rgba(252,240,0,.36); }
  .crm-success-step--final>span { color:var(--crm-navy);background:var(--crm-yellow); }
  .crm-success-step--final small { color:rgba(255,255,255,.72); }
  .crm-success-step--final>svg { color:var(--crm-yellow); }
  .crm-faq-section { padding:clamp(50px,6vw,76px) 0 clamp(60px,7vw,86px);background:#fff; }
  .crm-faq-section .svc-faq-wrap { margin-top:0; }
  .crm-faq-section .svc-faq-head { max-width:780px;margin-bottom:35px; }
  .crm-faq-section .svc-faq-badge { gap:9px;padding:8px 18px;border-color:rgba(17,25,102,.12);font-size:14px;letter-spacing:.11em; }
  .crm-faq-section .svc-faq-badge svg { width:16px;height:16px; }
  .crm-faq-section .svc-faq-list { max-width:900px; }
  .crm-faq-section .svc-faq-card { border-radius:12px; }
  .crm-faq-section .svc-faq-card.is-open { border-color:var(--crm-gold); }
  .crm-faq-section .svc-faq-wrap .svc-cta-box { margin-top:clamp(52px,7vw,78px); }
  .crm-motion-ready [data-crm-reveal] { opacity:0;transform:translate3d(0,26px,0);transition:opacity 1.12s cubic-bezier(.22,.7,.2,1),transform 1.12s cubic-bezier(.22,.7,.2,1);transition-delay:var(--crm-reveal-delay,0ms); }
  .crm-motion-ready [data-crm-reveal="left"] { transform:translate3d(-38px,0,0); }
  .crm-motion-ready [data-crm-reveal="right"] { transform:translate3d(38px,0,0); }
  .crm-motion-ready [data-crm-reveal="down"] { transform:translate3d(0,-25px,0); }
  .crm-motion-ready [data-crm-reveal="scale"] { transform:translate3d(0,14px,0) scale(.94); }
  .crm-motion-ready [data-crm-reveal].crm-is-visible { opacity:1;transform:translate3d(0,0,0) scale(1); }
  .crm-source-row [data-crm-reveal]:nth-of-type(2) { --crm-reveal-delay:70ms; }
  .crm-source-row [data-crm-reveal]:nth-of-type(3) { --crm-reveal-delay:140ms; }
  .crm-source-row [data-crm-reveal]:nth-of-type(4) { --crm-reveal-delay:210ms; }
  .crm-source-row [data-crm-reveal]:nth-of-type(5) { --crm-reveal-delay:280ms; }
  .crm-problem-outcomes [data-crm-reveal]:nth-child(2) { --crm-reveal-delay:80ms; }
  .crm-problem-outcomes [data-crm-reveal]:nth-child(3) { --crm-reveal-delay:160ms; }
  .crm-problem-outcomes [data-crm-reveal]:nth-child(4) { --crm-reveal-delay:240ms; }
  .crm-comparison-grid [data-crm-reveal="right"] { --crm-reveal-delay:110ms; }
  .crm-source-item:hover .crm-source-icon { transform:translateY(-3px) rotate(-5deg) scale(1.08);background:#fff9b3;box-shadow:0 12px 25px rgba(17,25,102,.13); }
  .crm-problem-outcomes>div:hover>span { transform:scale(1.09) rotate(-5deg);background:#fff9b3; }
  .crm-platform-feature:hover { transform:translateX(4px);box-shadow:0 11px 22px rgba(0,0,0,.16); }
  .crm-success-step:hover { transform:translateX(5px);border-color:rgba(252,240,0,.45);box-shadow:0 8px 20px rgba(0,0,0,.13); }
  .crm-motion-ready .crm-comparison-card.crm-is-visible:hover { transform:translateY(-4px);box-shadow:0 22px 46px rgba(0,0,0,.2); }
  @media(max-width:1080px) {
    .crm-hero-grid { grid-template-columns:minmax(0,1fr) minmax(330px,.88fr);gap:35px; }
    .crm-platform-map { grid-template-columns:155px minmax(0,1fr) 190px;gap:12px; }
    .crm-map-core { grid-template-columns:minmax(0,1fr) 98px;gap:10px; }
    .crm-platform-node { width:96px; } .crm-node-core { width:67px;height:67px; } .crm-node-core span { font-size:19px; }
  }
  @media(max-width:820px) {
    .crm-container { width:min(calc(100% - 40px),680px); }
    .crm-motion-ready [data-crm-reveal] { transition-duration:.92s; }
    .crm-motion-ready [data-crm-reveal="left"] { transform:translate3d(-22px,0,0); }
    .crm-motion-ready [data-crm-reveal="right"] { transform:translate3d(22px,0,0); }
    .crm-motion-ready [data-crm-reveal="down"] { transform:translate3d(0,-16px,0); }
    .crm-motion-ready [data-crm-reveal="scale"] { transform:translate3d(0,9px,0) scale(.97); }
    .crm-source-row [data-crm-reveal]:nth-of-type(2) { --crm-reveal-delay:55ms; }
    .crm-source-row [data-crm-reveal]:nth-of-type(3) { --crm-reveal-delay:110ms; }
    .crm-source-row [data-crm-reveal]:nth-of-type(4) { --crm-reveal-delay:165ms; }
    .crm-source-row [data-crm-reveal]:nth-of-type(5) { --crm-reveal-delay:220ms; }
    .crm-problem-outcomes [data-crm-reveal]:nth-child(2) { --crm-reveal-delay:60ms; }
    .crm-problem-outcomes [data-crm-reveal]:nth-child(3) { --crm-reveal-delay:120ms; }
    .crm-problem-outcomes [data-crm-reveal]:nth-child(4) { --crm-reveal-delay:180ms; }
    .crm-hero-grid,.crm-intro-grid { grid-template-columns:1fr;gap:31px; }
    .crm-hero-copy { max-width:720px; } .crm-hero-copy h1 { max-width:680px; }
    .crm-hero-visual { width:min(100%,560px);margin:0 auto; }
    .crm-intro-grid { gap:28px; } .crm-intro-copy { max-width:680px; }
    .crm-dashboard-wrap { width:min(100%,640px);margin:0 auto; }
    .crm-platform-map { grid-template-columns:1fr 1.2fr;gap:22px; }
    .crm-map-sources { grid-column:1;grid-row:1; }
    .crm-map-core { grid-column:2;grid-row:1 / span 2;grid-template-columns:minmax(0,1fr) 90px; }
    .crm-map-outcomes { grid-column:1;grid-row:2; }
    .crm-map-outcomes h3 { margin-bottom:2px; }
    .crm-map-outcomes { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
    .crm-map-outcomes h3 { grid-column:1 / -1; }
    .crm-outcome-item { grid-template-columns:27px 1fr;gap:7px; }
    .crm-outcome-item>span { width:26px;height:26px; } .crm-outcome-item b { font-size:10px; }
    .crm-feature-slider-section { padding:52px 0; }
    .crm-feature-tabs { display:flex;gap:4px;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;border-radius:18px; }
    .crm-feature-tabs::-webkit-scrollbar { display:none; }
    .crm-feature-tab { flex:0 0 auto;min-width:132px; }
    .crm-feature-panel { grid-template-columns:minmax(0,1fr);gap:24px;min-height:0;padding:clamp(23px,5vw,38px); }
    .crm-feature-copy { max-width:none; }
    .crm-feature-art { min-height:310px; }
    .crm-success-grid { grid-template-columns:minmax(0,1fr);gap:30px; }
    .crm-success-copy { max-width:680px; }
    .crm-success-journey { width:min(100%,620px); }
  }
  @media(max-width:600px) {
    .crm-container { width:min(calc(100% - 34px),520px); }
    .crm-hero { padding-top:21px;padding-bottom:68px; }
    .crm-breadcrumb { gap:7px;margin-bottom:30px;font-size:11px; }
    .crm-hero-grid { gap:20px; }
    .crm-hero-copy h1 { font-size:clamp(39px,11vw,56px); }
    .crm-hero-copy>p { font-size:14px;line-height:1.72; }
    .crm-hero-benefits { display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px; }
    .crm-hero-benefits li { align-items:flex-start;font-size:11px;line-height:1.4; }
    .crm-hero-benefits li:last-child { grid-column:1 / -1; }
    .crm-hero-actions { align-items:stretch;flex-direction:column;margin-top:23px; }
    .crm-button { width:100%;min-height:48px; }
    .crm-hero-visual { padding:19px 4px 23px; }
    .crm-hero-image-wrap { min-height:0;padding:11px;border-radius:18px; }
    .crm-hero-image { width:100%; }
    .crm-intro-section,.crm-problem-section { padding:54px 0; }
    .crm-intro-copy .crm-eyebrow { font-size:12px; }
    .crm-intro-copy h2 { margin:14px 0;font-size:clamp(36px,9vw,46px); }
    .crm-intro-copy>p { font-size:14px;line-height:1.72; }
    .crm-intro-points { gap:9px;margin-top:18px; }
    .crm-dashboard-wrap { padding:8px 0 22px; }
    .crm-dashboard-frame { padding:4px;border-radius:13px; }
    .crm-dashboard-image { border-radius:9px; }
    .crm-comparison-section { padding:54px 0; }
    .crm-section-heading { margin-bottom:28px;text-align:left; }
    .crm-section-heading h2 { font-size:clamp(31px,8.6vw,41px); }
    .crm-section-heading p { margin:12px 0 0;font-size:13px;line-height:1.7; }
    .crm-section-heading--light .crm-eyebrow { color:#f4e56a; }
    .crm-comparison-section .crm-section-heading { margin-bottom:23px;text-align:center; }
    .crm-comparison-grid { grid-template-columns:1fr;gap:12px; }
    .crm-comparison-card { padding:21px 18px;border-radius:13px; }
    .crm-comparison-heading { padding-bottom:14px; }
    .crm-comparison-heading h3 { font-size:20px; }
    .crm-comparison-card li { gap:9px;padding:14px 0;font-size:12px; }
    .crm-followup-section { padding:58px 0; }
    .crm-followup-inner h2 { margin:17px auto 14px;font-size:clamp(39px,10vw,54px); }
    .crm-followup-inner>p { font-size:14px;line-height:1.72; }
    .crm-followup-link { margin-top:21px;font-size:12px; }
    .crm-source-row { grid-template-columns:repeat(3,1fr);row-gap:18px; }
    .crm-source-item { gap:7px;font-size:10px; }
    .crm-source-icon { width:54px;height:54px; }
    .crm-source-icon svg { width:23px;height:23px; }
    .crm-source-drop { display:none; }
    .crm-fragmented-banner { align-items:flex-start;gap:11px;padding:16px 13px; }
    .crm-fragmented-icon { width:46px;height:46px; }
    .crm-fragmented-icon svg { width:24px;height:24px; }
    .crm-fragmented-banner b { font-size:15px; }
    .crm-fragmented-banner strong { font-size:11px;line-height:1.4; }
    .crm-fragmented-tag { display:none; }
    .crm-problem-outcomes { grid-template-columns:1fr 1fr;margin-top:16px; }
    .crm-problem-outcomes>div { grid-template-columns:38px 1fr;min-height:82px;padding:12px 7px;border-bottom:1px solid #e0e3ee; }
    .crm-problem-outcomes>div:nth-child(2) { border-right:0; }
    .crm-problem-outcomes>div:nth-last-child(-n+2) { border-bottom:0; }
    .crm-problem-outcomes>div>span { width:36px;height:36px; }
    .crm-problem-outcomes>div>span svg { width:19px;height:19px; }
    .crm-problem-outcomes b { font-size:11px; } .crm-problem-outcomes small { font-size:9px; }
    .crm-platform-section { padding:54px 0; }
    .crm-platform-heading { margin-bottom:26px; }
    .crm-platform-heading h2 { font-size:clamp(33px,9vw,43px); }
    .crm-platform-heading>p { font-size:13px; }
    .crm-platform-map { grid-template-columns:1fr;gap:20px; }
    .crm-map-sources,.crm-map-core,.crm-map-outcomes { grid-column:auto;grid-row:auto; }
    .crm-map-sources h3,.crm-map-outcomes h3 { margin-bottom:10px;font-size:10px; }
    .crm-source-stack { display:grid;grid-template-columns:1fr 1fr;gap:9px;padding:12px; }
    .crm-source-stack>div { gap:7px;font-size:10px; }
    .crm-source-stack>div>span { width:26px;height:26px; }
    .crm-map-core { grid-template-columns:minmax(0,1fr) 79px;gap:8px; }
    .crm-platform-feature { grid-template-columns:28px 1fr;gap:8px;min-height:53px;padding:8px; }
    .crm-platform-feature>span { width:27px;height:27px; }
    .crm-platform-feature b { font-size:10px; } .crm-platform-feature small { font-size:8px; }
    .crm-platform-node { width:77px; }
    .crm-node-core { width:56px;height:56px;border-width:3px; }
    .crm-node-core span { font-size:16px; } .crm-node-core small { font-size:7px; }
    .crm-map-outcomes { display:grid;grid-template-columns:1fr 1fr;gap:12px 9px; }
    .crm-map-outcomes h3 { grid-column:1 / -1; }
    .crm-outcome-item { grid-template-columns:25px 1fr;gap:7px; }
    .crm-outcome-item>span { width:24px;height:24px; }
    .crm-outcome-item b { font-size:9px; } .crm-outcome-item small { font-size:8px; }
    .crm-feature-slider-section { padding:50px 0; }
    .crm-feature-slider-heading { margin-bottom:23px;text-align:left; }
    .crm-feature-slider-heading h2 { font-size:clamp(32px,9vw,43px); }
    .crm-feature-tabs { margin-right:-2px;margin-left:-2px; }
    .crm-feature-tab { min-width:125px;min-height:46px;padding:8px 12px;font-size:11px; }
    .crm-feature-panel { gap:21px;margin-top:16px;padding:20px 16px;border-radius:17px; }
    .crm-feature-count { margin-bottom:12px;font-size:9px; }
    .crm-feature-copy h3 { margin-bottom:12px;font-size:clamp(27px,7.4vw,35px); }
    .crm-feature-copy>p { font-size:13px;line-height:1.72; }
    .crm-feature-copy-foot { margin-top:19px;padding-top:13px; }
    .crm-feature-copy-foot>span { font-size:10px; }
    .crm-feature-art { min-height:276px;padding:16px;border-radius:15px; }
    .crm-art-toolbar { margin-bottom:15px; }
    .crm-art-stage-grid>div { min-height:116px;padding:10px 8px; }
    .crm-art-reminder-item { grid-template-columns:20px 1fr auto;gap:7px; }
    .crm-art-reminder-item b { font-size:9px; }
    .crm-art-due { padding:4px 6px;font-size:7px; }
    .crm-success-section { padding:52px 0; }
    .crm-success-grid { gap:25px; }
    .crm-success-copy h2 { margin:14px 0;font-size:clamp(35px,9vw,46px); }
    .crm-success-copy>p { font-size:13px;line-height:1.75; }
    .crm-success-journey { gap:8px;padding:13px;border-radius:14px; }
    .crm-success-journey-line { left:36px; }
    .crm-success-step { grid-template-columns:39px 1fr 18px;gap:8px;min-height:61px;padding:9px; }
    .crm-success-step>span { width:35px;height:35px; }
    .crm-success-step b { font-size:13px; }
    .crm-success-step small { font-size:9px; }
    .crm-faq-section { padding:52px 0 64px; }
    .crm-faq-section .svc-faq-head { text-align:left;margin-bottom:25px; }
    .crm-faq-section .svc-faq-badge { padding:7px 15px;font-size:13px; }
    .crm-faq-section .svc-faq-title { font-size:clamp(28px,8vw,36px); }
    .crm-faq-section .svc-faq-subtitle { font-size:13px; }
    .crm-faq-section .svc-faq-list { gap:10px; }
    .crm-faq-section .svc-faq-trigger { gap:11px;padding:16px; }
    .crm-faq-section .svc-faq-q { font-size:15px; }
    .crm-faq-section .svc-faq-body { padding:0 16px 17px;font-size:13px; }
  }
  @media(max-width:380px) {
    .crm-container { width:calc(100% - 28px); }
    .crm-hero-copy h1 { font-size:39px; }
    .crm-source-stack { grid-template-columns:1fr; }
    .crm-feature-tab { min-width:116px;font-size:10px; }
    .crm-feature-panel { padding:17px 13px; }
    .crm-feature-art { min-height:260px;padding:13px; }
    .crm-art-source-grid { gap:7px; }
    .crm-art-source-grid>span { min-height:48px;padding:8px;font-size:9px; }
    .crm-art-reminder-item { grid-template-columns:20px 1fr; }
    .crm-art-due,.crm-art-reminder-arrow { display:none; }
    .crm-art-timeline>div { grid-template-columns:29px 1fr 14px;gap:7px;padding:7px 8px; }
    .crm-success-step { grid-template-columns:36px 1fr 17px; }
  }
  @media(prefers-reduced-motion:reduce) {
    .crm-page *, .crm-page *::before, .crm-page *::after { scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important; }
    .crm-motion-ready [data-crm-reveal] { opacity:1;transform:none; }
  }
  .crm-hero-image-wrap { transition:transform .32s cubic-bezier(.2,.7,.2,1),box-shadow .32s ease,border-color .32s ease; }
  .crm-hero-image { transition:transform .32s cubic-bezier(.2,.7,.2,1); }
  @media(hover:hover) and (prefers-reduced-motion:no-preference) {
    .crm-hero-image-wrap:hover { transform:translateY(-7px);border-color:rgba(17,25,102,.2);box-shadow:0 32px 72px rgba(17,25,102,.16); }
    .crm-hero-image-wrap:hover .crm-hero-image { transform:scale(1.012); }
  }
`;

export function CRMLeadManagementStyles() {
  return <style>{CRM_STYLES}</style>;
}

