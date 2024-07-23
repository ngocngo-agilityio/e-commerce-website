export interface MenuItem {
  title: string;
  path: string;
}

export interface Menu {
  heading: string;
  items: MenuItem[];
}

export type IBreadcrumbItem = {
  label: string;
  href: string;
  isCurrentPage?: boolean;
};
