import React from 'react';
import Button from './Button'

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Button>sidebar</Button>
                <Button>logo</Button>
                <Button>filter</Button>
                <input type='text'></input>
                <Button>cart</Button>
                <Button>user</Button>
            </div>
        );
    }
}

export default NavigationBar;