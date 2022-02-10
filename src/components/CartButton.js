import React, { Component } from 'react';
import PropTypes, { string, number } from 'prop-types';

export default class CardButton extends Component {
  addCartLocalStorage = ({ target }) => {
    const { listProducts } = this.props;

    const addedProductId = target.parentElement.parentElement.id;

    const productObj = listProducts.find((item) => item.id === addedProductId);
    productObj.qtd = 1;
    let productsArr = [];
    if (!localStorage.getItem('cartItems')) {
      productsArr.push(productObj);
      localStorage.setItem('cartItems', JSON.stringify(productsArr));
    } else {
      productsArr = JSON.parse(localStorage.getItem('cartItems'));
      if (productsArr.find((item) => item.id !== productObj.id)) {
        productsArr.push(productObj);
        localStorage.setItem('cartItems', JSON.stringify(productsArr));
      } else {
        productObj.qtd += 1;
      }
    }
  }

  render() {
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          id="cartButton"
          onClick={ this.addCartLocalStorage }
        >
          Add
        </button>
      </div>
    );
  }
}

CardButton.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.shape({
    id: string,
    name: string,
    price: number,
  })).isRequired,
};