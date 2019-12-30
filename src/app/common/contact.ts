export enum ContactScopeEnum {
  SOCIALS = 'socials',
  PHONE = 'phone',
  EMAIL = 'email',
}
export interface Contact {
  id?: number;
  value: string;
  label: string;
  link?: string;
  scope: ContactScopeEnum,
  active: boolean;
  created_at?: Date;
  updated_at?: Date;
}
