import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account-styles.components";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { error, isLoading, onRegister } = useContext(AuthenticationContext);

  const handleSubmit = () => {
    onRegister(email, password, repeatedPassword);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <Spacer position="bottom" size="large">
        <AccountContainer>
          <Spacer position="bottom" size="large">
            <AuthInput
              label="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Spacer>

          <Spacer position="bottom" size="large">
            <AuthInput
              label="Password"
              value={password}
              secureTextEntry
              textContentType="Password"
              keyboardType="password"
              secure
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
          </Spacer>
          <Spacer position="bottom" size="large">
            <AuthInput
              label="Confirm Password"
              value={repeatedPassword}
              secureTextEntry
              textContentType="Password"
              keyboardType="password"
              secure
              autoCapitalize="none"
              onChangeText={(text) => setRepeatedPassword(text)}
            />
          </Spacer>

          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
              <Spacer position="bottom" size="large" />
            </ErrorContainer>
          )}

          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={handleSubmit}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </AccountContainer>
      </Spacer>

      <Spacer size="large" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Go Back
      </AuthButton>
    </AccountBackground>
  );
};
