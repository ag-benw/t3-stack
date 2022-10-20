import { CollectionCard } from "./collection-card";
import { Callout } from "../types/types";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";

export default function CollectionList() {
  const router = useRouter();
  const path = router.asPath.substring(router.asPath.lastIndexOf("/") + 1);
  const response = trpc.ShopifyRouter.collectionList.useQuery(path);
  
  if (response.isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (response.isError) {
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>
        <h4>Error</h4>
      </div>
    </div>
  }

  const collection = response.data.body.data.collections.nodes

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
