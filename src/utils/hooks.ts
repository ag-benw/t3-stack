import Shopify from '@shopify/shopify-api';

export const client = new Shopify.Clients.Graphql(
    'acidgreen-reporting.myshopify.com',
    process.env.API_KEY,
)

