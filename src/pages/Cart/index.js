import React from 'react';
import {ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Products,
  CardProduct,
  ProductInfo,
  Image,
  ButtonDelete,
  Details,
  TitleProduct,
  TitlePrice,
  Divider,
  CardBody,
  ButtonAdd,
  Input,
  ButtonSub,
  TotalContainer,
  TotalPrice,
  TotalPriceBold,
  Total,
  TextTotal,
  TotalText,
  ButtonFinalizar,
  ButtonText,
} from './styles';

import Header from '../../components/Header';
import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({cart, total, removeFromCart, updateAmountRequest}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      <Header />
      <ScrollView>
        <Products vertical={true}>
          {cart.map((product) => (
            <CardProduct key={String(product.id)}>
              <ProductInfo>
                <Image
                  source={{uri: product.image}}
                  resizeMode="contain"></Image>

                <Details>
                  <TitleProduct>{product.title}</TitleProduct>
                  <TitlePrice>{product.priceFormatted}</TitlePrice>
                </Details>

                <ButtonDelete onPress={() => removeFromCart(product.id)}>
                  <Icon name="delete" size={28} color="#7159c1" />
                </ButtonDelete>
              </ProductInfo>

              <Divider />

              <CardBody>
                <ButtonSub onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={28}
                    color="#7159c1"
                  />
                </ButtonSub>

                <Input readOnly value={String(product.amount)} />

                <ButtonAdd onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={28} color="#7159c1" />
                </ButtonAdd>

                <TotalPrice>
                  Subtotal <TotalPriceBold>{product.subtotal}</TotalPriceBold>
                </TotalPrice>
              </CardBody>
            </CardProduct>
          ))}

          <TotalContainer>
            <Total>
              <TextTotal>Total</TextTotal>
              <TotalText>{total}</TotalText>
            </Total>

            <ButtonFinalizar>
              <ButtonText>Finalizar Pedido</ButtonText>
            </ButtonFinalizar>
          </TotalContainer>
        </Products>
      </ScrollView>
    </Container>
  );
}

// essa função pega informações do estado e vai mapear as nossas informações
const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  // reduce => pegar um array e reduzir
  total: formatPrice(
    //inicia com o valor zero
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
