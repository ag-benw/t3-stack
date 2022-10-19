import { Breadcrumbs } from "./breadcrumbs";
import { ProductInfo } from "./product-info";
import { ImageGallery } from "./image-gallery";
import { Handle } from '../types/types';
import { trpc } from '../utils/trpc';

export function Product(props: Handle) {
  const response = trpc.productRouter.getProduct.useQuery(`${props.handle}`)
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

  const product = response.data.body.data.productByHandle;
  const price = response.data.body.data.productByHandle.priceRangeV2.maxVariantPrice;
  const images = response.data.body.data.productByHandle.images.nodes;
  console.log(price)
  return (
    <div className="pt-6">
      <Breadcrumbs product={product} handle={props.handle} />

      <ImageGallery images={images} id={""} />

      <ProductInfo product={product} price={price} />
    </div>
  )
}