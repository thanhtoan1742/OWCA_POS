import React from 'react';
const foodImagePath = '/images/food/';
function FoodItem() {
    return (
        <div className="box">
            <div className="image">
                <img src= {foodImagePath + "food-2.png"} />
            </div>
            <div className="content">
                <h3>food</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span> (50) </span>
                </div>
                <div className="price">69.000(VNĐ) <span>100.000(VNĐ)</span></div>
                <div className="btn">add to cart</div>
            </div>
        </div>
    );
}
function Pizza(){
    return(
        <section id="pizza" class = "product">
            <h1 className="title">our <span>products</span></h1>
            <div className="food-container">
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
            </div>
        </section>
    );
}
export default Pizza;