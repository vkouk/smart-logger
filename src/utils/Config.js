const env = process.env === "development" ? "development" : "production";

export const Config = {
  apolloUri:
    env === "development"
      ? "http://localhost:5000"
      : "https://smart-logger-api.herokuapp.com/"
};
