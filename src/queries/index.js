import gql from "graphql-tag";

export const GET_USER_QUERY = gql`
  query GET_USER_QUERY {
    me {
      id
      name
      email
      avatar
    }
  }
`;
