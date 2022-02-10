import React, { Component } from 'react';
import PropTypes, { string, number } from 'prop-types';

export default class CardButton extends Component {
  addCartLocalStorage = ({ target }) => {
    const { listProducts } = this.props;

    const addedProductId = target.parentElement.parentElement.id;

    const porductObj = listProducts.find((item) => item.id === addedProductId);
    let productsArr = [];
    if (!localStorage.getItem('cartItems')) {
      productsArr.push(porductObj);
      localStorage.setItem('cartItems', JSON.stringify(productsArr));
    } else {
      productsArr = JSON.parse(localStorage.getItem('cartItems'));
      productsArr.push(porductObj);
      localStorage.setItem('cartItems', JSON.stringify(productsArr));
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
