import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("Montreal");
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setLoading(true);
  };

  useEffect(() => {
    if (!keyword.length) {
      //do not search
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setError(null);
        setLocation(result);
      })
      .catch((err) => {
        console.log(err);
        //to be removed
        setError("something went wrong");
      })
      .finally(() => setLoading(false));
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        loading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
