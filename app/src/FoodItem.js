import React from 'react';

class FoodItem extends React.Component {
    render() {
        const containerStyle = {
            display: "flex",
            flexDirection: "column",

            width: "200px",
            height: "220px",
        };

        const imageStyle = {
            width: "100%",
            height: "68%",
        };

        const nameStyle = {
            width: "100%",
            height: "21%",
            fontSize: "15pt"
        }

        const priceStyle = {
            width: "100%",
            height: "11%",
            fontSize: "15pt"
        }

        return (
            <div style={containerStyle}>
                <img src={this.props.image} style={imageStyle}/>
                <div style={nameStyle}>{this.props.name}</div>
                <div style={priceStyle}>{this.props.price}</div>
            </div>
        );
    }
}

export default FoodItem;