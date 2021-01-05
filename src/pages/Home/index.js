import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  HorizontalScrollView,
  CartProduct,
  ImageProduct,
  TitleProduct,
  TitlePrice,
  ButtonAddProduct,
  ProductAmount,
  ProductAmountText,
  ButtonAddProductText,
} from './styles';

import Header from '../../components/Header';
import {formatPrice} from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({products: data});
    } catch (err) {
      console.error(err);
    }
  }

  handleAddProduct = (id) => {
    //dispatch server para disparar uma action ao reducer
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;

    return (
      <Container>
        <Header />
        <HorizontalScrollView>
          {products.map((product) => (
            <CartProduct key={product.id}>
              <ImageProduct
                source={{uri: product.image}}
                resizeMode="contain"></ImageProduct>
              <TitleProduct>{product.title}</TitleProduct>
              <TitlePrice>{product.priceFormatted}</TitlePrice>

              <ButtonAddProduct
                onPress={() => this.handleAddProduct(product.id)}>
                <ProductAmount>
                  <Icon name="shopping-cart" size={25} color="#fff" />
                  <ProductAmountText>
                    {amount[product.id] || 0}
                  </ProductAmountText>
                </ProductAmount>
                <ButtonAddProductText>ADICIONAR</ButtonAddProductText>
              </ButtonAddProduct>
            </CartProduct>
          ))}
        </HorizontalScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

// converte actions do redux em propriedades do nosso componente
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
