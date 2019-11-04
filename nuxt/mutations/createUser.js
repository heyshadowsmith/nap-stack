import gql from 'graphql-tag'

export default gql `
  mutation createUser($name: String!) {
    createUser(
      data: {
        name: $name
      }
    ) {
      id
      name
    }
  }
`
