import React, { useContext } from 'react';
import CartContext from '../../stores/cart-context';

export default function FoodItem(props) {
    const CrtCtx= useContext(CartContext);
    return (
        <div className="box">
            <div className="image">
                <img src= {'/images/food/' + props.data.img} />
            </div>
            <div className="content">
                <h3>{props.data.name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span> (50) </span>
                </div>
                <div className="price">{props.data.price} <span>25(VNĐ)</span></div>
                <div className="btn" onClick={()=>{
                    let newFood={
                        ...props.data,
                        quantity:1
                    }
                    CrtCtx.addToCart(newFood);
                }}>add to cart</div>
            </div>
        </div>
    );
}