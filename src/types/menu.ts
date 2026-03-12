export type IconName = "zap" | "sparkles" | "smile" | "activity";

export interface MenuItem {
  id: string;
  name: string;
  parts: string[];
  price: number;
  unit: string;
  popular?: boolean;
  note?: string;
  badge?: string;
}

export interface DiscountStep {
  session: number;
  discountRate: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: IconName;
  items: MenuItem[];
  newClientDiscount?: DiscountStep[];
}
