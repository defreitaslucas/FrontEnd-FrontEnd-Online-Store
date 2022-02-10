import React, { Component } from 'react';
import PropTypes, { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/cardItem.css';
import CardButton from './CartButton';

export default class CardItem extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      listProducts,
      id,
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
};
