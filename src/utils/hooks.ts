export async function fetchQuery(query: string) {
  const res = await fetch(`https://acidgreen-reporting.myshopify.com/api/unstable/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "1f6fdd28b243e5f7624973f4be569a1a",
    },
    body: JSON.stringify({
      query,
    }),
  });
  return res.json();
}