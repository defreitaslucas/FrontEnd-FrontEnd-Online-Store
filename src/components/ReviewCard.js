import React, { Component } from 'react';
import { string } from 'prop-types';

export default class ReviewCard extends Component {
  render() {
    const { email, message, rate } = this.props;
    return (
      <div>
        <h3>{email}</h3>
        <h4>{rate}</h4>
        <p>{message}</p>
      </div>
    );
  }
}
ReviewCard.propTypes = {
  message: string.isRequired,
  email: string.isRequired,
  rate: string.isRequired,
};
