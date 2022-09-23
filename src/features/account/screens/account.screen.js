import React, { useContext } from "react";
import LottieView from "lottie-react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/account-styles.components";

export const AccountScreen = ({ navigation }) => {
  const { isLoading } = useContext(AuthenticationContext);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator animating="true" color={Colors.blue300} />
      ) : (
        <AccountBackground>
          <AccountCover />
          <AnimationWrapper>
            <LottieView
              autoPlay
              loop
              resizeMode="cover"
              source={require("../../../../assets/watermelon.json")}
            />
          </AnimationWrapper>

          <Title>Meals To Go</Title>
          <AccountContainer>
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </AuthButton>
            <Spacer size="large">
              <AuthButton
                icon="email"
                mode="contained"
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                Register
              </AuthButton>
            </Spacer>
          </AccountContainer>
        </AccountBackground>
      )}
    </>
  );
};
