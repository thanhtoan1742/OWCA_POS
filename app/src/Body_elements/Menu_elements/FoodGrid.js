import React from 'react';
import './FoodGrid.css';
import FoodItem from './FoodItem';

function FoodGrid(props){ 
    return (
        <div class = "food-grid">
            <section id="pizza" class = "product">
            <h1 className="title">our <span>products</span></h1>
            <div className="food-container">
            
            {props.foodlist.map((item, index)=>{
                return(
                    <FoodItem data={item} key={index}/>
                )
            })}
            </div>
            </section>
        </div>
    );
}

export default FoodGrid;