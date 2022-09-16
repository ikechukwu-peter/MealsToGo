import React from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utitlity/safe-area-view.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantList, SearchContainer } from "./restaurants.screen.styles";

export const RestaurantsScreens = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
