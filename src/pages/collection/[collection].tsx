import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Collection } from '../../components/collection-grid';


const Collections: NextPage = () => {

  const router = useRouter();
  const collectionHandle = router.query.collection;

  if (!collectionHandle) return <>Loading Collection...</>;
  return (
    <>
      <Head>
        <title>{collectionHandle}</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <Collection handle={collectionHandle} />
      </main>
    </>
  );
};

export default Collections;