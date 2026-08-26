export type ProductStatus = "Available" | "Coming Soon";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  status: ProductStatus;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    workingHours: string;
  };
  socials: SocialLink[];
  hydroponicBenefits: FeatureItem[];
  technologyFeatures: FeatureItem[];
  sustainabilityBenefits: string[];
}
