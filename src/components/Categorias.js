import React, { Component } from 'react';
import { getCategories } from '../services/api';
import './styles/categorias.css';

export default class Categorias extends Component {
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
      <div className="category-container">
        <p>Categorias:</p>
        {
          categorias.map((categoria) => (
            <div className="category" key={ categoria.id }>
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
    );
  }
}
