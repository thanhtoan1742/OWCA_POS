import React from 'react';
import './FoodGrid.css';
import Combo from './FoodGrid_elements/Combo';
import Pizza from './FoodGrid_elements/Pizza';

function FoodGrid(){ 
    return (
        <div class = "food-grid">
            <Combo/>
            <Pizza/>
        </div>
    );
}

export default FoodGrid;