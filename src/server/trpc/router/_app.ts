// src/server/router/_app.ts
import { router } from "../trpc";
import { collectionRouter } from "./collectionRouter";
import { collectionListRouter } from "./collectionListRouter";
import { productRouter } from "./productRouter";

export const appRouter = router({
  collectionListRouter: collectionListRouter,
  collectionRouter: collectionRouter,
  productRouter: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
