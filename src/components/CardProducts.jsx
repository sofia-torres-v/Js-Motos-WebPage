import './CardProducts.css'
import { useState } from 'react';
import PropTypes from 'prop-types';


const CardProducts = ({ product }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`container-card-product ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className='card-front'>
        {/* <span className='title-card-product'>{product.name}</span> */}
        <figure className='container-img-product'>
          <img className='img-product' src={product.image} alt='product image' />
        </figure>
      </div>

      <div className='card-back'>
        <div className='card-back-content'>
          <span className='title-card-product'>{product.name}</span>
          {/* <div className='container-description-product'> */}
            <p className='description-card-product'>{product.description}</p>
          {/* </div> */}
          <span className='brand-card-product'>{product.brand}</span>
        </div>
      </div>

    </div>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object,
}

export default CardProducts;