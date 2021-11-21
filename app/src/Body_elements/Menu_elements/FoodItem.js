import React, { useContext } from 'react';
import CartContext from '../../stores/cart-context';

export default function FoodItem(props) {
    const n=25000;
    const CrtCtx= useContext(CartContext);
    return (
        <div className="box">
            <div className="image">
                <img src= {'/images/food/' + props.data.img} alt=""/>
            </div>
            <div className="content">
                <h3>{props.data.name}</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span> (50) </span>
                </div>
                <div className="price">{props.data.price.toLocaleString()} <span>{n.toLocaleString()}(VNĐ)</span></div>
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