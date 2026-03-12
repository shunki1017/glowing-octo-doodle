export type FeatureIconName =
  | "users"
  | "shield-check"
  | "zap-off"
  | "award"
  | "car"
  | "clock";

export interface Feature {
  id: string;
  icon: FeatureIconName;
  title: string;
  titleEn: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  tel?: string;
  menu: string;
  message: string;
  privacyAgreed: boolean;
}
