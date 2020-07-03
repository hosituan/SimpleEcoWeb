export default interface product {
    description: string;
    amount: number;
    date: string;
  }

export class Product {
  id: Int32Array;
  name: string;
  price: number;
  des: string;
  instock: number;
  manufactor: string;
  code: string;
  category: string;
  detail: string;
  image: string
}  