//  Types
import { MenuItem, Menu } from '@types';

export const NAVIGATION = [
  { title: 'Home', path: '#' },
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
