import React, { Component } from 'react';
import { func, string } from 'prop-types';

export default class ReviewForm extends Component {
  render() {
    const { email, message, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="formReview">
        <h3>Avaliações</h3>

        <label htmlFor="email">
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="product-detail-email"
            id="email"
            value={ email }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <div>
          <label htmlFor="rate1">
            <input
              id="rate1"
              data-testid="1-rating"
              name="rate"
              value="1"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rate2">
            <input
              id="rate2"
              data-testid="2-rating"
              name="rate"
              value="2"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rate3">
            <input
              id="rate3"
              data-testid="3-rating"
              name="rate"
              value="3"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rate4">
            <input
              id="rate4"
              data-testid="4-rating"
              name="rate"
              value="4"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rate5">
            <input
              id="rate5"
              data-testid="5-rating"
              name="rate"
              value="5"
              type="radio"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <label htmlFor="message">
          <textarea
            name="message"
            placeholder="Mensagem (Opcional)"
            data-testid="product-detail-evaluation"
            id="message"
            value={ message }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          name="evaluate-button"
          data-testid="submit-review-btn"
          type="button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  email: string.isRequired,
  message: string.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
