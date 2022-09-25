import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utitlity/safe-area-view.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/screens/restaurants.screen.styles";

const TextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export function FavouritesScreen({ navigation }) {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <TextContainer>
          <Text variant="label">You have no favourites.</Text>
        </TextContainer>
      )}
    </SafeArea>
  );
}
