import { Images, Image } from '../types/types';
export function ImageGallery(props: Images) {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {props.images && props.images.map((image: Image) => (
        <div key={image.id} className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
          <img
            src={image.url}
            alt={image.altText}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}