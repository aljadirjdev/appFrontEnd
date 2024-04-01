import { EmployeeInterface } from '../Employee/EmployeeInterface';
import ReviewsInterface from './ReviewInterface';
import DetailProductInterface from './DetailProductInterface';
import MakerProductInterface from './MakerProductInterface';

interface ProductInterface {
  _id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  image: string;
  category: string;
  detail: DetailProductInterface;
  maker: MakerProductInterface;
  employee: EmployeeInterface;
  status: boolean;
  reviews: ReviewsInterface;
}
export default ProductInterface;
