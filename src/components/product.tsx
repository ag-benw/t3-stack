import { Breadcrumbs } from "./breadcrumbs";
import { ProductInfo } from "./product-info";
import { ImageGallery } from "./image-gallery";
import { fetchQuery } from "../utils/hooks";
import { useQuery } from "@tanstack/react-query";
import { Handle } from '../types/types';

export function Product(props: Handle) {
  const query = `
  query product {
    productByHandle(handle: "${props.handle}") {
      priceRange {
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

  const { data, status } = useQuery(['Product'], () => fetchQuery(query));

  if (status === 'loading') {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Loading...</h2>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Error!</h2>
        </div>
      </div>
    )
  }

  const product = data.data.productByHandle
  const price = data.data.productByHandle.priceRange;
  const images = data.data.productByHandle.images.nodes

  return (
    <div className="pt-6">
      <Breadcrumbs product={product} handle={props.handle} />

      <ImageGallery images={images} id={""} />

      <ProductInfo product={product} price={price} />
    </div>
  )
}