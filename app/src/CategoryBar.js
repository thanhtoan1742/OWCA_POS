import React from 'react';
import Button from './Button'


class CategoryBar extends React.Component {
    render() {
        return (
            <div>
                <Button>Snack</Button>
                <Button>FastFood</Button>
                <Button>Drink</Button>
            </div>
        );
    }
}

export default CategoryBar;