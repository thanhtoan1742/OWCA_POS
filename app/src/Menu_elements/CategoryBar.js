import React from 'react';
import './CategoryBar.css';
import cat_1 from '../images/cat-1.png';
import cat_2 from '../images/cat-2.png';
import cat_3 from '../images/cat-3.png';
import cat_4 from '../images/cat-4.png';
import cat_5 from '../images/cat-5.png';
import cat_6 from '../images/cat-6.png';

function CategoryBar(props) {
    return (
        <section class="category">
            <h1 class="title"> our <span>category</span></h1>
            <div class="box-container">
                <a href="#" class="box">
                    <img src={cat_1} alt=""/>
                    <h3>combo</h3>
                </a>
                <a href="#" class="box">
                    <img src={cat_2} alt=""/>
                    <h3>pizza</h3>
                </a>
                <a href="#" class="box">
                    <img src={cat_3} alt=""/>   
                    <h3>hamburger</h3>
                </a>
                <a href="#" class="box">
                    <img src={cat_4} alt=""/>
                    <h3>chicken</h3>
                </a>
                <a href="#" class="box">
                    <img src={cat_5} alt=""/>
                    <h3>dessert</h3>
                </a>
                <a href="#" class="box">
                    <img src={cat_6} alt=""/>
                    <h3>drink</h3>
                </a>
            </div>
        </section>
    );
}

export default CategoryBar;