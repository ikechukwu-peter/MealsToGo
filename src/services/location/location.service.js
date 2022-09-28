import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  console.log(searchTerm, "SEARCH TERM");
  return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
    console.log(res, "RESPONSE");
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);

  const { geometry = {} } = formattedResponse.results[0];

  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
