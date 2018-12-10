import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import { Config } from "./Config";

Vue.use(VueApollo);

const apolloProvider = new ApolloClient({
  uri: Config.apolloUri
});

export default apolloProvider;
