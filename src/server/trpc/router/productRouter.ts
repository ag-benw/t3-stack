import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import Shopify from '@shopify/shopify-api';

async function getProduct(handle: string) {
  const query = `{
      productByHandle(handle: "${handle}") {
        priceRangeV2 {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        title
        variants(first: 3) {
          nodes {
            title
          }
        }
        images(first: 10) {
          nodes {
            url
            altText
            id
          }
        }
        description
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

export const productRouter = router({
  getProduct: publicProcedure
    .input(z.string().nullish())
    .query(async ({input}) => {
      return await getProduct(input as string);
    })
})