import React, { useState } from 'react';
import './Header.css';
import logo from '../images/logo.png';
function Header(props) {
    const [ navbarIsOpen, setNavbarIsOpen ] = useState(false);

    function Menu_handle() {
        let form_search = document.getElementById('search-form');
        let navbar = document.querySelector('.navbar');
        let menu_btn = document.getElementById('menu-btn');
        let search_btn = document.getElementById('search-btn');
        navbar.classList.toggle('active');
        form_search.classList.remove('active');
        search_btn.classList.remove('active');
        menu_btn.classList.toggle('active');

    }
    function Search_handle(){
        let form_search = document.getElementById('search-form');
        let search_btn = document.getElementById('search-btn');
        form_search.classList.toggle('active');
        search_btn.classList.toggle('active');
        
    }
    function Cart_handle() {
        let cart_btn = document.getElementById('cart-btn');
        let cart = document.getElementById('cart');
        let login_btn = document.getElementById('login-btn');
        let login_form = document.getElementById('login');
        cart_btn.classList.toggle('active');
        cart.classList.toggle('active');
        login_btn.classList.remove('active');
        login_form.classList.remove('active');
        
    }
    function Login_handle() {
        let login_btn = document.getElementById('login-btn');
        let login_form = document.getElementById('login');
        let cart = document.getElementById('cart');
        let cart_btn = document.getElementById('cart-btn');
        let navbar = document.querySelector('.navbar');
        let menu_btn = document.getElementById('menu-btn');
        login_btn.classList.toggle('active');
        login_form.classList.toggle('active');
        cart_btn.classList.remove('active');
        cart.classList.remove('active');
        navbar.classList.remove('active');
        menu_btn.classList.remove('active');
    }
    return (
        <header className = 'header'>
            <a href="#home" className="logo"> <img src = {logo}/> OWCA </a>
            <nav id = "nav-nav" className="navbar">
                <a className = 'active' href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#reservation">Reservation</a>
                <a href="#about">About</a>
                <a href="#review">Review</a>
                <a href="#order">Order</a>
            </nav>
            <div className="icons">
                <div id="menu-btn" onClick = {Menu_handle} className="fas fa-bars"></div>
                <div id="search-btn" onClick = {Search_handle} className="fas fa-search"></div>
                <div id="cart-btn" onClick = {Cart_handle} className="fas fa-shopping-cart"></div>
                <div id="login-btn" onClick = {Login_handle} className="fas fa-user"></div>
            </div>
            <form action="" id="search-form">
                <input type="search" placeholder="Search..." id="search-box"/>
                <label for="search-box" className="fas fa-search"></label>
            </form>
        </header>
    );
}

export default Header;