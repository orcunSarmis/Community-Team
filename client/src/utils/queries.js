import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query Me {
  me {
    _id
    username
    email
  }
}
`;

export const QUERY_COMMUNITY= gql`
query Community {
  community {
    __id
    name
    location
    users {
      name
    }
  }
}
`