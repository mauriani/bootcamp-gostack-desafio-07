import React, {Component} from 'react';

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

//import {formatPrice} from '../../util/format';
import Header from '../../components/Header';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('/products');
      this.setState({products: response.data});
    } catch (err) {
      console.error(err);
    }
  }

  handleNavigate = () => {
    const {navigation} = this.props;

    navigation.navigate('Cart');
  };

  render() {
    const {products} = this.state;
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
              <TitlePrice>R$ {product.price}</TitlePrice>

              <ButtonAddProduct onPress={() => this.handleNavigate()}>
                <ProductAmount>
                  <Icon name="shopping-cart" size={25} color="#fff" />
                  <ProductAmountText>0</ProductAmountText>
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
