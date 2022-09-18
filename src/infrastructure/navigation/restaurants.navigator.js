import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreens } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreens } from "../../features/restaurants/screens/restaurant-detail.screens";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantsScreens}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreens}
      />
    </RestaurantStack.Navigator>
  );
};
