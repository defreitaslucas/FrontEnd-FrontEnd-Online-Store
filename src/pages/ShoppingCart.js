import React, { Component } from 'react';
import cartIcon from '../images/cart-shopping-solid.svg';
import returnIcon from '../images/rotate-left-solid.svg';
import './styles/shoppingCart.css';

// qtd, id
export default class ShoppingCart extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.setState({ items: this.getItemFromStorage() });
  }

  getItemFromStorage = () => JSON.parse(localStorage.getItem('cartItems'));

  render() {
    const { items } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    const totalPrice = 0;
    const cart = (
      items
        // .filter((item) => {
        //   let count = 0;
        //   items.forEach((item2) => {
        //     if (item.id === item2.id) {
        //       count += 1;
        //     }
        //   });
        //   return count > 1;
        // })
        .map((product) => (
          <div key={ product.id } className="cart-card">
            <p>X</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <button type="button" data-testid="product-decrease-quantity">-</button>
            <p data-testid="shopping-cart-product-quantity">{product.qtd}</p>
            <button type="button" data-testid="product-increase-quantity">+</button>
            <p>{`R$ ${product.price}`}</p>
          </div>
        ))
    );
    return (
      <div>
        <img src={ returnIcon } alt="return" />
        <img src={ cartIcon } alt="cart" />

        {items.length > 0 ? cart : empty}
        <h4>Valor Total da Compra: </h4>
        <p>
          R$
          {' '}
          {totalPrice > 0 ? totalPrice : 0}
        </p>
      </div>
    );
  }
}
