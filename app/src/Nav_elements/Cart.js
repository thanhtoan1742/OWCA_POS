import React from 'react';
import './Cart.css'


function CartItem(props) {
    function updateQuantity(amount) {
        // var quantity = document.getElementById("quantity");
        // if (isNaN(parseInt(quantity.value))) {
        //     console.log("Not a number");
        // } else {
        //     quantity.value = parseInt(quantity.value) + amount;
        // }
        
    }

    return (
    <div>
        <img src="#" alt="yolo"></img>
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div>
                <button onClick={updateQuantity(-1)}>-</button>
                <textarea type="number" id="quantity" defaultValue="1"></textarea>
                <button onClick={updateQuantity(1)}>+</button>
                <p>{props.price}</p>
            </div>
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
                    <div class="box">
                        <i class="fas fa-times"></i>
                        <img src="" alt=""/>
                        <div class="content">
                            <h3>food</h3>
                            <span> quantity : </span>
                            <input type="number" defaultValue={1} min = "1" />
                            <br/>
                            <span> price : </span>
                            <span class="price"> 69.999 (VNĐ) </span>
                        </div>
                    </div>
                    <div class="box">
                        <i class="fas fa-times"></i>
                        <img src="" alt=""/>
                        <div class="content">
                            <h3>food</h3>
                            <span> quantity : </span>
                            <input type="number" defaultValue={1} min = "1" />
                            <br/>
                            <span> price : </span>
                            <span class="price"> 69.999 (VNĐ) </span>
                        </div>
                    </div>
                    <div class="box">
                        <i class="fas fa-times"></i>
                        <img src="" alt=""/>
                        <div class="content">
                            <h3>food</h3>
                            <span> quantity : </span>
                            <input type="number" defaultValue={1} min = "1" />
                            <br/>
                            <span> price : </span>
                            <span class="price"> 69.999 (VNĐ) </span>
                        </div>
                    </div>
                    <div class="box">
                        <i class="fas fa-times"></i>
                        <img src="" alt=""/>
                        <div class="content">
                            <h3>food</h3>
                            <span> quantity : </span>
                            <input type="number" defaultValue={1} min = "1" />
                            <br/>
                            <span> price : </span>
                            <span class="price"> 69.999 (VNĐ) </span>
                        </div>
                    </div>
                    <div class="box">
                        <i class="fas fa-times"></i>
                        <img src="" alt=""/>
                        <div class="content">
                            <h3>food</h3>
                            <span> quantity : </span>
                            <input type="number" defaultValue={1} min = "1" />
                            <br/>
                            <span> price : </span>
                            <span class="price"> 69.999 (VNĐ) </span>
                        </div>
                    </div>
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