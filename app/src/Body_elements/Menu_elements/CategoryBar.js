import React from 'react';
import './CategoryBar.css';

const categoryImagePath = '/images/category/'

function CategoryItem(props) {
    return (
        <a href={props.href} id ={props.id} onClick = {props.onClick} class="box">
            <img src={categoryImagePath + props.src} alt={props.children}/>
            <h3>{props.children}</h3>
        </a>
    );
}

function CategoryBar(props) {
    function Combo_handle(){
        let combo_btn = document.getElementById("combo-btn");
        let combo = document.getElementById("combo");
        let pizza_btn = document.getElementById("pizza-btn");
        let pizza = document.getElementById("pizza");
        combo_btn.classList.toggle("active");
        combo.classList.toggle("active");
        pizza_btn.classList.remove("active");
        pizza.classList.remove("active");
    }
    function Pizza_handle(){
        let pizza_btn = document.getElementById("pizza-btn");
        let pizza = document.getElementById("pizza");
        let combo_btn = document.getElementById("combo-btn");
        let combo = document.getElementById("combo");
        pizza_btn.classList.toggle("active");
        pizza.classList.toggle("active");
        combo_btn.classList.remove("active");
        combo.classList.remove("active");
    }

    return (
        <section class="category" id = "category">
            <h1 class="title"> our <span>category</span></h1>
            <div class="box-container">
                <CategoryItem id = "combo-btn" onClick = {Combo_handle} href="#" src="cat-1.png">
                    combo
                </CategoryItem>
                <CategoryItem id = "pizza-btn" onClick = {Pizza_handle} href="#" src="cat-2.png">
                    pizza
                </CategoryItem>
                <CategoryItem href="#" src="cat-3.png">
                    hamburger
                </CategoryItem>
                <CategoryItem href="#" src="cat-4.png">
                    chicken
                </CategoryItem>
                <CategoryItem href="#" src="cat-5.png">
                    dessert
                </CategoryItem>
                <CategoryItem href="#" src="cat-6.png">
                    drink
                </CategoryItem>
            </div>
        </section>
    );
}

export default CategoryBar;