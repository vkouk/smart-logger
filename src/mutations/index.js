import gql from "graphql-tag";

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      user {
        id
        name
        email
        avatar
      }
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      user {
        id
        name
        email
        avatar
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $email: String
    $name: String
    $avatar: String
  ) {
    updateUser(email: $email, name: $name, avatar: $avatar) {
      id
      name
      email
      avatar
    }
  }
`;

export const CREATE_LOG = gql`
  mutation CREATE_LOG($log: String!, $logTime: Int!) {
    createLog(log: $log, logTime: $logTime) {
      log
      logTime
    }
  }
`;
