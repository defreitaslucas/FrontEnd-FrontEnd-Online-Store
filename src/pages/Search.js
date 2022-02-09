import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Search extends Component {
  state = {
    categorias: [],
  }

  componentDidMount() {
    this.listaCategorias();
  }

  listaCategorias = async () => {
    const result = await getCategories();
    this.setState({ categorias: result });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <div>
          {
            categorias.map((categoria) => (
              <div key={ categoria.id }>
                <label
                  htmlFor={ categoria.id }
                  data-testid="category"
                >
                  <input
                    type="radio"
                    name="radio-categoria"
                    id={ categoria.id }
                    value={ categoria.name }
                  />
                  {categoria.name}
                </label>
              </div>
            ))
          }
        </div>
        <div
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}
