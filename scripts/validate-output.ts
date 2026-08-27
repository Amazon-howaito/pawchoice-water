import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "out"); const errors: string[] = [];
if (!existsSync(root)) errors.push("out directory missing");
const files: string[] = [];
function walk(dir: string) { for (const name of readdirSync(dir)) { const path=join(dir,name); if (statSync(path).isDirectory()) walk(path); else files.push(path); } }
if (existsSync(root)) walk(root);
const html=files.filter((file)=>file.endsWith(".html")&&!file.includes("/404")&&!file.includes("/_not-found/"));
for(const file of html){const body=readFileSync(file,"utf8");if(!body.includes('rel="canonical"'))errors.push(`canonical missing: ${file}`);if(body.includes('"offers"')||body.includes('aggregateRating')||body.includes('"review"'))errors.push(`unsafe Product data: ${file}`);}
for(const file of html){const body=readFileSync(file,"utf8");for(const match of body.matchAll(/href="(\/[^"#?]*)/g)){const href=match[1];if(href.startsWith("/_next/"))continue;const target=href==="/"?join(root,"index.html"):join(root,href,"index.html");if(!existsSync(target)&&!existsSync(join(root,`${href}.html`)))errors.push(`broken internal link ${href} in ${file}`)}}
for(const required of ["robots.txt","sitemap.xml","water-fountains/index.html","water-fountains/compare/index.html"]){if(!existsSync(join(root,required)))errors.push(`missing output: ${required}`)}
const all=files.filter((file)=>/\.(html|txt|xml|js|json|css)$/.test(file)).map((file)=>readFileSync(file,"utf8")).join("\n");
for(const forbidden of ["AMAZON_PARTNER_TAG","/Users/","AKIA","飲水量が必ず増える","病気を予防できる","実際に使った"]){if(all.includes(forbidden))errors.push(`forbidden output text: ${forbidden}`)}
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log(`Output validation PASS: ${html.length} HTML files, canonical/SEO/security checks complete`);
