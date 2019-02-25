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

export const GET_LOGS = gql`
  query GET_LOGS {
    logs {
      id
      log
      logTime
    }
  }
`;
