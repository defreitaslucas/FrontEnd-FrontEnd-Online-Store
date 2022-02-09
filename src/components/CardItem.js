import React, { Component } from 'react';
import { string, number } from 'prop-types';
import './styles/cardItem.css';

export default class CardItem extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div className="card-item" data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: string.isRequired,
  thumbnail: string.isRequired,
  price: number.isRequired,
};
