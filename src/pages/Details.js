import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';
import { getProductFromId } from '../services/api';
import addProduct from '../services/cartItemsLocal';
import cartIcon from '../images/cart-shopping-solid.svg';

export default class Details extends Component {
  state = { loading: false, infoProduct: '' };

  componentDidMount() {
    this.getDetailsFromID();
  }

  getDetailsFromID = async () => {
    const { match: { params } } = this.props;
    this.setState({ loading: true });
    const response = await getProductFromId(params.id);
    if (response) {
      this.setState({
        loading: false,
        infoProduct: response,
      });
    }
  }

  addToLocalFromPageDetails = () => {
    const { infoProduct } = this.state;
    infoProduct.qtd = 1;
    addProduct(infoProduct);
  }

  render() {
    const { infoProduct: { title, price, thumbnail }, loading } = this.state;
    return (
      <div>
        Detalhes
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } alt="cart icon" />
        </Link>

        { loading
          ? <h1>Loading</h1>
          : (
            <section>
              <div>
                <h2 data-testid="product-detail-name">{ title }</h2>
                <img
                  src={ thumbnail }
                  alt={ title }
                />
                <p>{ price }</p>
              </div>
              {/*  <h1>{title}</h1> */}
              <div>
                <button
                  data-testid="product-detail-add-to-cart"
                  type="button"
                  id="productDetailButton"
                  onClick={ this.addToLocalFromPageDetails }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </section>)}
      </div>
    );
  }
}

Details.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};
