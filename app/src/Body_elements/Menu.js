import React from 'react';
import CategoryBar from './Menu_elements/CategoryBar';
import FoodGrid from './Menu_elements/FoodGrid';
import './Menu.css'

function Menu() {
    return (
        <div id = "menu-container">
            <CategoryBar />
            <FoodGrid />
        </div>
    );
}

export default Menu;