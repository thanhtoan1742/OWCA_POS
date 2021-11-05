import React from 'react';

class FoodView extends React.Component {
    render() {
        const containerStyle = {
            display: "flex",

            width: "1276px",
            height: "400px",
            background: "#b3b3b3",
        };

        const imageStyle = {
            flex: 4,
        };

        const rightColumnStyle = {
            flex: 6,

            display: "flex",
            flexDirection: "column",
        };

        const nameStyle = {
            width: "100%",
            fontSize: "15pt"
        }

        const descriptionStyle = {
            flex: 1,

            width: "100%",
            fontSize: "15pt"
        }

        const priceStyle = {
            width: "100%",
            fontSize: "15pt"
        }

        return (
            <div style={containerStyle}>
                <img src={this.props.image} style={imageStyle}/>
                <div style={rightColumnStyle}>
                    <div style={nameStyle}>{this.props.name}</div>
                    <div style={descriptionStyle}>{this.props.description}</div>
                    <div style={priceStyle}>{this.props.price}</div>
                </div>
            </div>
        );
    }
}

export default FoodView;