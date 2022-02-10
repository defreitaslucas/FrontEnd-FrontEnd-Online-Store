import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import { getProductFromId } from '../services/api';

export default class Details extends Component {
  state = { loading: false, infoProduct: '' };

  componentDidMount() {
    this.getDetailsFromID();
  }

  getDetailsFromID = async () => {
    const { match: { params } } = this.props;
    this.setState({ loading: true });
    const response = await getProductFromId(params.id);
    if (response) {
      this.setState({
        loading: false,
        infoProduct: response,
      });
    }
  }

  render() {
    const { infoProduct: { title, price, thumbnail }, loading } = this.state;
    return (
      <div>
        Detalhes
        { loading
          ? <h1>Loading</h1>
          : (
            <section>
              <div>
                <h2 data-testid="product-detail-name">{ title }</h2>
                <img
                  src={ thumbnail }
                  alt={ title }
                />
                <p>{ price }</p>
              </div>

              <h1>{title}</h1>
            </section>)}
      </div>
    );
  }
}

Details.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};
