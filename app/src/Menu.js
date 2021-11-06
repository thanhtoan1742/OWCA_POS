import React from 'react';
import CategoryBar from './Menu_elements/CategoryBar';
import FoodGrid from './Menu_elements/FoodGrid';


class Menu extends React.Component {
    render() {
        return (
            <div>
                <CategoryBar />
                <FoodGrid />
            </div>
        );
    }
}

export default Menu;