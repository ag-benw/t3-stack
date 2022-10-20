// src/server/router/_app.ts
import { router } from "../trpc";
import { shopifyRouter } from "./shopifyRouter";

export const appRouter = router({
  ShopifyRouter: shopifyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
