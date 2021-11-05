import React from 'react';
import Popup from 'reactjs-popup';
import FoodView from './FoodView'

class FoodItem extends React.Component {
    render() {
        const containerStyle = {
            display: "flex",
            flexDirection: "column",

            width: "200px",
            height: "220px",
        };

        const imageStyle = {
            flex: 7,
        };

        const nameStyle = {
            flex: 2,
            fontSize: "15pt"
        }

        const priceStyle = {
            flex: 1,
            fontSize: "15pt"
        }

        const element =
            <div style={containerStyle}>
                <img style={imageStyle} src={this.props.image} alt=""/>
                <div style={nameStyle}>{this.props.name}</div>
                <div style={priceStyle}>{this.props.price}</div>
            </div>;

        const description = "fried chicken is a good food to relieve your stress."


        return (
            <Popup trigger={element} position="center center">
                <FoodView
                    image={this.props.image}
                    name={this.props.name}
                    description={description}
                    price={this.props.price}
                />
            </Popup>
        );
    }
}

export default FoodItem;