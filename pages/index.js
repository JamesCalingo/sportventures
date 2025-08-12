import { posts } from "../posts";

import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
import { useState } from "react";

const Index = ({ posts }) => {

  const [seeAll, setSeeAll] = useState(true);
  return (
    <Layout pageTitle="Sportventures">
      <div id="title">
        <h1 id="blog_title">Sportventures</h1>
        <p id="blog_tag"></p>
      </div>
      {/* <h2>HIGHLIGHTS</h2>
        <PinnedList posts={posts} /> */}
      {seeAll ? <>
        {/* <h2>ALL POSTS</h2> */}
        <PostsList posts={posts} />
      </> : <button onClick={() => setSeeAll(true)}>See All Posts</button>}
    </Layout>
  );
};

const PinnedList = ({ posts }) => {
  if (!posts || !posts.length) return <p>Nothing to see here...</p>;

  return (
    <div id="postsList">

      {posts
        .filter((post) => post.frontmatter.pinned === true)
        .reverse()
        //TODO: paginate this list
        .map((post, index) => {
          const { frontmatter, slug } = post;
          const { display, date, } = frontmatter;

          return (<GridItem key={index} slug={slug} display={display} date={date} />
          );
        })}

    </div>
  );
};

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>Nothing to see here...</p>;

  return (
    <div id="postsList">

      {posts
        .filter((post) => post.frontmatter.published && !post.frontmatter.pinned)
        .reverse()
        //TODO: paginate this list
        .map((post, index) => {
          const { frontmatter, slug } = post;
          const { display, date, } = frontmatter;

          return (<GridItem key={index} slug={slug} display={display} date={date} />
          );
        })}

    </div>
  );
};

export async function getStaticProps() {
  const postsData = posts();

  return {
    props: {
      posts: postsData,
    },
  };
}

export default Index;
