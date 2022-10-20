import ProductCard from './product-card';
import { Product, Collection } from '../types/types';
import { trpc } from '../utils/trpc';
import { useRouter } from 'next/router';


export function Collection(props: Collection) {
  const router = useRouter();
  const path = router.asPath.substring(router.asPath.lastIndexOf("/") + 1);
  const response = trpc.ShopifyRouter.collection.useQuery(path);
  
  if (response.isLoading) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Loading...</h2>
        </div>
      </div>
    )
  }

  if (response.isError) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Error!</h2>
        </div>
      </div>
    )
  }

  const products = response.data.body.data.collectionByHandle.products.nodes

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{props.handle}</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products && products.map((product: Product) => (
              <ProductCard key={product.id} handle={product.handle} id={product.id} title={product.title} featuredImage={product.featuredImage} price={product.priceRangeV2} />
            ))}
          </div>
      </div>
    </div>
  );
}