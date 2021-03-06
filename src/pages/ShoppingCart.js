import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import cartIcon from '../images/cart-shopping-solid.svg';
import returnIcon from '../images/rotate-left-solid.svg';
import './styles/shoppingCart.css';

// qtd, id
export default class ShoppingCart extends Component {
  state = {
    items: [],
    loading: true,
    totalPrice: 0,
  }

  componentDidMount() {
    const storage = this.getItemFromStorage();
    if (storage !== null) {
      this.setState({ loading: true, items: storage }, this.filterArr);
    }
  }

  componentDidUpdate() {
    const { items } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  filterArr = () => {
    const { items } = this.state;
    let count = 0;
    const FilteredArr = items
      .reduce((acc, item) => {
        const itemsFiltered = items.filter((item2) => item.id === item2.id);
        let newItems;
        if (item.qtd) {
          newItems = {
            ...item,
          };
        } else {
          newItems = {
            ...item,
            qtd: itemsFiltered.length,
          };
        }
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
    total.toFixed(2);
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
      this.verifyAvailability(id);
    } else {
      const product = items.map((item) => {
        if (item.id === id && item.qtd > 0) item.qtd -= 1;
        return item;
      });
      this.setState({ items: product }, this.updateTotalPrice);
    }
  }

  verifyAvailability = (id) => {
    const { items } = this.state;
    const { available_quantity: availableQuantity, qtd } = items
      .find((item) => item.id === id);
    return availableQuantity <= qtd;
  }

  render() {
    const { items, loading, totalPrice } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho est?? vazio</p>
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
              disabled={ this.verifyAvailability(product.id) }
            >
              +
            </button>
            <p>{`R$ ${product.price * product.qtd}`}</p>
          </div>
        ))
    );

    const totalArea = (
      <>
        <h4>Valor Total da Compra: </h4>
        <p>
          R$
          {' '}
          {totalPrice}
        </p>
      </>
    );

    return (
      <div>
        <Link to="/"><img src={ returnIcon } alt="return" /></Link>
        {!loading ? cart : empty}
        {items && totalArea}
        <Link data-testid="checkout-products" to="/checkout">Checkout</Link>
      </div>
    );
  }
}
