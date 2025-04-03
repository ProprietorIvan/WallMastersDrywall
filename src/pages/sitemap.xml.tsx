import { GetServerSideProps } from "next";

const SITE_URL = "https://drywallvan.ca";

const pages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/drywall", changefreq: "weekly", priority: 0.9 },
  { url: "/drywall-repair", changefreq: "weekly", priority: 0.9 },
  { url: "/drywall-installation", changefreq: "weekly", priority: 0.9 },
  { url: "/texture-matching", changefreq: "weekly", priority: 0.9 },
  { url: "/commercial-drywall", changefreq: "weekly", priority: 0.9 },
  { url: "/burnaby-drywall", changefreq: "weekly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
  { url: "/terms", changefreq: "yearly", priority: 0.3 },
];

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      ({ url, changefreq, priority }) => `
    <url>
      <loc>${SITE_URL}${url}</loc>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();

  return {
    props: {},
  };
};

// This default export is required
export default function Sitemap() {
  return null;
}
