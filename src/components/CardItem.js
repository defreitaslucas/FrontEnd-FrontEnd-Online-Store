import React, { Component } from 'react';
import PropTypes, { string, number } from 'prop-types';
import './styles/cardItem.css';
//
import CardButton from './CartButton';
//

export default class CardItem extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      //
      listProducts,
      id,
      //
    } = this.props;
    return (
      <div
      //
        id={ id }
        //
        className="card-item"
        data-testid="product"
      >
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        {/*  */}
        <CardButton listProducts={ listProducts } />
        {/*  */}
      </div>
    );
  }
}

CardItem.propTypes = {
  title: string.isRequired,
  thumbnail: string.isRequired,
  price: number.isRequired,
  id: string.isRequired,
  //
  listProducts: PropTypes.arrayOf(PropTypes.shape({
    id: string,
    name: string,
    price: number,
  })).isRequired,
  //
};
