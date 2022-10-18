import { ProductCards } from '../types/types';

export default function ProductCard(props: ProductCards) {
  const url = `/products/${props.handle}`
  const price = `$${props.price.maxVariantPrice.amount}`
  return (
    <a href={url} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={props.featuredImage.url}
          alt={props.featuredImage.altText}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {props.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </a>
  )
}