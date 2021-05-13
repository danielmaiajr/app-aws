/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem($owner: String) {
    onCreateCartItem(owner: $owner) {
      id
      quantity
      createdAt
      updatedAt
      product {
        id
        product_name
        price
        image_url
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem($owner: String) {
    onUpdateCartItem(owner: $owner) {
      id
      quantity
      createdAt
      updatedAt
      product {
        id
        product_name
        price
        image_url
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem($owner: String) {
    onDeleteCartItem(owner: $owner) {
      id
      quantity
      createdAt
      updatedAt
      product {
        id
        product_name
        price
        image_url
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
