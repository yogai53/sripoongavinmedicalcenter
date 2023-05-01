import React from "react";
import Head from "next/head";
import { hospitalName } from "@/constants/hospital";

interface IProps {
  title: string;
  description: string;
  keywords: string;
  // author: string;
  url: string;
  image: string;
}

function MetaTags(props: IProps) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={"Dr. Chennappan"} />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content={hospitalName} />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" itemProp="image" content={props.image} />
        <meta property="og:type" content="website" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        {/* <link
          rel="icon"
          href="/seo/cropped-android-chrome-512x512-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/seo/cropped-android-chrome-512x512-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/seo/cropped-android-chrome-512x512-180x180.png"
        /> */}
        <link rel="canonical" href={props.url} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </div>
  );
}

export default MetaTags;
