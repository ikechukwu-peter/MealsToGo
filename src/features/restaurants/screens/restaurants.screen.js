import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utitlity/safe-area-view.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Loader } from "../../../utils/Loader";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import { RestaurantList } from "./restaurants.screen.styles";
import { FadeInView } from "../../../components/animation/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { Text } from "../../../components/typography/text.component";

export const RestaurantsScreens = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  console.log(!!locationError, !!error, "ERRORS");

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {!!locationError ||
        (!!error && (
          <Spacer position="left" size="large">
            <Text variant="error">
              Something went wrong while retrieving data
            </Text>
          </Spacer>
        ))}

      {loading ? (
        <Loader />
      ) : (
        <>
          {!error && !locationError && (
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                      })
                    }
                  >
                    <Spacer position="bottom" size="large">
                      <FadeInView>
                        <RestaurantInfoCard restaurant={item} />
                      </FadeInView>
                    </Spacer>
                  </TouchableOpacity>
                </>
              )}
              keyExtractor={(item) => item.name}
            />
          )}
        </>
      )}
    </SafeArea>
  );
};
