import { useQuery } from "@tanstack/react-query";
import { CollectionCard } from "./collection-card";
import { fetchQuery } from "../utils/hooks";
import { Callout } from "../types/types";

export default function CollectionList() {
  const query = `
  query getCollections {
    shop {
      name
    }
    collections(first: 10) {
      nodes {
        id
        title
        description
        handle
        image {
          altText
          src
          url
        }
      }
    }
  }  
  `;

  const { data, status } = useQuery(['Collections'], () => fetchQuery(query));

  if (status === 'loading') {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>
        <h4>Error!</h4>
      </div>
    </div>
  }

  const collection = data.data.collections.nodes

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0">
            {collection && collection.map((callout: Callout) => (
              <CollectionCard key={callout.id} handle={callout.handle} title={callout.title} href={callout.href} description={callout.description} image={callout.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
