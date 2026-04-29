import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, s as decodeKey } from './chunks/astro/server_BhwfrjQd.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/","adapterName":"","routes":[{"file":"file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/drops.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/drops","isIndex":true,"type":"page","pattern":"^\\/drops$","segments":[[{"content":"drops","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/drops/index.astro","pathname":"/drops","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/journal.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/journal","isIndex":true,"type":"page","pattern":"^\\/journal$","segments":[[{"content":"journal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/journal/index.astro","pathname":"/journal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/projets.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projets","isIndex":true,"type":"page","pattern":"^\\/projets$","segments":[[{"content":"projets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projets/index.astro","pathname":"/projets","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/studio.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/studio","isIndex":false,"type":"page","pattern":"^\\/studio$","segments":[[{"content":"studio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studio.astro","pathname":"/studio","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://astro.collectifcobalt.eu","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/drops/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/drops/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/drops/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/drops/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/journal/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/journal/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/journal/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/journal/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/projets/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projets/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/projets/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projets/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/pages/studio.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/drops/[slug]@_@astro":"pages/drops/_slug_.astro.mjs","\u0000@astro-page:src/pages/drops/index@_@astro":"pages/drops.astro.mjs","\u0000@astro-page:src/pages/journal/[slug]@_@astro":"pages/journal/_slug_.astro.mjs","\u0000@astro-page:src/pages/journal/index@_@astro":"pages/journal.astro.mjs","\u0000@astro-page:src/pages/projets/[slug]@_@astro":"pages/projets/_slug_.astro.mjs","\u0000@astro-page:src/pages/projets/index@_@astro":"pages/projets.astro.mjs","\u0000@astro-page:src/pages/studio@_@astro":"pages/studio.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_5QGFUybK.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/drops/fragments-01.mdx?astroContentCollectionEntry=true":"chunks/fragments-01_CMXtD3w_.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/journal/architalk-01-pourquoi-on-construit.mdx?astroContentCollectionEntry=true":"chunks/architalk-01-pourquoi-on-construit_f5UsTwVA.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/projets/appartement-angouleme.mdx?astroContentCollectionEntry=true":"chunks/appartement-angouleme_BWTMJ-_0.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/drops/fragments-01.mdx?astroPropagatedAssets":"chunks/fragments-01_tVjwTM2j.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/journal/architalk-01-pourquoi-on-construit.mdx?astroPropagatedAssets":"chunks/architalk-01-pourquoi-on-construit_O1ONX5KM.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/projets/appartement-angouleme.mdx?astroPropagatedAssets":"chunks/appartement-angouleme_DG1lImXk.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/drops/fragments-01.mdx":"chunks/fragments-01_DWZqQ-S2.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/journal/architalk-01-pourquoi-on-construit.mdx":"chunks/architalk-01-pourquoi-on-construit_C4kIBSX5.mjs","/sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/src/content/projets/appartement-angouleme.mdx":"chunks/appartement-angouleme_BZ8MaMrJ.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DklumOnW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/drops.html","/file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/journal.html","/file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/projets.html","/file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/studio.html","/file:///sessions/compassionate-gracious-ptolemy/mnt/Site_Internet_Cobalt/SITE_V3_ASTRO/dist/index.html"],"buildFormat":"file","checkOrigin":false,"serverIslandNameMap":[],"key":"t7b7jRuYNYzgfIsUHL5ZyeUih91tzIfiZpuSOAGNloQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
