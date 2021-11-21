import React, { useRef, useContext } from 'react';
import './Header.css';
import CartContext from '../stores/cart-context';
import SearchParam from '../stores/SearchParam';

const logo = '/images/logo.png';

function Header(props) {
    const searchParamCtx = useContext(SearchParam);
    const CrtCtx = useContext(CartContext);

    const searchInput = useRef();

    var loginButton, loginForm;
    var cartButton, cart;
    var navbar, navButton;
    var searchForm, searchButton;
    var menu, menuContainer;

    function reloadDOMSelector() {
        loginButton = document.getElementById('login-btn');
        loginForm = document.getElementById('login');
        cartButton = document.getElementById('cart-btn');
        cart = document.getElementById('cart');
        navbar = document.querySelector('.navbar');
        searchForm = document.getElementById('search-form');
        searchButton = document.getElementById('search-btn');
        navButton = document.getElementById('nav-btn');
        menu = document.getElementById('menu');
        menuContainer = document.getElementById('menu-container');
    }

    function searchHandler(event){
        event.preventDefault();
        event.stopPropagation();

        searchParamCtx.clearFilter();
        searchParamCtx.setName(searchInput.current.value)
    }

    function Nav_handle() {
        reloadDOMSelector();
        navbar.classList.toggle('active');
        navButton.classList.toggle('active');
        searchForm.classList.remove('active');
        searchButton.classList.remove('active');
    }
    function Search_handle(){
        reloadDOMSelector();
        if (menu.classList.contains("active")) {
            searchForm.classList.toggle('active');
            searchButton.classList.toggle('active');
            navbar.classList.remove('active');
            navButton.classList.remove('active');
        }
    }
    function Cart_handle() {
        reloadDOMSelector();
        cartButton.classList.toggle('active');
        cart.classList.toggle('active');
        if (cartButton.classList.contains("active")) {
            menu.classList.remove('active');
            menuContainer.classList.remove('active');
        } else {
            menu.classList.add('active');
            menuContainer.classList.add('active');
        }
        loginButton.classList.remove('active');
        loginForm.classList.remove('active');
        searchForm.classList.remove('active');
        searchButton.classList.remove('active');
    }
    function Login_handle() {
        reloadDOMSelector();
        loginButton.classList.add('active');
        loginForm.classList.add('active');
        searchForm.classList.remove('active');
        searchButton.classList.remove('active');
        cartButton.classList.remove('active');
        cart.classList.remove('active');
        navbar.classList.remove('active');
        navButton.classList.remove('active');
        menu.classList.remove('active');
        menuContainer.classList.remove('active');
    }
    function Menu_handle() {
        reloadDOMSelector();
        loginButton.classList.remove('active');
        loginForm.classList.remove('active');
        cartButton.classList.remove('active');
        cart.classList.remove('active');
        navbar.classList.remove('active');
        navButton.classList.remove('active');
        menu.classList.add('active');
        menuContainer.classList.add('active');
    }

    return (
        <header className = 'header'>
            <a href="#home" className="logo"> <img src={logo} alt=""/>OWCA</a>
            <nav id = "nav-nav" className="navbar" ref={navbar}>
                <a href="/#">Home</a>
                <a href="#menu" onClick={Menu_handle} id='menu'>Menu</a>
                <a href="/#">Reservation</a>
                <a href="/#">About</a>
                <a href="/#">Review</a>
                <a href="/#">Order</a>
            </nav>
            <div className="icons">
                <div id="nav-btn" onClick={Nav_handle} className="fas fa-bars" ref={navButton}></div>
                <div id="search-btn" onClick={Search_handle} className="fas fa-search" ref={searchButton}></div>
                <div id="cart-btn" onClick={Cart_handle} className="fas fa-shopping-cart" ref={cartButton}>
                </div>
                <span className={CrtCtx.totalItem ? "badge badge-warning" : "badge badge-warning inactive"}
                    id="lblCartCount">{CrtCtx.totalItem}</span>
                
                <div id="login-btn" onClick={Login_handle} className="fas fa-user" ref={loginButton}></div>
            </div>
            <form action="" id="search-form" onSubmit={searchHandler} ref={searchForm}>
                <input type="search" placeholder="Search..." id="search-box" ref={searchInput}/>
                <button><label htmlFor="search-box" className="fas fa-search"></label></button>
            </form>
        </header>
    );
}

export default Header;