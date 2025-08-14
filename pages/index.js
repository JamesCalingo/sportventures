import { useState } from "react";

import { posts } from "../posts";
import PostList from "../components/PostList";
import NewestPost from "../components/NewestPost";
import Layout from "../components/Layout";


const Index = ({ posts }) => {
  const pinned = posts.filter((post) => post.frontmatter.pinned === true).reverse();
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
      <div>
      <NewestPost slug={latest.slug} display={latest.frontmatter.display} date={latest.frontmatter.date} />
      </div>
      
      {/* <h2 className="section-header">HIGHLIGHTS</h2>
      <PostList pinned posts={pinned} /> */}
      {seeAll ? <>
        <div className="section-header">
          <span>OLDER POSTS</span>
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
