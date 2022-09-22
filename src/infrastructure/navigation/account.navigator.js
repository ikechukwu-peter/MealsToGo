import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import { View } from "react-native";
// import { Text } from "react-native-paper";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  // const iconName = TAB_ICON[route.name];

  return {
    //   tabBarIcon: ({ size, color }) => (
    //     <Ionicons name={iconName} color={color} size={size} />
    //   ),
    tabBarInactiveTintColor: "gray",
    tabBarActiveTintColor: "tomato",
    headerShown: false,
  };
};

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={createScreenOptions}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
