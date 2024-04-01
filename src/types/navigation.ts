export interface MenuItem {
  title: string;
  path: string;
}

export interface Menu {
  heading: string;
  items: MenuItem[];
}
