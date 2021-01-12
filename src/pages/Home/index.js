import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

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

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <ActivityIndicator
          color="#fff"
          size="large"
          style={{flex: 1, ustifyContent: 'center'}}
        />
      ) : (
        <HorizontalScrollView>
          {products.map((product) => (
            <CartProduct key={product.id}>
              <ImageProduct
                source={{uri: product.image}}
                resizeMode="contain"></ImageProduct>
              <TitleProduct>{product.title}</TitleProduct>
              <TitlePrice>{product.priceFormatted}</TitlePrice>

              <ButtonAddProduct onPress={() => handleAddProduct(product.id)}>
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
      )}
    </Container>
  );
}
