export interface Category {
  id?: number;
  title: string;
  slug: string;
  parent_category_id?: number;
  active: boolean;
  created_at?: Date;
  updated_at?: Date;
}
