import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import Shopify from '@shopify/shopify-api';

async function getCollectionList() {
  const query = `{
    collections(first: 10) {
      nodes {
        id
        title
        description
        handle
        image {
          altText
          url
        }
      }
    }
  }
  `;

  const client = new Shopify.Clients.Graphql(
    'acidgreen-reporting.myshopify.com',
    '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',
  )

  const response = await client.query({
    data: query
  })

  return response
}

export const collectionListRouter = router({
  getCollectionList: publicProcedure
    .query(async () => {
      return await getCollectionList();
    })
})