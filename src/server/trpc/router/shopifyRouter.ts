import { z } from 'zod';
import { productByHandleQuery, collectionByHandleQuery, collectionQuery } from '../../../graphql/shopify';
import { client } from '../../../utils/hooks';
import { publicProcedure, router } from '../trpc';

export const shopifyRouter = router({
  product: publicProcedure
    .input(z.string())
    .query(async ({input}) => {
      const query = productByHandleQuery(input as string);
      const response = await client.query({ data: query });
      return response;
    }),
  collection: publicProcedure
    .input(z.string())
    .query(async ({input}) => {
      const query = collectionByHandleQuery(input as string);
      const response = await client.query({ data: query });
      return response;
  }),
  collectionList: publicProcedure
    .input(z.string())
    .query(async ({input}) => {
      const query = collectionQuery;
      const response = await client.query({ data: query });
      return response;
    })
})