
export interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface MembershipTier {
  name: string;
  price: string;
  benefits: string[];
  isFeatured?: boolean;
}
