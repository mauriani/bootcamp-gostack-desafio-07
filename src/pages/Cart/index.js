import React, {Component} from 'react';

import {
  Container,
  CardProduct,
  CardHeader,
  Image,
  Details,
  TitleProduct,
  TitlePrice,
  Divider,
  CardBody,
  ButtonAdd,
  Input,
  ButtonRemove,
  Price,
  TotalPrice,
} from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header />
        <CardProduct>
          <CardHeader>
            <Image
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789',
              }}
              resizeMode="contain"></Image>

            <Details>
              <TitleProduct>
                Tênis VR Caminhada Confortável Detalhes Couro Masculino
              </TitleProduct>
              <TitlePrice>R$ 180.00</TitlePrice>
            </Details>

            <Icon name="delete" size={28} color="#7159c1" />
          </CardHeader>
          <Divider />

          <CardBody>
            <ButtonAdd>
              <Icon name="add-circle-outline" size={28} color="#7159c1" />
            </ButtonAdd>

            <Input>1</Input>

            <ButtonRemove>
              <Icon name="remove-circle-outline" size={28} color="#7159c1" />
            </ButtonRemove>

            <TotalPrice>R$ 340, 00</TotalPrice>
          </CardBody>

          <Total>R$ 340, 00</Total>
        </CardProduct>
      </Container>
    );
  }
}
