import React, { Component } from 'react';
import PropTypes, { func, string } from 'prop-types';
import './styles/categories.css';

export default class Categories extends Component {
  render() {
    const { categories, onRadioChange } = this.props;
    return (
      <div className="category-container" onChange={ onRadioChange }>
        <p>Categories:</p>
        {
          categories.map((category) => (
            <div className="category" key={ category.id }>
              <label
                htmlFor={ category.id }
                data-testid="category"
              >
                <input
                  type="radio"
                  name="radio-category"
                  id={ category.id }
                  value={ category.name }
                />
                {category.name}
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

Categories.propTypes = {
  // categories: arrayOf(Object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: string,
    name: string,
  })).isRequired,
  onRadioChange: func.isRequired,
};
