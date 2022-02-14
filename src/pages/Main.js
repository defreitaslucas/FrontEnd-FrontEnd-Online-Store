import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Search from '../components/Search';
import cartIcon from '../images/cart-shopping-solid.svg';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
  getCategoryFromId,
} from '../services/api';
import './styles/main.css';
import CardItem from '../components/CardItem';

export default class Main extends Component {
  state = {
    categories: [],
    queryInput: '',
    listProducts: [],
    loadedProducts: false,
    items: [],
  }

  componentDidMount() {
    this.listCategories();
    this.countItemsOnCart();
  }

  getItemFromStorage = () => JSON.parse(localStorage.getItem('cartItems'));

  countItemsOnCart = () => {
    const storage = this.getItemFromStorage();
    if (storage !== null) {
      this.setState({ items: storage });
    }
  }

  onRadioChange = async ({ target }) => {
    const response = await getCategoryFromId(target.id);
    this.setState({ listProducts: response.results, loadedProducts: true });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = async () => {
    const { queryInput } = this.state;
    const response = await getProductsFromCategoryAndQuery(queryInput);
    if (response) {
      this.setState({
        loadedProducts: true,
        listProducts: response.results,
      });
    }
  }

  productsFounded = () => {
    const { listProducts } = this.state;
    if (!listProducts.length) return (<h2>Nenhum produto foi encontrado</h2>);
    return (
      <div className="results-container">
        { listProducts.map((product) => {
          product.qtd = 0;
          return (
            <div key={ product.id }>
              <CardItem { ...product } listProducts={ listProducts } countItemsOnCart={ this.countItemsOnCart } />
            </div>);
        })}
      </div>);
  }

  listCategories = async () => {
    const result = await getCategories();
    this.setState({ categories: result });
  }

  render() {
    const { loadedProducts, items } = this.state;
    return (
      <main className="main-container">
        <Categories
          { ...this.state }
          onRadioChange={ this.onRadioChange }
        />
        <div>
          <Search
            { ...this.state }
            handleClick={ this.handleClick }
            handleInput={ this.handleInput }
          />
          { loadedProducts && this.productsFounded() }
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } alt="cart icon" />
          {console.log(items)}
          {items && <span data-testid="shopping-cart-size">{items.length}</span>}
        </Link>
      </main>
    );
  }
}
