import React from 'react';
import Header from './Nav_elements/Header';
import Cart from './Nav_elements/Cart';
import Login from './Nav_elements/Login';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Cart /> 
                <Login />
            </div>
        );
    }
}

export default NavigationBar;