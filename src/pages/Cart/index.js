import React, {Component} from 'react';
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
  Total,
  TextTotal,
  TotalText,
  ButtonFinalizar,
  ButtonText,
} from './styles';

import Header from '../../components/Header';
import * as CartActions from '../../store/modules/cart/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({cart, removeFromCart, updateAmount}) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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

                <Text>Subtotal</Text>
                <TotalPrice>R$ 250.0</TotalPrice>
              </CardBody>
            </CardProduct>
          ))}

          <TotalContainer>
            <Total>
              <TextTotal>Total</TextTotal>
              <TotalText>R$ 340, 00</TotalText>
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
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
