import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight;

export const SafeArea = styled(SafeAreaView)`
  ${statusBarHeight && `margin-top: ${statusBarHeight}px`};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
