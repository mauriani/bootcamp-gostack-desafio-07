import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const CardProduct = styled.View`
  background-color: #fff;
  height: 300px;
  border-radius: 20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const Image = styled.Image`
  flex: 1;
  height: 120px;
  width: 220px;
`;

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

export const ButtonRemove = styled.TouchableOpacity`
  border: 0;
  padding: 6px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-left: 30px;
`;

export const Total = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;
