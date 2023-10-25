import { getServerSideSitemapIndex } from 'next-sitemap';
import { getDomain } from '../../utilities/dev';

const sitemapData = ['sitemap-main.xml'];

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const sitemapIndex = sitemapData.map((load) => `${getDomain()}/${load}`);

  return getServerSideSitemapIndex(ctx, sitemapIndex);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
