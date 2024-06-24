import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://example.com' });

  // Create a promise that resolves when the sitemap is fully written
  const sitemapPromise = streamToPromise(sitemap).then((data) => data.toString());

  // Write URLs to the sitemap
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/services', changefreq: 'monthly', priority: 0.8 });

  // End the sitemap stream
  sitemap.end();

  // Wait for the sitemap to be fully written
  const sitemapData = await sitemapPromise;

  // Write the sitemap to the file system
  const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));
  writeStream.write(sitemapData);
  writeStream.end();
};

generateSitemap().catch(console.error);
