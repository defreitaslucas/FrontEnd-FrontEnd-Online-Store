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

  handleClick = ({ target, target: { name } }) => {
    const { items } = this.state;
    const productId = target.id;
    if (name === 'increase') {
      // const { items } = this.state;
      // console.log('items velho:', items);
      // const valueIncrease = target.previousSibling;
      // valueIncrease.innerText = (Number(valueIncrease.innerText) + 1).toString();
      const newValue = items.find((item) => item.id === productId).qtd + 1;
      // const productId = target.id;
      items.find((item) => item.id === productId).qtd = newValue;
      // items[0].qtd = newValue;
      const newItems = items;
      this.setState({
        items: newItems,
      });
      // console.log('items novo:', items);
    } else {
      const valueDecrease = target.nextSibling;
      if (Number(valueDecrease.innerText) > 1) {
        // valueDecrease.innerText = (Number(valueDecrease.innerText) - 1).toString();
        const newValue1 = items.find((item) => item.id === productId).qtd - 1;
        // const productId2 = target.id;
        items.find((item) => item.id === productId).qtd = newValue1;
        // items[0].qtd = newValue1;
        const newItems1 = items;
        this.setState({
          items: newItems1,
        });
      }
    }
  }

  render() {
    const { items } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    const totalPrice = 0;
    /*    const cart = (
      items
        .map((product) => (
          <div key={ product.id } className="cart-card">
            <button type="button">X</button>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <button
              type="button"
              name="decrease"
              data-testid="product-decrease-quantity"
              onClick={ this.handleClick}>-</button>
            <p data-testid="shopping-cart-product-quantity">{product.qtd}</p>
            <button
              type="button"
              name="increase"
              data-testid="product-increase-quantity"
              onClick={ this.handleClick}>+</button>
            <p>{`R$ ${product.price}`}</p>
          </div>
        ))
    ); */
    return (
      <div>
        <img src={ returnIcon } alt="return" />
        <img src={ cartIcon } alt="cart" />
        {!items
          ? empty
          : (
            items
              .map((product) => (
                <div key={ product.id } className="cart-card">
                  <button type="button">X</button>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <p data-testid="shopping-cart-product-name">{product.title}</p>
                  <button
                    type="button"
                    name="decrease"
                    data-testid="product-decrease-quantity"
                    onClick={ this.handleClick }
                  >
                    -
                  </button>
                  <p data-testid="shopping-cart-product-quantity">{product.qtd}</p>
                  <button
                    type="button"
                    name="increase"
                    id={ product.id }
                    data-testid="product-increase-quantity"
                    onClick={ this.handleClick }
                  >
                    +
                  </button>
                  <p>{`R$ ${product.price}`}</p>
                </div>
              ))
          )}
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
