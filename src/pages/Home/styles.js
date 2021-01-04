import styled from 'styled-components/native';
import {darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const HorizontalScrollView = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  height: 150px;
`;

export const CartProduct = styled.View`
  background-color: #fff;
  height: 250px;
  width: 200px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
`;

export const ImageProduct = styled.Image`
  height: 100px;
`;

export const TitleProduct = styled.Text`
  line-height: 15px;
  font-size: 12px;
  color: #333;
  align-items: center;
  justify-content: center;
`;

export const TitlePrice = styled.Text`
  font-size: 16px;
  color: #111;
  font-weight: bold;
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 10px;
  background-color: #7159c1;
  margin-top: auto;
  align-items: center;
`;

export const ProductAmount = styled.View`
  padding: 12px;

  background: ${darken(0.03, '#7159c1')};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 8px;
`;

export const ButtonAddProductText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
