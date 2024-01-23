import React from 'react'
import './Card.css';

const Card = ({product}) => {
    return (
        <div className='card_wrapper' key={product.id}>
            <div className="image_container">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="card_body">
                <div className="price_rating">
                    <div><span>Price: </span> ${product.price}</div>
                    <div>{product.rating}</div>
                </div>
                <div className="description">
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default Card
