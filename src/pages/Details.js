import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';
import { getProductFromId } from '../services/api';
import addProduct from '../services/cartItemsLocal';
import cartIcon from '../images/cart-shopping-solid.svg';
import ReviewForm from '../components/ReviewForm';
import addReviewToLocal from '../services/reviewLocal';
import ReviewCard from '../components/ReviewCard';

const INITIAL_INFO = {
  email: '', message: '', rate: '',
};
export default class Details extends Component {
  state = { ...INITIAL_INFO,
    loading: false,
    infoProduct: '',
    id: '',
    previousReviews: '',
    items: [] };

  componentDidMount() {
    this.getDetailsFromID();
    this.getReviewsStored();
    this.countItemsOnCart();
  }

  getItemFromStorage = () => JSON.parse(localStorage.getItem('cartItems'));

  countItemsOnCart = () => {
    const storage = this.getItemFromStorage();
    if (storage !== null) {
      this.setState({ items: storage });
    }
  }

  getDetailsFromID = async () => {
    const { match: { params } } = this.props;
    this.setState({ loading: true, id: params.id });
    const response = await getProductFromId(params.id);
    if (response) {
      this.setState({
        loading: false,
        infoProduct: response,
      });
    }
  }

  getReviewsStored = () => {
    const { match: { params } } = this.props;
    const reviewStored = JSON.parse(localStorage.getItem('review'));
    if (reviewStored) {
      const reviewsProduct = reviewStored.filter((review) => review.id === params.id);
      if (reviewsProduct) {
        this.setState({
          previousReviews: reviewsProduct,
        });
      }
    }
  }

  addToLocalFromPageDetails = () => {
    const { infoProduct } = this.state;
    infoProduct.qtd = 1;
    addProduct(infoProduct);
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  addReview = () => {
    const { loading, infoProduct, ...infoReview } = this.state;
    addReviewToLocal(infoReview);
    this.setState({
      ...INITIAL_INFO,
    });
    this.getReviewsStored();
  }

  render() {
    const { infoProduct: { title, price, thumbnail },
      loading, previousReviews, items } = this.state;
    return (
      <div>
        Detalhes
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } alt="cart icon" />
          {items && <span data-testid="shopping-cart-size">{items.length}</span>}
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
        <ReviewForm
          { ...this.state }
          onInputChange={ this.handleInput }
          onSaveButtonClick={ this.addReview }
        />
        { previousReviews
          && previousReviews.map((review) => (
            <div key={ Math.random() } id={ review.id }>
              <ReviewCard
                { ...review }
              />
            </div>))}
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
