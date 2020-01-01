export interface Bond {
  id?: number;
  title: string;
  description?: string;
  prices: number[];
  valid_till?: Date;
  available: boolean;
  amount: number;
  product_type: 'bond';
  created_at?: Date;
  updated_at?: Date;
  // specification
  bond_id?: number;
  bond_currency: string;
  bond_value: string;
  bond_serial: string;
  bond_number: string;
  bond_country: string;
  is_copy: boolean;
  // category
  category_id: number;
}
