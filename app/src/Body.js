import React from 'react';
// import Home from './Body_elements/Home';
import Menu from './Body_elements/Menu';
import Cart from './Body_elements/Cart';
// import Payment from './Body_elements/Payment'
import Login from './Body_elements/Login';
import './Body.css';


function Body() {
    return (
        <div className="body">
            {/* <Home/> */}
            <Menu/>
            <Cart />
            {/* <Payment /> */}
            <Login />
        </div>
    );
}

export default Body;