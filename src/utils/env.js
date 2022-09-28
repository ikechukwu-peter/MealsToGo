const localHost = "http://192.168.102.184:3000";
const liveHost = "https://mealstogoapi.herokuapp.com";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
