import { ProductCard } from '../ProductCard';
import './ProductList.scss';




export const ProductList = ({ goods }) => (
  <div className="Product__list">
    {goods.map(good => (
      <ProductCard good={good} key={good.id} />
    ))}
  </div>


)