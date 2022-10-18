import ProductCard from './product-card';
import { fetchQuery } from "../utils/hooks";
import { useQuery } from "@tanstack/react-query";
import { Product, Collection } from '../types/types';


export function Collection(props: Collection) {
  const query = `
  query getProducts {
    collectionByHandle(handle: "${props.handle}") {
      products(first: 8) {
        nodes {
          id
          handle
          title
          featuredImage {
            id
            src
            url
            altText
          }
          priceRange {
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

  const { data, status } = useQuery(['Products'], () => fetchQuery(query));

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

  const products = data.data.collectionByHandle.products.nodes

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{props.handle}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products && products.map((product: Product) => (
            <ProductCard key={product.id} handle={product.handle} id={product.id} title={product.title} featuredImage={product.featuredImage} price={product.priceRange} />
          ))}
        </div>
      </div>
    </div>
  );
}