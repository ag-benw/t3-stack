export const productByHandleQuery = (path: string) => `{
  productByHandle(handle: "${path}") {
    priceRangeV2 {
      minVariantPrice {
        amount
      }
      maxVariantPrice {
        amount
      }
    }
    title
    variants(first: 3) {
      nodes {
        title
      }
    }
    images(first: 10) {
      nodes {
        url
        altText
        id
      }
    }
    description
  }
}
`;

export const collectionByHandleQuery = (path: string) => `{
  collectionByHandle(handle: "${path}") {
    products(first: 8) {
      nodes {
        id
        handle
        title
        featuredImage {
          id
          url
          altText
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
}
`;

export const collectionQuery = `{
  collections(first: 10) {
    nodes {
      id
      title
      description
      handle
      image {
        altText
        url
      }
    }
  }
}
`;