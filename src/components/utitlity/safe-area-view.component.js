import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight;

export const SafeArea = styled(SafeAreaView)`
  ${statusBarHeight && `margin-top: ${statusBarHeight}px`};
  flex: 1;
`;
