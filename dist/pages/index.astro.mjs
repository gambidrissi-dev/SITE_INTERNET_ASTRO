import { c as createComponent, d as renderTemplate, l as renderHead, u as unescapeHTML, f as addAttribute } from '../chunks/astro/server_CwI0pF3U.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = "https://astro.collectifcobalt.eu";
  const canonicalUrl = `${siteUrl}/`;
  const ogImageAbs = `${siteUrl}/assets/OG-image/og-image.jpg`;
  const title = "Collectif Cobalt \u2014 Architecture & Design d'espace en Nouvelle-Aquitaine";
  const description = "Collectif Cobalt \u2014 Studio d'architecture, design d'espace, fabrication et m\xE9dia bas\xE9 en Nouvelle-Aquitaine. Le Studio, L'Atelier, Bleu de Cobalt, Le M\xE9dia.";
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="robots" content="index, follow"><link rel="canonical"', `><meta name="theme-color" content="#F3EFD7"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23F3EFD7'/><text x='4' y='24' font-size='22' font-family='sans-serif' font-weight='900' fill='%234A82DC'>c.</text></svg>"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"`, '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="Collectif Cobalt"><!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Schema.org --><script type="application/ld+json">', '<\/script><link rel="preload" href="/assets/LOGO/LOGO_COBALT.svg" as="image" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800&display=swap" rel="stylesheet">', `</head> <body> <div class="stripe"></div> <div id="cursor-dot"></div> <div id="cursor-ring"></div> <!-- Nav logo (landing) --> <div id="landing-nav"> <a href="/" id="landing-logo" aria-label="Collectif Cobalt \u2014 Accueil"> <img src="/assets/LOGO/LOGO_COBALT.svg" alt="Collectif Cobalt" width="200" height="45"> </a> </div> <!-- Fallback no-JS --> <noscript> <style>
      .noscript-fallback { position:fixed; inset:0; background:#F3EFD7; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:32px; font-family:'DM Sans',sans-serif; }
      .noscript-fallback h1 { font-size:clamp(2rem,8vw,5rem); font-weight:800; letter-spacing:-.04em; color:#1A1A1A; }
      .noscript-fallback h1 span { color:#4A82DC; }
      .noscript-fallback p { font-size:.85rem; color:rgba(26,26,26,.45); letter-spacing:.1em; text-transform:uppercase; }
      .noscript-nav { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }
      .noscript-nav a { padding:12px 28px; border-radius:999px; font-size:.75rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; text-decoration:none; border:1.5px solid currentColor; transition:opacity .15s; }
      .noscript-nav a:hover { opacity:.7; }
    </style> <div class="noscript-fallback"> <h1>cobalt<span>.</span></h1> <p>Architecture \xB7 Design \xB7 Fabrication \xB7 M\xE9dia</p> <nav class="noscript-nav"> <a href="/studio" style="color:#4A82DC;">Le Studio</a> <a href="/atelier" style="color:#5DA16B;">L'Atelier</a> <a href="/bleu-de-cobalt" style="color:#B8940A;">Bleu de Cobalt</a> <a href="/media" style="color:#BB3B34;">Le M\xE9dia</a> </nav> </div> </noscript> <!-- Shapes g\xE9n\xE9r\xE9es par JS --> <div id="bg-shapes"></div> <!-- Hero : slot reel + hint --> <div id="hero"> <div class="slot-outer" id="slot-outer"> <div class="slot-reel" id="slot-reel"></div> </div> <div class="slot-hint" id="slot-hint"> <span class="hint-dot" style="background:#4A82DC"></span> <span class="hint-dot" style="background:#5DA16B"></span> <span class="hint-dot" style="background:#F1CB4F"></span> <span class="hint-dot" style="background:#BB3B34"></span> <span id="hint-text">survole une forme</span> </div> </div> <!-- Sortie de secours --> <nav id="escape-nav" aria-label="Navigation principale"> <a href="/studio" class="escape-link" data-c="studio">Le Studio</a> <a href="/atelier" class="escape-link" data-c="atelier">L'Atelier</a> <a href="/bleu-de-cobalt" class="escape-link" data-c="bleu">Bleu de Cobalt</a> <a href="/media" class="escape-link" data-c="media">Le M\xE9dia</a> <a href="/contact" class="escape-link" data-c="contact">Contact</a> </nav> <!-- Floating env card --> <div id="env-card"> <div class="ec-pip"></div> <div class="ec-num" id="ec-num"></div> <div class="ec-name" id="ec-name"></div> <div class="ec-tag" id="ec-tag"></div> <div class="ec-cta" id="ec-cta">Entrer \u2192</div> </div> <script>
    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       CURSOR
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    let touchActive = null;
    if (isTouch) {
      const ht = document.getElementById('hint-text');
      if (ht) ht.textContent = 'tape une forme';
    }
    if (!isTouch) {
      const dot  = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
      (function loop() {
        dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
        rx += (mx - rx) * .13; ry += (my - ry) * .13;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
      })();
    } else {
      document.getElementById('cursor-dot')?.remove();
      document.getElementById('cursor-ring')?.remove();
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SHAPES SVG PATHS
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const SHAPE_SVG = {
      item1: \`<path d="M2.46143e-06 95.5659H750V450H2.46143e-06V95.5659Z"/><path d="M248.695 95.566L2.46143e-06 95.5659L0 1.39797e-07L248.695 95.566Z"/><path d="M498.858 95.566H248.695L248.695 7.7012e-08L498.858 95.566Z"/><path d="M750 95.5659L498.858 95.566V0L750 95.5659Z"/>\`,
      item2: \`<path d="M0 160.169H750V450H0V160.169Z"/><path d="M375 0L750 160.169H0L375 0Z"/>\`,
      item3: \`<path d="M750 450H502.677V252.561C502.677 192.924 445.394 144.578 374.732 144.578C304.623 144.578 247.684 192.171 246.799 251.165L246.788 252.561V450H0V0H750V450Z"/>\`,
      item4: \`<path d="M750 450H0.300781V105.383H0V0L741.504 105.383H750V450Z"/>\`,
      item5: \`<path d="M210.027 105.383H212.434V450H0.0849609V105.383H0V0L210.027 105.383ZM750 450H282.247V190.741L750 100V450Z"/>\`,
      item6: \`<path d="M375 0C582.107 0 750 84.5762 750 188.906C750 189.063 749.998 189.219 749.997 189.375H750V450H0V189.375H0.00292969C0.0021765 189.219 0 188.906C0 84.5762 167.893 0 375 0Z"/>\`,
      item7: \`<path d="M0 233.901H750V450H0V233.901Z"/><path d="M124.837 96.4286H625.163V233.901H124.837V96.4286Z"/><path d="M233.518 0H516.971V96.4286H233.518V0Z"/>\`,
      item8: \`<path d="M0 0H215.989V450H0V0Z"/><path d="M215.989 75.9446H445.892V450H215.989V75.9446Z"/><path d="M445.892 149.622H750V450H445.892V149.622Z"/>\`,
      item9: \`<path d="M0 180.85H750V450H0V180.85Z"/><path d="M375 180.85C375 280.73 291.053 361.699 187.5 361.699C83.9466 361.699 0 280.73 0 180.85C0 80.9692 83.9466 0 187.5 0C291.053 0 375 80.9692 375 180.85Z"/><path d="M750 180.85C750 280.73 666.053 361.699 562.5 361.699C458.947 361.699 375 280.73 375 180.85C375 80.9692 458.947 0 562.5 0C666.053 0 750 80.9692 750 180.85Z"/>\`,
    };
    const SHAPE_KEYS = Object.keys(SHAPE_SVG);

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       ENVIRONMENT DATA
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const ENV = {
      studio:  { num:'01', name:'Le Studio',      tag:'Architecture \xB7 Design d\\'espace', color:'#4A82DC', href:'/studio' },
      atelier: { num:'02', name:"L'Atelier",       tag:'Fabrication \xB7 Prototypage',       color:'#5DA16B', href:'/atelier' },
      bleu:    { num:'03', name:'Bleu de Cobalt',  tag:'Programme \xB7 Cabinets',             color:'#F1CB4F', href:'/bleu-de-cobalt' },
      media:   { num:'04', name:'Le M\xE9dia',         tag:'Architalk \xB7 Journal',             color:'#BB3B34', href:'/media' },
    };
    const ENV_KEYS = Object.keys(ENV);
    const ENV_COLORS = {
      studio:  '#4A82DC',
      atelier: '#5DA16B',
      bleu:    '#F1CB4F',
      media:   '#BB3B34',
    };

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       FLOATING CARD
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const card    = document.getElementById('env-card');
    const ecNum   = document.getElementById('ec-num');
    const ecName  = document.getElementById('ec-name');
    const ecTag   = document.getElementById('ec-tag');
    const ecCta   = document.getElementById('ec-cta');
    let   activeEnv = null;

    if (isTouch) {
      document.addEventListener('touchend', e => {
        if (touchActive && !e.target.closest('.bs')) {
          touchActive.classList.remove('bs-selected');
          touchActive = null;
          hideCard();
        }
      }, { passive: true });
    }

    function positionCard(x, y) {
      const W  = card.offsetWidth  || 200;
      const H  = card.offsetHeight || 120;
      const VW = window.innerWidth;
      const VH = window.innerHeight;
      if (isTouch) {
        return;
      } else {
        let left = x + 24;
        let top  = y - H - 18;
        if (left + W > VW - 12) left = x - W - 24;
        if (top < 10)            top  = y + 20;
        if (top + H > VH - 12)   top  = VH - H - 12;
        card.style.left = left + 'px';
        card.style.top  = top  + 'px';
      }
    }

    function hexToRgba(hex, alpha) {
      const h = hex.replace('#', '');
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      return \`rgba(\${r},\${g},\${b},\${alpha})\`;
    }

    function showCard(envKey, x, y) {
      const e = ENV[envKey];
      card.dataset.env = envKey;
      ecNum.textContent  = e.num;
      ecName.textContent = e.name;
      ecTag.textContent  = e.tag;
      ecCta.textContent  = isTouch ? 'Tap \xE0 nouveau \u2192' : 'Entrer \u2192';
      activeEnv = envKey;
      positionCard(x, y);
      card.classList.add('visible');
      if (!isTouch) {
        const ring = document.getElementById('cursor-ring');
        if (ring) ring.style.borderColor = hexToRgba(ENV_COLORS[envKey], .55);
      }
    }

    function hideCard() {
      card.classList.remove('visible');
      activeEnv = null;
      const ring = document.getElementById('cursor-ring');
      if (ring) ring.style.borderColor = '';
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       PLACEMENT DES SHAPES
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const bgShapes = document.getElementById('bg-shapes');
    const SHAPE_VW = 6.5;

    function placeBgShapes() {
      const W  = window.innerWidth;
      const H  = window.innerHeight;
      const sw = W * SHAPE_VW / 100;
      const sh = sw * (450 / 750);

      const logoEl  = document.getElementById('slot-outer');
      const logoR   = logoEl.getBoundingClientRect();
      const LOGO_CX = logoR.left + logoR.width  / 2;
      const LOGO_CY = logoR.top  + logoR.height / 2;
      const LOGO_RX = logoR.width  / 2 + sw * 0.9;
      const LOGO_RY = logoR.height / 2 + sh * 1.6;

      const logoArea  = Math.PI * LOGO_RX * LOGO_RY;
      const availArea = W * H - logoArea;
      const shapeArea = sw * sh * 0.58;
      const N_RAW     = Math.ceil(0.65 * availArea / shapeArea);
      const CAP       = isTouch ? 40 : 120;
      const N_SHAPES  = Math.min(Math.max(N_RAW, isTouch ? 16 : 32), CAP);

      const basePerEnv = Math.max(2, Math.floor(N_SHAPES / ENV_KEYS.length));
      const envPool = [];
      ENV_KEYS.forEach(k => { for (let i = 0; i < basePerEnv; i++) envPool.push(k); });
      let fill = 0;
      while (envPool.length < N_SHAPES) { envPool.push(ENV_KEYS[fill++ % ENV_KEYS.length]); }
      for (let i = envPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [envPool[i], envPool[j]] = [envPool[j], envPool[i]];
      }

      const COL_MIN   = sw * 0.82;
      const SAME_DIST = sw * 1.9;
      const MAX_TRY   = 300;
      const placed    = [];
      const fragment  = document.createDocumentFragment();

      for (let i = 0; i < N_SHAPES; i++) {
        const envKey   = envPool[i];
        const shapeKey = SHAPE_KEYS[Math.floor(Math.random() * SHAPE_KEYS.length)];
        const rot      = (Math.random() - 0.5) * 82;
        const flip     = Math.random() > 0.5 ? ' scaleX(-1)' : '';

        let cx, cy, ok;
        let tries = 0;

        do {
          ok = true;
          cx = -sw * 0.1 + Math.random() * (W + sw * 0.2);
          cy = -sh * 0.1 + Math.random() * (H + sh * 0.2);
          const ex = (cx - LOGO_CX) / LOGO_RX;
          const ey = (cy - LOGO_CY) / LOGO_RY;
          if (ex * ex + ey * ey < 1) { ok = false; continue; }
          for (const p of placed) {
            const d = Math.hypot(cx - p.cx, cy - p.cy);
            if (d < COL_MIN) { ok = false; break; }
            if ((p.envKey === envKey || p.shapeKey === shapeKey) && d < SAME_DIST) { ok = false; break; }
          }
          tries++;
        } while (!ok && tries < MAX_TRY);

        if (!ok) continue;
        placed.push({ cx, cy, envKey, shapeKey });

        const div = document.createElement('div');
        div.className = 'bs';
        div.dataset.env  = envKey;
        div.dataset.href = ENV[envKey].href;
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', \`\${ENV[envKey].name} \u2014 \${ENV[envKey].tag}\`);
        div.style.cssText = \`left:\${(cx-sw/2)/W*100}%;top:\${(cy-sh/2)/H*100}%;width:\${SHAPE_VW}vw;transform:rotate(\${rot}deg)\${flip};color:\${ENV_COLORS[envKey]};\`;
        div.innerHTML = \`<svg viewBox="0 0 750 450" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\${SHAPE_SVG[shapeKey]}</svg>\`;
        fragment.appendChild(div);
      }

      bgShapes.appendChild(fragment);

      if (!isTouch) {
        let hoverTarget = null;

        bgShapes.addEventListener('mouseover', e => {
          const bs = e.target.closest('.bs');
          if (!bs || bs === hoverTarget) return;
          hoverTarget = bs;
          document.body.classList.add('hov');
          showCard(bs.dataset.env, e.clientX, e.clientY);
        });

        bgShapes.addEventListener('mousemove', e => {
          if (e.target.closest('.bs')) positionCard(e.clientX, e.clientY);
        });

        bgShapes.addEventListener('mouseout', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          const related = e.relatedTarget?.closest?.('.bs');
          if (related === bs) return;
          hoverTarget = null;
          document.body.classList.remove('hov');
          hideCard();
        });

        bgShapes.addEventListener('click', e => {
          const bs = e.target.closest('.bs');
          if (bs) window.location.href = bs.dataset.href;
        });

        bgShapes.addEventListener('focusin', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          const r = bs.getBoundingClientRect();
          showCard(bs.dataset.env, r.left + r.width / 2, r.top);
        });
        bgShapes.addEventListener('focusout', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          hideCard();
        });
        bgShapes.addEventListener('keydown', e => {
          const bs = e.target.closest('.bs');
          if (bs && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); window.location.href = bs.dataset.href; }
        });

      } else {
        bgShapes.addEventListener('touchend', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          e.preventDefault();
          e.stopPropagation();
          if (touchActive === bs) {
            window.location.href = bs.dataset.href;
          } else {
            if (touchActive) touchActive.classList.remove('bs-selected');
            touchActive = bs;
            bs.classList.add('bs-selected');
            const t = e.changedTouches[0];
            showCard(bs.dataset.env, t.clientX, t.clientY);
          }
        }, { passive: false });
      }
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SLOT REEL
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const SANS  = "'Suisse BP Int\\\\'l', 'DM Sans', sans-serif";
    const SERIF = "'Instrument Serif', serif";

    const SLOT_ITEMS = [
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'<img src="/assets/LOGO/LOGO_COBALT.svg" alt="Collectif Cobalt" class="slot-logo-img" width="520" height="116">', color:'#1A1A1A', font:SANS, weight:'800', style:'normal', tracking:'-.04em' },
    ];

    const slotReel = document.getElementById('slot-reel');
    const slotOuter = document.getElementById('slot-outer');
    const slotHint  = document.getElementById('slot-hint');

    SLOT_ITEMS.forEach(item => {
      const el = document.createElement('div');
      el.className = 'slot-item';
      el.innerHTML = item.html;
      el.style.fontFamily    = item.font;
      el.style.fontWeight    = item.weight;
      el.style.fontStyle     = item.style;
      el.style.letterSpacing = item.tracking;
      el.style.color         = item.color;
      el.style.fontSize      = 'clamp(52px, 11vw, 148px)';
      el.style.lineHeight    = '1.05';
      slotReel.appendChild(el);
    });

    function easeOutBack(t) {
      const c1 = 0.6, c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    requestAnimationFrame(() => requestAnimationFrame(() => {
      let maxH = 0;
      [...slotReel.children].forEach(el => { maxH = Math.max(maxH, el.offsetHeight); });
      const itemH = Math.ceil(maxH) + 2;

      [...slotReel.children].forEach(el => { el.style.height = itemH + 'px'; });
      slotOuter.style.height = itemH + 'px';

      setTimeout(placeBgShapes, 0);

      const totalDist = (SLOT_ITEMS.length - 1) * itemH;
      const DURATION  = 3733;
      let startTs = null;

      function animReel(ts) {
        if (!startTs) startTs = ts;
        const t     = Math.min((ts - startTs) / DURATION, 1);
        const eased = easeOutBack(t);
        slotReel.style.transform = \`translateY(-\${eased * totalDist}px)\`;
        if (t < 1) {
          requestAnimationFrame(animReel);
        } else {
          slotReel.style.transform = \`translateY(-\${totalDist}px)\`;
          setTimeout(() => {
            slotHint.classList.add('in');
            document.getElementById('landing-logo')?.classList.add('in');
            document.getElementById('escape-nav')?.classList.add('in');
          }, 300);
        }
      }

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) {
        slotReel.style.transform = \`translateY(-\${totalDist}px)\`;
        setTimeout(() => {
          slotHint.classList.add('in');
          document.getElementById('landing-logo')?.classList.add('in');
          document.getElementById('escape-nav')?.classList.add('in');
        }, 100);
      } else {
        setTimeout(() => requestAnimationFrame(animReel), 350);
      }
    }));
  <\/script> </body> </html>`], ['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="robots" content="index, follow"><link rel="canonical"', `><meta name="theme-color" content="#F3EFD7"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23F3EFD7'/><text x='4' y='24' font-size='22' font-family='sans-serif' font-weight='900' fill='%234A82DC'>c.</text></svg>"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"`, '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="Collectif Cobalt"><!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Schema.org --><script type="application/ld+json">', '<\/script><link rel="preload" href="/assets/LOGO/LOGO_COBALT.svg" as="image" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800&display=swap" rel="stylesheet">', `</head> <body> <div class="stripe"></div> <div id="cursor-dot"></div> <div id="cursor-ring"></div> <!-- Nav logo (landing) --> <div id="landing-nav"> <a href="/" id="landing-logo" aria-label="Collectif Cobalt \u2014 Accueil"> <img src="/assets/LOGO/LOGO_COBALT.svg" alt="Collectif Cobalt" width="200" height="45"> </a> </div> <!-- Fallback no-JS --> <noscript> <style>
      .noscript-fallback { position:fixed; inset:0; background:#F3EFD7; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:32px; font-family:'DM Sans',sans-serif; }
      .noscript-fallback h1 { font-size:clamp(2rem,8vw,5rem); font-weight:800; letter-spacing:-.04em; color:#1A1A1A; }
      .noscript-fallback h1 span { color:#4A82DC; }
      .noscript-fallback p { font-size:.85rem; color:rgba(26,26,26,.45); letter-spacing:.1em; text-transform:uppercase; }
      .noscript-nav { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }
      .noscript-nav a { padding:12px 28px; border-radius:999px; font-size:.75rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; text-decoration:none; border:1.5px solid currentColor; transition:opacity .15s; }
      .noscript-nav a:hover { opacity:.7; }
    </style> <div class="noscript-fallback"> <h1>cobalt<span>.</span></h1> <p>Architecture \xB7 Design \xB7 Fabrication \xB7 M\xE9dia</p> <nav class="noscript-nav"> <a href="/studio" style="color:#4A82DC;">Le Studio</a> <a href="/atelier" style="color:#5DA16B;">L'Atelier</a> <a href="/bleu-de-cobalt" style="color:#B8940A;">Bleu de Cobalt</a> <a href="/media" style="color:#BB3B34;">Le M\xE9dia</a> </nav> </div> </noscript> <!-- Shapes g\xE9n\xE9r\xE9es par JS --> <div id="bg-shapes"></div> <!-- Hero : slot reel + hint --> <div id="hero"> <div class="slot-outer" id="slot-outer"> <div class="slot-reel" id="slot-reel"></div> </div> <div class="slot-hint" id="slot-hint"> <span class="hint-dot" style="background:#4A82DC"></span> <span class="hint-dot" style="background:#5DA16B"></span> <span class="hint-dot" style="background:#F1CB4F"></span> <span class="hint-dot" style="background:#BB3B34"></span> <span id="hint-text">survole une forme</span> </div> </div> <!-- Sortie de secours --> <nav id="escape-nav" aria-label="Navigation principale"> <a href="/studio" class="escape-link" data-c="studio">Le Studio</a> <a href="/atelier" class="escape-link" data-c="atelier">L'Atelier</a> <a href="/bleu-de-cobalt" class="escape-link" data-c="bleu">Bleu de Cobalt</a> <a href="/media" class="escape-link" data-c="media">Le M\xE9dia</a> <a href="/contact" class="escape-link" data-c="contact">Contact</a> </nav> <!-- Floating env card --> <div id="env-card"> <div class="ec-pip"></div> <div class="ec-num" id="ec-num"></div> <div class="ec-name" id="ec-name"></div> <div class="ec-tag" id="ec-tag"></div> <div class="ec-cta" id="ec-cta">Entrer \u2192</div> </div> <script>
    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       CURSOR
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    let touchActive = null;
    if (isTouch) {
      const ht = document.getElementById('hint-text');
      if (ht) ht.textContent = 'tape une forme';
    }
    if (!isTouch) {
      const dot  = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
      (function loop() {
        dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
        rx += (mx - rx) * .13; ry += (my - ry) * .13;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
      })();
    } else {
      document.getElementById('cursor-dot')?.remove();
      document.getElementById('cursor-ring')?.remove();
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SHAPES SVG PATHS
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const SHAPE_SVG = {
      item1: \\\`<path d="M2.46143e-06 95.5659H750V450H2.46143e-06V95.5659Z"/><path d="M248.695 95.566L2.46143e-06 95.5659L0 1.39797e-07L248.695 95.566Z"/><path d="M498.858 95.566H248.695L248.695 7.7012e-08L498.858 95.566Z"/><path d="M750 95.5659L498.858 95.566V0L750 95.5659Z"/>\\\`,
      item2: \\\`<path d="M0 160.169H750V450H0V160.169Z"/><path d="M375 0L750 160.169H0L375 0Z"/>\\\`,
      item3: \\\`<path d="M750 450H502.677V252.561C502.677 192.924 445.394 144.578 374.732 144.578C304.623 144.578 247.684 192.171 246.799 251.165L246.788 252.561V450H0V0H750V450Z"/>\\\`,
      item4: \\\`<path d="M750 450H0.300781V105.383H0V0L741.504 105.383H750V450Z"/>\\\`,
      item5: \\\`<path d="M210.027 105.383H212.434V450H0.0849609V105.383H0V0L210.027 105.383ZM750 450H282.247V190.741L750 100V450Z"/>\\\`,
      item6: \\\`<path d="M375 0C582.107 0 750 84.5762 750 188.906C750 189.063 749.998 189.219 749.997 189.375H750V450H0V189.375H0.00292969C0.0021765 189.219 0 188.906C0 84.5762 167.893 0 375 0Z"/>\\\`,
      item7: \\\`<path d="M0 233.901H750V450H0V233.901Z"/><path d="M124.837 96.4286H625.163V233.901H124.837V96.4286Z"/><path d="M233.518 0H516.971V96.4286H233.518V0Z"/>\\\`,
      item8: \\\`<path d="M0 0H215.989V450H0V0Z"/><path d="M215.989 75.9446H445.892V450H215.989V75.9446Z"/><path d="M445.892 149.622H750V450H445.892V149.622Z"/>\\\`,
      item9: \\\`<path d="M0 180.85H750V450H0V180.85Z"/><path d="M375 180.85C375 280.73 291.053 361.699 187.5 361.699C83.9466 361.699 0 280.73 0 180.85C0 80.9692 83.9466 0 187.5 0C291.053 0 375 80.9692 375 180.85Z"/><path d="M750 180.85C750 280.73 666.053 361.699 562.5 361.699C458.947 361.699 375 280.73 375 180.85C375 80.9692 458.947 0 562.5 0C666.053 0 750 80.9692 750 180.85Z"/>\\\`,
    };
    const SHAPE_KEYS = Object.keys(SHAPE_SVG);

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       ENVIRONMENT DATA
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const ENV = {
      studio:  { num:'01', name:'Le Studio',      tag:'Architecture \xB7 Design d\\\\'espace', color:'#4A82DC', href:'/studio' },
      atelier: { num:'02', name:"L'Atelier",       tag:'Fabrication \xB7 Prototypage',       color:'#5DA16B', href:'/atelier' },
      bleu:    { num:'03', name:'Bleu de Cobalt',  tag:'Programme \xB7 Cabinets',             color:'#F1CB4F', href:'/bleu-de-cobalt' },
      media:   { num:'04', name:'Le M\xE9dia',         tag:'Architalk \xB7 Journal',             color:'#BB3B34', href:'/media' },
    };
    const ENV_KEYS = Object.keys(ENV);
    const ENV_COLORS = {
      studio:  '#4A82DC',
      atelier: '#5DA16B',
      bleu:    '#F1CB4F',
      media:   '#BB3B34',
    };

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       FLOATING CARD
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const card    = document.getElementById('env-card');
    const ecNum   = document.getElementById('ec-num');
    const ecName  = document.getElementById('ec-name');
    const ecTag   = document.getElementById('ec-tag');
    const ecCta   = document.getElementById('ec-cta');
    let   activeEnv = null;

    if (isTouch) {
      document.addEventListener('touchend', e => {
        if (touchActive && !e.target.closest('.bs')) {
          touchActive.classList.remove('bs-selected');
          touchActive = null;
          hideCard();
        }
      }, { passive: true });
    }

    function positionCard(x, y) {
      const W  = card.offsetWidth  || 200;
      const H  = card.offsetHeight || 120;
      const VW = window.innerWidth;
      const VH = window.innerHeight;
      if (isTouch) {
        return;
      } else {
        let left = x + 24;
        let top  = y - H - 18;
        if (left + W > VW - 12) left = x - W - 24;
        if (top < 10)            top  = y + 20;
        if (top + H > VH - 12)   top  = VH - H - 12;
        card.style.left = left + 'px';
        card.style.top  = top  + 'px';
      }
    }

    function hexToRgba(hex, alpha) {
      const h = hex.replace('#', '');
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      return \\\`rgba(\\\${r},\\\${g},\\\${b},\\\${alpha})\\\`;
    }

    function showCard(envKey, x, y) {
      const e = ENV[envKey];
      card.dataset.env = envKey;
      ecNum.textContent  = e.num;
      ecName.textContent = e.name;
      ecTag.textContent  = e.tag;
      ecCta.textContent  = isTouch ? 'Tap \xE0 nouveau \u2192' : 'Entrer \u2192';
      activeEnv = envKey;
      positionCard(x, y);
      card.classList.add('visible');
      if (!isTouch) {
        const ring = document.getElementById('cursor-ring');
        if (ring) ring.style.borderColor = hexToRgba(ENV_COLORS[envKey], .55);
      }
    }

    function hideCard() {
      card.classList.remove('visible');
      activeEnv = null;
      const ring = document.getElementById('cursor-ring');
      if (ring) ring.style.borderColor = '';
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       PLACEMENT DES SHAPES
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const bgShapes = document.getElementById('bg-shapes');
    const SHAPE_VW = 6.5;

    function placeBgShapes() {
      const W  = window.innerWidth;
      const H  = window.innerHeight;
      const sw = W * SHAPE_VW / 100;
      const sh = sw * (450 / 750);

      const logoEl  = document.getElementById('slot-outer');
      const logoR   = logoEl.getBoundingClientRect();
      const LOGO_CX = logoR.left + logoR.width  / 2;
      const LOGO_CY = logoR.top  + logoR.height / 2;
      const LOGO_RX = logoR.width  / 2 + sw * 0.9;
      const LOGO_RY = logoR.height / 2 + sh * 1.6;

      const logoArea  = Math.PI * LOGO_RX * LOGO_RY;
      const availArea = W * H - logoArea;
      const shapeArea = sw * sh * 0.58;
      const N_RAW     = Math.ceil(0.65 * availArea / shapeArea);
      const CAP       = isTouch ? 40 : 120;
      const N_SHAPES  = Math.min(Math.max(N_RAW, isTouch ? 16 : 32), CAP);

      const basePerEnv = Math.max(2, Math.floor(N_SHAPES / ENV_KEYS.length));
      const envPool = [];
      ENV_KEYS.forEach(k => { for (let i = 0; i < basePerEnv; i++) envPool.push(k); });
      let fill = 0;
      while (envPool.length < N_SHAPES) { envPool.push(ENV_KEYS[fill++ % ENV_KEYS.length]); }
      for (let i = envPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [envPool[i], envPool[j]] = [envPool[j], envPool[i]];
      }

      const COL_MIN   = sw * 0.82;
      const SAME_DIST = sw * 1.9;
      const MAX_TRY   = 300;
      const placed    = [];
      const fragment  = document.createDocumentFragment();

      for (let i = 0; i < N_SHAPES; i++) {
        const envKey   = envPool[i];
        const shapeKey = SHAPE_KEYS[Math.floor(Math.random() * SHAPE_KEYS.length)];
        const rot      = (Math.random() - 0.5) * 82;
        const flip     = Math.random() > 0.5 ? ' scaleX(-1)' : '';

        let cx, cy, ok;
        let tries = 0;

        do {
          ok = true;
          cx = -sw * 0.1 + Math.random() * (W + sw * 0.2);
          cy = -sh * 0.1 + Math.random() * (H + sh * 0.2);
          const ex = (cx - LOGO_CX) / LOGO_RX;
          const ey = (cy - LOGO_CY) / LOGO_RY;
          if (ex * ex + ey * ey < 1) { ok = false; continue; }
          for (const p of placed) {
            const d = Math.hypot(cx - p.cx, cy - p.cy);
            if (d < COL_MIN) { ok = false; break; }
            if ((p.envKey === envKey || p.shapeKey === shapeKey) && d < SAME_DIST) { ok = false; break; }
          }
          tries++;
        } while (!ok && tries < MAX_TRY);

        if (!ok) continue;
        placed.push({ cx, cy, envKey, shapeKey });

        const div = document.createElement('div');
        div.className = 'bs';
        div.dataset.env  = envKey;
        div.dataset.href = ENV[envKey].href;
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', \\\`\\\${ENV[envKey].name} \u2014 \\\${ENV[envKey].tag}\\\`);
        div.style.cssText = \\\`left:\\\${(cx-sw/2)/W*100}%;top:\\\${(cy-sh/2)/H*100}%;width:\\\${SHAPE_VW}vw;transform:rotate(\\\${rot}deg)\\\${flip};color:\\\${ENV_COLORS[envKey]};\\\`;
        div.innerHTML = \\\`<svg viewBox="0 0 750 450" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\\\${SHAPE_SVG[shapeKey]}</svg>\\\`;
        fragment.appendChild(div);
      }

      bgShapes.appendChild(fragment);

      if (!isTouch) {
        let hoverTarget = null;

        bgShapes.addEventListener('mouseover', e => {
          const bs = e.target.closest('.bs');
          if (!bs || bs === hoverTarget) return;
          hoverTarget = bs;
          document.body.classList.add('hov');
          showCard(bs.dataset.env, e.clientX, e.clientY);
        });

        bgShapes.addEventListener('mousemove', e => {
          if (e.target.closest('.bs')) positionCard(e.clientX, e.clientY);
        });

        bgShapes.addEventListener('mouseout', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          const related = e.relatedTarget?.closest?.('.bs');
          if (related === bs) return;
          hoverTarget = null;
          document.body.classList.remove('hov');
          hideCard();
        });

        bgShapes.addEventListener('click', e => {
          const bs = e.target.closest('.bs');
          if (bs) window.location.href = bs.dataset.href;
        });

        bgShapes.addEventListener('focusin', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          const r = bs.getBoundingClientRect();
          showCard(bs.dataset.env, r.left + r.width / 2, r.top);
        });
        bgShapes.addEventListener('focusout', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          hideCard();
        });
        bgShapes.addEventListener('keydown', e => {
          const bs = e.target.closest('.bs');
          if (bs && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); window.location.href = bs.dataset.href; }
        });

      } else {
        bgShapes.addEventListener('touchend', e => {
          const bs = e.target.closest('.bs');
          if (!bs) return;
          e.preventDefault();
          e.stopPropagation();
          if (touchActive === bs) {
            window.location.href = bs.dataset.href;
          } else {
            if (touchActive) touchActive.classList.remove('bs-selected');
            touchActive = bs;
            bs.classList.add('bs-selected');
            const t = e.changedTouches[0];
            showCard(bs.dataset.env, t.clientX, t.clientY);
          }
        }, { passive: false });
      }
    }

    /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SLOT REEL
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
    const SANS  = "'Suisse BP Int\\\\\\\\'l', 'DM Sans', sans-serif";
    const SERIF = "'Instrument Serif', serif";

    const SLOT_ITEMS = [
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'Le Studio',      color:'#4A82DC', font:SANS,  weight:'800', style:'normal', tracking:'-.03em' },
      { html:"L'Atelier",      color:'#5DA16B', font:SERIF, weight:'400', style:'italic', tracking:'.01em'  },
      { html:'Bleu de Cobalt', color:'#B8940A', font:SANS,  weight:'300', style:'normal', tracking:'.05em'  },
      { html:'Le M\xE9dia',       color:'#BB3B34', font:SANS,  weight:'800', style:'normal', tracking:'.08em'  },
      { html:'<img src="/assets/LOGO/LOGO_COBALT.svg" alt="Collectif Cobalt" class="slot-logo-img" width="520" height="116">', color:'#1A1A1A', font:SANS, weight:'800', style:'normal', tracking:'-.04em' },
    ];

    const slotReel = document.getElementById('slot-reel');
    const slotOuter = document.getElementById('slot-outer');
    const slotHint  = document.getElementById('slot-hint');

    SLOT_ITEMS.forEach(item => {
      const el = document.createElement('div');
      el.className = 'slot-item';
      el.innerHTML = item.html;
      el.style.fontFamily    = item.font;
      el.style.fontWeight    = item.weight;
      el.style.fontStyle     = item.style;
      el.style.letterSpacing = item.tracking;
      el.style.color         = item.color;
      el.style.fontSize      = 'clamp(52px, 11vw, 148px)';
      el.style.lineHeight    = '1.05';
      slotReel.appendChild(el);
    });

    function easeOutBack(t) {
      const c1 = 0.6, c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    requestAnimationFrame(() => requestAnimationFrame(() => {
      let maxH = 0;
      [...slotReel.children].forEach(el => { maxH = Math.max(maxH, el.offsetHeight); });
      const itemH = Math.ceil(maxH) + 2;

      [...slotReel.children].forEach(el => { el.style.height = itemH + 'px'; });
      slotOuter.style.height = itemH + 'px';

      setTimeout(placeBgShapes, 0);

      const totalDist = (SLOT_ITEMS.length - 1) * itemH;
      const DURATION  = 3733;
      let startTs = null;

      function animReel(ts) {
        if (!startTs) startTs = ts;
        const t     = Math.min((ts - startTs) / DURATION, 1);
        const eased = easeOutBack(t);
        slotReel.style.transform = \\\`translateY(-\\\${eased * totalDist}px)\\\`;
        if (t < 1) {
          requestAnimationFrame(animReel);
        } else {
          slotReel.style.transform = \\\`translateY(-\\\${totalDist}px)\\\`;
          setTimeout(() => {
            slotHint.classList.add('in');
            document.getElementById('landing-logo')?.classList.add('in');
            document.getElementById('escape-nav')?.classList.add('in');
          }, 300);
        }
      }

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) {
        slotReel.style.transform = \\\`translateY(-\\\${totalDist}px)\\\`;
        setTimeout(() => {
          slotHint.classList.add('in');
          document.getElementById('landing-logo')?.classList.add('in');
          document.getElementById('escape-nav')?.classList.add('in');
        }, 100);
      } else {
        setTimeout(() => requestAnimationFrame(animReel), 350);
      }
    }));
  <\/script> </body> </html>`])), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageAbs, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageAbs, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Collectif Cobalt",
    "url": "https://collectifcobalt.eu",
    "description": "Studio d'architecture, design d'espace, fabrication et m\xE9dia en Nouvelle-Aquitaine.",
    "areaServed": { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" },
    "address": { "@type": "PostalAddress", "addressRegion": "Nouvelle-Aquitaine", "addressCountry": "FR" },
    "sameAs": [
      "https://www.instagram.com/collectifcobalt",
      "https://www.linkedin.com/company/collectif-cobalt"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nos activit\xE9s",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Le Studio", "description": "Architecture et design d'espace" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "L'Atelier", "description": "Fabrication et prototypage" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bleu de Cobalt", "description": "Programme et cabinets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Le M\xE9dia", "description": "Architalk et journal" } }
      ]
    }
  })), renderHead());
}, "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/index.astro", void 0);

const $$file = "/sessions/magical-wonderful-hamilton/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/SITE_INTERNET_ASTRO/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
