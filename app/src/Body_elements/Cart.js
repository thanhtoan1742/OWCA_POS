import React from 'react';
import './Cart.css';

const foodImage = '/images/food/';

function CartItem(props) {
//     function updateQuantity(amount) {
        // var quantity = document.getElementById("quantity");
        // if (isNaN(parseInt(quantity.value))) {
        //     console.log("Not a number");
        // } else {
        //     quantity.value = parseInt(quantity.value) + amount;
        // }
        
    // }

    return (
        <div class="box">
            <i class="fas fa-times"></i>
            <img src={foodImage + props.img} alt=""/>
            <div class="content">
                <h3>{props.name}</h3>
                <span> quantity : </span>
                <input type="number" defaultValue={props.quantity} min="1"/>
                <br/>
                <span> price : </span>
                <span class="price"> {props.price + " (VNĐ)"} </span>
            </div>
        </div>
    );
}

function Cart() {
    return (
        <section class="cart-container" id = "cart">
            <div class="products-container">
                <h3 class="title">your cart</h3>
                <div class="box-container">
                    <CartItem img="food.png" name="food" quantity="3" price="69.999"/>
                    <CartItem img="food.png" name="food" quantity="1" price="69.999"/>
                    <CartItem img="food.png" name="food" quantity="1" price="69.999"/>
                    <CartItem img="food.png" name="food" quantity="1" price="69.999"/>
                    <CartItem img="food.png" name="food" quantity="1" price="69.999"/>
                    <CartItem img="food.png" name="food" quantity="1" price="69.999"/>
                </div>
            </div>
            <div class="cart-total">
                <h3 class="title"> cart total </h3>
                <div class="box">
                    <h3 class="subtotal"> subtotal : <span>349.995 (VNĐ)</span> </h3>
                    <h3 class="total"> total : <span>349.995 (VNĐ)</span> </h3>
                    <a href="#" class="btn">proceed to checkout</a>
                </div>
            </div>
        </section>
    );
}

export default Cart;