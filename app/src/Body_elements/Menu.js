import React, { useContext } from 'react';
import CategoryBar from './Menu_elements/CategoryBar';
import FoodGrid from './Menu_elements/FoodGrid';
import './Menu.css'
import SearchParam from '../stores/SearchParam';

const foodlist=[
    {
      id:1,
      name: "fried chicken 10",
      img: "food-2.png",
      price: 20000,
      category: "combo",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:2,
      name: "pizza 1",
      img: "food-3.png",
      price: 20000,
      category: "pizza",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:3,
      name: "pizza 2",
      img: "food-3.png",
      price: 20000,
      category: "pizza",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:4,
      name: "pizza 3",
      img: "food-3.png",
      price: 20000,
      category: "piza",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:4,
      name: "pizza 3",
      img: "food-3.png",
      price: 20000,
      category: "pizza",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:5,
      name: "pizza 4",
      img: "food-3.png",
      price: 20000,
      category: "pizza",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:6,
      name: "fried chicken 1",
      img: "food-3.png",
      price: 20000,
      category: "combo",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:7,      
      name: "Hamburger 1",
      img: "food-2.png",
      price: 20000,
      category: "hamburger",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:8,
      name: "fried chicken 3",
      img: "food-2.png",
      price: 20000,
      category: "combo",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:9,
      name: "fried chicken 4",
      img: "food-3.png",
      price: 20000,
      category: "combo",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:10,
      name: "burger 4",
      img: "food-1.png",
      price: 20000,
      category: "hamburger",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:11,
      name: "burger 5",
      img: "food-1.png",
      price: 20000,
      category: "hamburger",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:12,
      name: "Coca 1",
      img: "cat-6.png",
      price: 20000,
      category: "drink",
      description: "fried chicken is a good food to relieve your stress."
    },
    {
      id:13,
      name: "Coca 2",
      img: "cat-6.png",
      price: 20000,
      category: "drink",
      description: "fried chicken is a good food to relieve your stress."
    },
  ];
function Menu() {
    const searchParamCtx=useContext(SearchParam);
    return (
        <div id="menu-container">
            <CategoryBar />
            <FoodGrid foodlist={
                foodlist.filter((food)=>{ return (searchParamCtx.isRightFood(food));}) 
            } />
        </div>
    );
}

export default Menu;