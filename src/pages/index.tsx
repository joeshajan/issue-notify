import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { Session } from "inspector";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // console.log(hello);

  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {session?.user?.name ? (
          <p>
            Welcome <b>{session?.user?.name}</b> to Issue Notify
          </p>
        ) : (
          <p> Welcome please Sign In</p>
        )}
      </div>
      {session?.user?.name ? (
        <button onClick={() => void signOut()}>Sign out</button>
      ) : (
        <button onClick={() => void signIn()}>Sign in</button>
      )}
    </>
  );
};

export default Home;
