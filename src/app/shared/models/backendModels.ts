export interface Product {
  id?: number;
  name: string;
  description: string;
  price_EUR: number;
  total_sales: number;
}

// Without declaring 'stock' property, we're assuming that stock is unlimited (not so real)
