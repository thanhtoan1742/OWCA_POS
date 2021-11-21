import React, { useContext } from 'react';
import './Cart.css';
import CartContext from '../stores/cart-context'

const foodImage = '/images/food/';

function CartItem(props) {
    const CrtCtx = useContext(CartContext);
    function onHandleChange(event){
        // console.log(event.target.value);
        if(event.target.value>=1){
            CrtCtx.changeQuantity(props.data.id, Number(event.target.value));
        }
    }
    // console.log(props.data.quantity);
    function onHandleRemove(){
        CrtCtx.removeCart(props.data.id);
    }
    return (
        <div className="box">
            <i className="fas fa-times" onClick={onHandleRemove}></i>
            <img src={foodImage + props.data.img} alt=""/>
            <div className="content">
                <h3>{props.data.name}</h3>
                <span> quantity : </span>
                <input type="number" value={props.data.quantity} min="1" onChange={onHandleChange}/>
                <br/>
                <span> price : </span>
                <span className="price"> {props.data.price.toLocaleString() + " (VNĐ)"} </span>
            </div>
        </div>
    );
}

function Cart() {
    const CrtCtx = useContext(CartContext);
    let content;
    content = (CrtCtx.totalItem
        ? CrtCtx.cart.map((food, index)=>{
            // console.log(food);
            return (
                <CartItem data={food} key={index}/>
            )
        })
        : <h4>you didn't add anything yet...</h4>
    )

    return (
        <section className="cart-container" id = "cart">
            <div className="products-container">
                <h3 className="title">your cart</h3>
                <div className="box-container">
                    {content}
                </div>
            </div>
            <div className="cart-total">
                <h3 className="title"> cart total </h3>
                <div className="box">
                    <h3 className="subtotal"> subtotal : <span>{CrtCtx.totalPrice.toLocaleString()} (VNĐ)</span> </h3>
                    <h3 className="total"> total : <span>{CrtCtx.totalPrice.toLocaleString()} (VNĐ)</span> </h3>
                    <a href="\#" className="btn">checkout</a>
                </div>
            </div>
        </section>
    );
}

export default Cart;