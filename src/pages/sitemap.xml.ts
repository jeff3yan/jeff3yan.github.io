import type { APIRoute } from 'astro';
import { seoPageSlugs } from '../data/seo-pages';

const site = 'https://getremoji.com';
const staticPages = ['', 'privacy', 'terms'];

export const GET: APIRoute = () => {
  const urls = [...staticPages, ...seoPageSlugs].map((path) => {
    const loc = path ? `${site}/${path}` : `${site}/`;
    const priority = path === '' ? '1.0' : seoPageSlugs.includes(path) ? '0.8' : '0.3';
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
