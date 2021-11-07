import React from 'react';
import Menu from './Body_elements/Menu';
import Cart from './Body_elements/Cart';
import './Body.css';

function Body() {
    return (
        <div class = "body">
            <Menu />
            <Cart />
        </div>
    );
}

export default Body;