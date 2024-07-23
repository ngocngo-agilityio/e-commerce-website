//  Types
import { MenuItem, Menu, IBreadcrumbItem } from '@types';

// Constants
import { APP_ROUTERS } from './routes';

export const NAVIGATION = [
  { title: 'Home', path: APP_ROUTERS.HOME_PAGE },
  { title: 'About', path: '#' },
  { title: 'Contact us', path: '#' },
];

const COMPANY_INFO: MenuItem[] = [
  { title: 'About us', path: '#' },
  { title: 'Latest Posts', path: '#' },
  { title: 'Contact Us', path: '#' },
  { title: 'Shop', path: '#' },
];

const HELP_LINKS: MenuItem[] = [
  { title: 'Tracking', path: '#' },
  { title: 'Order Status', path: '#' },
  { title: 'Delivery ', path: '#' },
  { title: 'Shipping Info', path: '#' },
  { title: 'FAQ', path: '#' },
];

const USEFUL_LINKS: MenuItem[] = [
  { title: 'Special Offers', path: '#' },
  { title: 'Gift Cards', path: '#' },
  { title: 'Advertising', path: '#' },
  { title: 'Term Of Use', path: '#' },
];

export const FOOTER_MENU: Menu[] = [
  { heading: 'Company info', items: COMPANY_INFO },
  { heading: 'Help links', items: HELP_LINKS },
  { heading: 'Useful links', items: USEFUL_LINKS },
];

export const CART_PAGE_BREADCRUMB: IBreadcrumbItem[] = [
  { label: 'Home', href: APP_ROUTERS.HOME_PAGE },
  { label: 'Cart', href: APP_ROUTERS.CART_PAGE, isCurrentPage: true },
];
