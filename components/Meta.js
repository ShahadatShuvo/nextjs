import Head from "next/head";
import React from "react";

function MetaTags() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="shahadat blog, blog, shahadat, about" />
      <meta name="author" content="Shahadat Hossain" />
      <meta name="publisher" content="Shahadat Hossain" />
      <meta name="page-topic" content="Blog" />
      <meta name="page-type" content="Blogging" />
      <meta name="audience" content="Everyone" />
    </Head>
  );
}

export default MetaTags;