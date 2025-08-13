import { useState } from "react";

import { posts } from "../posts";
import PostList from "../components/PostList";
import PinnedItem from "../components/PinnedItem";
import Layout from "../components/Layout";


const Index = ({ posts }) => {
  // const pinned = posts.filter((post) => post.frontmatter.pinned === true);
  const published = posts.filter((post) => post.frontmatter.published === true).reverse();
  const latest = published[0]
  const olderPosts = published.slice(1);

  const [seeAll, setSeeAll] = useState(true);
  return (
    <Layout pageTitle="Sportventures">
      <div id="title">
        <h1 id="blog_title">Sportventures</h1>
        <p id="blog_tag"></p>
      </div>
      <div className="section-header">
        <h2>NEWEST POST ({new Date(latest.frontmatter.date).toLocaleDateString()})</h2>
      </div>
      <PinnedItem slug={latest.slug} display={latest.frontmatter.display} date={latest.frontmatter.date} />
      {/* <PostList pinned posts={pinned} /> */}
      {seeAll ? <>
        <div className="section-header">
          <h2>OLDER POSTS</h2>
        </div>
        <PostList posts={olderPosts} />
      </> : <button id="see-all" onClick={() => setSeeAll(true)}>See All Posts</button>}
    </Layout>
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
