import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;
export const Products = styled.View`
  background-color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  margin-bottom: 20px;
  height: auto;
`;

export const CardProduct = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const Image = styled.Image`
  flex: 1;
  height: 120px;
  width: 220px;
`;

export const ButtonDelete = styled.TouchableOpacity``;

export const Details = styled.View`
  flex: 1;
`;

export const TitleProduct = styled.Text`
  color: #333;
  font-size: 14px;
`;

export const TitlePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Divider = styled.View`
  height: 1.2px;
  background-color: #c6c6c6;
`;

export const CardBody = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
  background-color: #f5f5f5;
  padding: 5px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  border: 0;
  padding: 6px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 50px;
`;

export const ButtonSub = styled.TouchableOpacity`
  border: 0;
  padding: 6px;
`;

export const TotalContainer = styled.View``;

export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-left: 30px;
`;

export const Total = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextTotal = styled.Text`
  font-size: 20px;
  color: #ccc;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const ButtonFinalizar = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  height: 35px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;
