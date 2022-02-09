import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import cartIcon from '../images/cart-shopping-solid.svg';
import './styles/main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Search />
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } alt="cart icon" />
        </Link>
      </div>
    );
  }
}
