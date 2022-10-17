import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FearuedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Amr' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FearuedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

//1) hero => present ourself or main thing

//2) Featured posts
