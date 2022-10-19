export interface CollectionCard {
  handle: string,
  title: string,
  href: string,
  description: string,
  image: {
    altText: string,
    src: string,
    url: string,
  }
}

export interface Breadcrumbs {
  product: { 
    title: string 
  },
  handle: string
}

export interface Callout {
  id: string,
  handle: string,
  title: string,
  href: string,
  description: string,
  image: { 
    url: string,
    altText: string,
    src: string,
  }
}

export interface Product {
  id: string,
  title: string,
  handle: string,
  variants: [],
  priceRangeV2: {},
  featuredImage: {},
}

export interface Collection {
  handle: string,
}

export interface Images {
  images: []
  id: string,
}

export interface Image {
  altText: string,
  id: string,
  url: string,
}

export interface ProductInfo {
  price: {
    amount: number,
  },
  product: {
    description: string,
    images: {
      altText: string,
      id: string,
      url: string,
    },
    priceRangeV2: {
      minVariantPrice: {
        amount: number,
      },
      maxVariantPrice: {
        amount: number,
      },
    },
    title: string,
    variants: {
      nodes: [{ 
        title: string
      }]
    }
  }
}

export interface ProductCards {
  id: string,
  handle: string,
  color: string,
  title: string,
  href: string,
  description: string,
  featuredImage: { 
    url: string,
    altText: string,
    id: string,
  },
  price: {
    minVariantPrice: {
      amount: number,
    },
    maxVariantPrice: {
      amount: number,
    },
  },
}

export interface Handle {
  handle: string,
}

export interface Button {
  text: string,
}