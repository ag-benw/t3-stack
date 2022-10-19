import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import Shopify from '@shopify/shopify-api';

async function getCollectionItems(handle: string) {
  const query = `{
    collectionByHandle(handle: "${handle}") {
      products(first: 8) {
        nodes {
          id
          handle
          title
          featuredImage {
            id
            url
            altText
          }
          priceRangeV2 {
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

  const client = new Shopify.Clients.Graphql(
    'acidgreen-reporting.myshopify.com',
    process.env.API_KEY,
  )

  const response = await client.query({
    data: query
  })

  return response
}

export const collectionRouter = router({
  getCollectionItem: publicProcedure
    .input(z.string().nullish())
    .query(async ({input}) => {
      return await getCollectionItems(input as string);
    })
})