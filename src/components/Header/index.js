import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Image, Cart, Itens} from './styles';
import logo from '../../assets/images/logo.png';

function Header({cartSize}) {
  const navigation = useNavigation(); // Novo hoock
  console.log(navigation);
  return (
    <Container>
      <Image source={logo} resizeMode="cover" />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={28} color="#eee" />
        <Itens>{cartSize}</Itens>
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
