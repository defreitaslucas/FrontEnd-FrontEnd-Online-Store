import React, { Component } from 'react';
import InfoComprador from '../components/InfoComprador';
import ReviewCart from '../components/ReviewCart';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <ReviewCart />
        <InfoComprador />
      </div>
    );
  }
}
