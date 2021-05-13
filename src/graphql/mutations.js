/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      product_name
      price
      image_url
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      product_name
      price
      image_url
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      product_name
      price
      image_url
      createdAt
      updatedAt
    }
  }
`;
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
