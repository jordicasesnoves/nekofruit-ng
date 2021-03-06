// Backend server:
// https://github.com/typicode/json-server

export class Product {
  id?: number;
  name: string;
  description: string;
  price_EUR: number;
  total_sales: number;
  new_product: boolean;
  image_url: string;
}

export class CartItem {
  id?: number;
  product: Product;
  quantity: number;
}
export class Pageable {
  page: number;
  limit: number;
}

// Without declaring 'stock' property, we're assuming that stock is unlimited (not so real)

// export interface FilterProduct {
//   _page: number;
//   _limit?: number; // Default limit is 10
//   _sort?: string;
//   _order?: string;
//   _start?: number;
//   _end?: number;
//   _gte?: number;
//   _lte?: number;
//   _ne?: number;
//   _like?: string;
//   q?: string;
// }
