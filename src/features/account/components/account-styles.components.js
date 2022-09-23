import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.6);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 100%;
  min-width: 80%;
`;

export const Title = styled.Text`
  font-size: 30px;
`;

export const ErrorContainer = styled.Text`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  width: 100%;
  color: ${(props) => props.theme.colors.ui.error};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  padding: ${(props) => props.theme.space[2]};
  top: 30px;
`;
