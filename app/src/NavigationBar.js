import React from 'react';
import Header from './Nav_elements/Header';
import Cart from './Nav_elements/Cart';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Cart /> 
            </div>
        );
    }
}

export default NavigationBar;