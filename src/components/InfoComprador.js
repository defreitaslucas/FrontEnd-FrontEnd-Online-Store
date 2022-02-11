import React, { Component } from 'react';
import boleto from '../images/file-invoice-dollar-solid.svg';
import credCard from '../images/credit-card-solid.svg';

export default class InfoComprador extends Component {
  render() {
    return (
      <section>
        <h2>Informações do Comprador</h2>
        <form id="info-comprador">
          <label htmlFor="input-name">
            <input
              type="text"
              name="input-name"
              data-testid="checkout-fullname"
              placeholder="Nome"
            />
          </label>
          <label htmlFor="input-cpf">
            <input
              type="text"
              name="input-cpf"
              data-testid="checkout-cpf"
              placeholder="CPF"
            />
          </label>
          <label htmlFor="input-email">
            <input
              type="email"
              name="input-email"
              data-testid="checkout-email"
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="input-telefone">
            <input
              type="text"
              name="input-telefone"
              data-testid="checkout-phone"
              placeholder="Celular"
            />
          </label>
          <label htmlFor="input-cep">
            <input
              type="text"
              name="input-cep"
              data-testid="checkout-cep"
              placeholder="CEP"
            />
          </label>
          <label htmlFor="input-endereco">
            <input
              type="text"
              name="input-endereco"
              data-testid="checkout-address"
              placeholder="Endereço"
            />
          </label>
          <label htmlFor="input-number-complement">
            <input
              type="number"
              name="input-number-complement"
              placeholder="Complemento"
            />
          </label>
          <label htmlFor="input-number-address">
            <input
              type="number"
              name="input-number-address"
              placeholder="Número"
            />
          </label>
          <label htmlFor="input-city">
            <input
              type="text"
              name="input-city"
              placeholder="Cidade"
            />
          </label>
          <label htmlFor="select-estado">
            <select name="select-estado" id="select-estado" form="info-comprador">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
          </label>
        </form>
        <h2>Método de Pagamento</h2>
        <form id="method-payment">
          <label htmlFor="boleto">
            <p>Boleto</p>
            <input type="radio" id="boleto" name="method-payment" value="" />
            <img src={ boleto } alt="boleto" />
          </label>
          <label htmlFor="credit-card">
            <p>Cartão de Crédito</p>
            <input type="radio" id="credit-card" name="method-payment" value="" />
            <img src={ credCard } alt="cartao-credito" />
          </label>
        </form>
      </section>
    );
  }
}
