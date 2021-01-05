import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';

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
import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({cart, dispatch}) {
  return (
    <Container>
      <Header />
      <ScrollView>
        <Products vertical={true}>
          {cart.map((product) => (
            <CardProduct>
              <ProductInfo>
                <Image
                  source={{uri: product.image}}
                  resizeMode="contain"></Image>

                <Details>
                  <TitleProduct>{product.title}</TitleProduct>
                  <TitlePrice>R$ {product.price}</TitlePrice>
                </Details>

                <ButtonDelete onPress={() => dispatch()}>
                  <Icon name="delete" size={28} color="#7159c1" />
                </ButtonDelete>
              </ProductInfo>

              <Divider />

              <CardBody>
                <ButtonSub>
                  <Icon
                    name="remove-circle-outline"
                    size={28}
                    color="#7159c1"
                  />
                </ButtonSub>

                <Input value={String(product.amount)} />

                <ButtonAdd>
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

export default connect(mapStateToProps)(Cart);
