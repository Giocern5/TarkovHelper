import {gql} from '@apollo/client';

const GET_DOG = gql`
  query GetDog($dogId: ID!) {
    dog(id: $dogId) {
      name
      breed
    }
  }
`;

export const GET_ITEM = gql`
  query GetItems($itemName: String) {
    items(limit: 45, name: $itemName) {
      id
      name
      shortName
      iconLink
      basePrice
      inspectImageLink
      sellFor {
        priceRUB
        vendor {
          name
        }
      }
      usedInTasks {
        id
        name
      }
      receivedFromTasks {
        id
        name
      }
    }
  }
`;
