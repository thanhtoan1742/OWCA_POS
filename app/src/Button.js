import React from 'react';

class Button extends React.Component {
    render() {
        const style = {
            height: "100%",
        };

        return (
            <button style={style}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;