import { MetadataRoute } from 'next';

// Constants
import { WEBSITE_DOMAIN, APP_ROUTERS } from '@constants';

// APIs
import { getProductList } from '@apis';

// Base sitemap
const SITEMAP_BASE: MetadataRoute.Sitemap = [
  {
    url: `${WEBSITE_DOMAIN}${APP_ROUTERS.HOME_PAGE}`,
    lastModified: new Date(),
    priority: 1,
  },
  {
    url: `${WEBSITE_DOMAIN}${APP_ROUTERS.CART_PAGE}`,
    lastModified: new Date(),
    priority: 0.8,
  },
];

// Dynamic sitemap
const generateProductSitemap = async () => {
  const { data: productList } = await getProductList();

  const sitemap: MetadataRoute.Sitemap = productList.map(({ id }) => ({
    url: `${WEBSITE_DOMAIN}${APP_ROUTERS.HOME_PAGE}/${id}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return sitemap;
};

export const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const productSitemap = await generateProductSitemap();

  return [...SITEMAP_BASE, ...productSitemap];
};

export default sitemap;
