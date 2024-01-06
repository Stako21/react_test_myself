import cn from 'classnames';
import './ProductCard.scss';

export const ProductCard = ({ good }) => (
  <div
    className={cn('ProductCard', {
      'ProductCard--free': good.price === 0,
      'ProductCard--expensive': good.price > 0,
      'ProductCard--chip': good.price > 100,
    })}>
    <h2
      className="ProductCard__title"
      style={{ color: good.price === 0 ? 'green' : 'red' }}
    >

      {good.product}
    </h2>
    <div className="ProductCard__price">
      {`Price: ${good.price} `}
      {good.price === 0 && (
        <>
          <span>*</span>
          <span>*</span>
        </>
      )}
    </div>
  </div >
)