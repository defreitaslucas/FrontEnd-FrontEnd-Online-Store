import React, { Component } from 'react';
import PropTypes, { string, number, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/cardItem.css';
import CardButton from './CartButton';
import truckFast from '../images/truck-fast-solid.svg';

export default class CardItem extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      listProducts,
      id,
      shipping: { free_shipping: freeShipping },
    } = this.props;
    return (
      <div
        id={ id }
        className="card-item"
        data-testid="product"
      >
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
        { freeShipping
        && (
          <div>
            <h4 data-testid="free-shipping">Frete Grátis</h4>
            <img src={ truckFast } alt="frete grátis" />
          </div>)}
        <CardButton listProducts={ listProducts } />
      </div>
    );
  }
}

CardItem.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  thumbnail: string.isRequired,
  price: number.isRequired,
  listProducts: PropTypes.arrayOf(PropTypes.shape({
    id: string,
    name: string,
    price: number,
  })).isRequired,
  shipping: PropTypes.shape({
    free_shipping: bool,
  }).isRequired,
};
