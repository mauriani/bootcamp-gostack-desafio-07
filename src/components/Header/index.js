import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Image, Cart, Itens} from './styles';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Image source={logo} resizeMode="cover" />
      <Cart>
        <Icon name="shopping-basket" size={28} color="#eee" />
        <Itens>0</Itens>
      </Cart>
    </Container>
  );
};

export default Header;
