import React, { useState, useRef } from 'react';
import './Header.css';
import logo from '../images/logo.png';
function Header(props) {
    const [ navbarIsOpen, setNavbarIsOpen ] = useState(false);
    const login_btn = document.getElementById('login-btn');
    const login_form = document.getElementById('login');
    const cart_btn = document.getElementById('cart-btn');
    const cart = document.getElementById('cart');
    const navbar = document.querySelector('.navbar');
    const form_search = document.getElementById('search-form');
    const search_btn = document.getElementById('search-btn');
    const menu_btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const menu_container = document.getElementById('menu-container');

    function Menu_handle() {
        let navbar = document.querySelector('.navbar');
        let form_search = document.getElementById('search-form');
        let search_btn = document.getElementById('search-btn');
        let menu_btn = document.getElementById('menu-btn');
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
        let login_btn = document.getElementById('login-btn');
        let login_form = document.getElementById('login');
        let cart_btn = document.getElementById('cart-btn');
        let cart = document.getElementById('cart');
        let menu = document.getElementById('menu');
        let menu_container = document.getElementById('menu-container');
        cart_btn.classList.toggle('active');
        cart.classList.toggle('active');
        login_btn.classList.remove('active');
        login_form.classList.remove('active');
        menu.classList.remove('active');
        menu_container.classList.remove('active');
    }
    function Login_handle() {
        let login_btn = document.getElementById('login-btn');
        let login_form = document.getElementById('login');
        let cart_btn = document.getElementById('cart-btn');
        let cart = document.getElementById('cart');
        let navbar = document.querySelector('.navbar');
        let menu_btn = document.getElementById('menu-btn');
        let menu = document.getElementById('menu');
        let menu_container = document.getElementById('menu-container');
        login_btn.classList.toggle('active');
        login_form.classList.toggle('active');
        cart_btn.classList.remove('active');
        cart.classList.remove('active');
        navbar.classList.remove('active');
        menu_btn.classList.remove('active');
        menu.classList.remove('active');
        menu_container.classList.remove('active');
    }
    function Body_handle() {
        let login_btn = document.getElementById('login-btn');
        let login_form = document.getElementById('login');
        let cart_btn = document.getElementById('cart-btn');
        let cart = document.getElementById('cart');
        let navbar = document.querySelector('.navbar');
        let menu_btn = document.getElementById('menu-btn');
        let menu = document.getElementById('menu');
        let menu_container = document.getElementById('menu-container');
        login_btn.classList.remove('active');
        login_form.classList.remove('active');
        cart_btn.classList.remove('active');
        cart.classList.remove('active');
        navbar.classList.remove('active');
        menu_btn.classList.remove('active');
        menu.classList.toggle('active');
        menu_container.classList.toggle('active');
    }

    return (
        <header className = 'header'>
            <a href="#home" className="logo"> <img src = {logo}/> OWCA </a>
            <nav id = "nav-nav" className="navbar">
                <a href = "#">Home</a>
                <a href = "#category" onClick = {Body_handle} id = 'menu'>Menu</a>
                <a href = "#">Reservation</a>
                <a href = "#">About</a>
                <a href = "#">Review</a>
                <a href = "#">Order</a>
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