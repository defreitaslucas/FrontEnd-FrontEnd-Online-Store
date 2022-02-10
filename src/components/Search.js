import React, { Component } from 'react';
import './styles/search.css';
import { string, func } from 'prop-types';

export default class Search extends Component {
  render() {
    const {
      queryInput,
      handleInput,
      handleClick,
    } = this.props;

    return (
      <div className="search-container">
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
            onChange={ handleInput }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ handleClick }

          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  queryInput: string.isRequired,
  handleInput: func.isRequired,
  handleClick: func.isRequired,
};
