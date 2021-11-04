import React from 'react';
import FoodItem from './FoodItem';
import friedChickenImage from './images/fried_chicken.jpg'

class FoodGrid extends React.Component {
    render() {
        const friedChickenItem = <FoodItem image={friedChickenImage} name='Fried Chicken' price={15}/>;
        const itemList = []
        for (let i = 0; i < 10; ++i)
            itemList.push(friedChickenItem);

        const style = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 200px)",
            gap: "10px",
        };

        return (
            <div style={style}>
                {itemList}
            </div>
        );
    }
}

export default FoodGrid;