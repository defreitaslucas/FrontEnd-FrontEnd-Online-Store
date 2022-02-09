import React, { Component } from 'react';
import Categorias from '../components/Categorias';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Categorias />
        <div
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}
