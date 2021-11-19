import React from 'react';
import Menu from './Body_elements/Menu';
import Cart from './Body_elements/Cart';
import Payment from './Body_elements/Payment'
import './Body.css';


function Body() {
    return (
        <div class = "body">
            <Menu/>
            <Cart />
            <Payment />
        </div>
    );
}

export default Body;