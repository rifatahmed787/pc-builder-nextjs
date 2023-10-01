import RootLayout from "@/components/Layouts/RootLayout";
import Login from "@/components/UI/Login";
import React from "react";
import Head from "next/head";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Login />
    </div>
  );
};

export default LoginPage;
LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
