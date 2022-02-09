import React, { Component } from 'react';
import CardItem from '../components/CardItem';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class QuerySearch extends Component {
  state = { queryInput: '', listProducts: [], loadedProducts: false }

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
      <div>
        { listProducts.map((product) => (
          <div key={ product.id }>
            <CardItem { ...product } />
          </div>))}
      </div>);
  }

  render() {
    const { queryInput, loadedProducts } = this.state;
    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <form>
          <input
            data-testid="query-input"
            type="text"
            placeholder="Digite o termo de pesquisa"
            value={ queryInput }
            name="queryInput"
            onChange={ this.handleInput }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }

          >
            Pesquisar
          </button>
        </form>
        { loadedProducts && this.productsFounded() }
      </div>
    );
  }
}
