import React, { Component } from 'react';
import cartIcon from '../images/cart-shopping-solid.svg';
import returnIcon from '../images/rotate-left-solid.svg';
import './styles/shoppingCart.css';

// qtd, id
export default class ShoppingCart extends Component {
  state = {
    items: [],
    loading: false,
    totalPrice: 0,
  }

  componentDidMount() {
    this.setState({ loading: true, items: this.getItemFromStorage() }, this.filterArr);
  }

  filterArr = () => {
    const { items } = this.state;
    let count = 0;
    const FilteredArr = items
      .reduce((acc, item) => {
        const itemsFiltered = items.filter((item2) => item.id === item2.id);
        const newItems = {
          ...item,
          qtd: itemsFiltered.length,
        };
        count = 0;
        count += 1;

        acc.forEach((product) => {
          if (product.id === item.id) {
            count += 1;
          }
        });
        if (count > 1) return acc;

        acc.push(newItems);
        return acc;
      }, []);
    this.setState({ items: FilteredArr, loading: false }, this.updateTotalPrice);
  }

  updateTotalPrice = () => {
    const { items } = this.state;
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.qtd;
    });
    this.setState({ totalPrice: total });
  };

  getItemFromStorage = () => JSON.parse(localStorage.getItem('cartItems'));

  handleClick = ({ target, target: { name } }) => {
    const { items } = this.state;
    const { id } = target;
    if (name === 'increase') {
      const product = items.map((item) => {
        if (item.id === id) item.qtd += 1;
        return item;
      });
      this.setState({ items: product }, this.updateTotalPrice);
    } else {
      const product = items.map((item) => {
        if (item.id === id && item.qtd > 0) item.qtd -= 1;
        return item;
      });
      this.setState({ items: product }, this.updateTotalPrice);
    }
  }

  render() {
    const { items, loading, totalPrice } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    const cart = (
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
              id={ product.id }
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
            <p>{`R$ ${product.price * product.qtd}`}</p>
          </div>
        ))
    );
    return (
      <div>
        <img src={ returnIcon } alt="return" />
        <img src={ cartIcon } alt="cart" />
        {loading ? empty : cart}
        <h4>Valor Total da Compra: </h4>
        <p>
          R$
          {' '}
          {totalPrice}
        </p>
      </div>
    );
  }
}
