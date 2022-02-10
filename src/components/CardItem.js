import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/cardItem.css';

export default class CardItem extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div className="card-item" data-testid="product">
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
      </div>
    );
  }
}

CardItem.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  thumbnail: string.isRequired,
  price: number.isRequired,
};
