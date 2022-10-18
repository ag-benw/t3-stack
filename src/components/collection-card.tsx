import { CollectionCard } from "../types/types"

export function CollectionCard(props: CollectionCard) {
  const url = `/collection/${props.handle}`
  return (
    <a href={url} key={props.title} className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={props.image.url}
          alt={props.image.altText}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h2 className="text-base font-semibold text-gray-900">{props.title}</h2>
      <h3 className="text-sm text-gray-500">
        <span className="absolute inset-0" />
        {props.description}
      </h3>
    </a>
  )
}

