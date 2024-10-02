import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a0CetO-9.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/sergioromano/projects/personal/javascript-modern-life/packages/www/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: ""
    //Bucket: Resource.MyBucket.name,
  });
  const url = await getSignedUrl(new S3Client({}), command);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro x SST", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <form${addAttribute(url, "action")} data-astro-cid-j7pv25f6> <input name="file" type="file" accept="image/png, image/jpeg" data-astro-cid-j7pv25f6> <button type="submit" data-astro-cid-j7pv25f6>Upload</button> </form>  </main> ` })} `;
}, "/Users/sergioromano/projects/personal/javascript-modern-life/packages/www/src/pages/index.astro", void 0);

const $$file = "/Users/sergioromano/projects/personal/javascript-modern-life/packages/www/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
