import { MetadataRoute } from 'next';

// Constants
import { WEBSITE_DOMAIN } from '@constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${WEBSITE_DOMAIN}/sitemap.xml`,
  };
}
