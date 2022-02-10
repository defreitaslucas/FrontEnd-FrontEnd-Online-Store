import React, { Component } from 'react';
import { getProductFromId } from '../services/api';
import minusIcon from '../images/minus-solid.svg';
import plusIcon from '../images/plus-solid.svg';
import cartIcon from '../images/cart-shopping-solid.svg';
import returnIcon from '../images/rotate-left-solid.svg';

// qtd, id
export default class ShoppingCart extends Component {
  state = {
    items: [],
    products: [],
  }

  componentDidMount() {
    const { items, products } = this.state;
    this.setState({ items: getItemFromStorage() });
    items.forEach((item) => {
      const product = apiRequest(item.id);
      product.qtd = item.qtd;
      this.setState({ products: [...products, product] });
    });
  }

  apiRequest = async (item) => getProductFromId(item.id)

  getItemFromStorage = () => JSON.parse(localStorage.getItem(item));

  render() {
    const { products } = this.state;
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    let totalPrice = 0;
    const cart = (
      products.map((product) => {
        const price = toFixed(product.price * product.qtd);
        totalPrice += price;
        return (
          <div key={ product.id } className="cart-card">
            <p>X</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{product.title}</p>
            <button type="button" data-testid="product-decrease-quantity">
              <img src={ minusIcon } alt="minus" />
            </button>
            <p>{product.qtd}</p>
            <button type="button" data-testid="product-increase-quantity">
              <img src={ plusIcon } alt="plus" />
            </button>
            <p>{`R$ ${price}`}</p>
          </div>
        );
      })
    );
    return (
      <div>
        <img src={ returnIcon } alt="return" />
        <img src={ cartIcon } alt="cart" />

        {products.length > 0 ? cart : empty}
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
