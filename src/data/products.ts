export interface TherapeuticArea {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  slug: string;
  brandName: string;
  composition: string;
  therapeuticArea: string;
  therapeuticAreaSlug: string;
  indication: string;
  dosageForm: string;
  packSize: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Therapeutic Areas', path: '/therapeutic-areas' },
  { label: 'Products', path: '/products' },
  { label: 'Quality', path: '/quality' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];
