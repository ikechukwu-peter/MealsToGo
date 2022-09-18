import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loader = () => (
  <LoadingContainer>
    <Loading size={50} animating={true} color={Colors.blue300} />
  </LoadingContainer>
);
