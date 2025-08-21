import { useState } from "react";

import { posts } from "../posts";
import PostList from "../components/PostList";
import NewestPost from "../components/NewestPost";
import Layout from "../components/Layout";


const Index = ({ posts }) => {
  const pinned = posts.filter((post) => post.frontmatter.pinned === true).reverse();
  const published = posts.filter((post) => post.frontmatter.published === true).reverse();
  const latest = published[0]

  function IsLatestPinned(post, array) {
    return post.frontmatter.title === array[0].frontmatter.title
  }

  const [seeAll, setSeeAll] = useState(true);
  return (
    <Layout pageTitle="Sportventures">
      <div id="title">
        <h1 id="blog_title">Sportventures</h1>
        <p id="blog_tag"></p>
      </div>

      <NewestPost slug={latest.slug} display={latest.frontmatter.display} description={latest.frontmatter.description} date={latest.frontmatter.date} />

      {/* <h2 className="section-header">HIGHLIGHTS</h2>
      <p className="section-subheader">Posts I think you should check out</p>
      <PostList pinned posts={IsLatestPinned(latest, pinned) ? pinned.slice(1) : pinned} /> */}

      {seeAll ? <>
        <div className="section-header">
          <span>OLDER POSTS</span>
        </div>
        <PostList posts={published.slice(1)} />
      </> :
        <div id="see-all-container">
          <button id="see-all" onClick={() => setSeeAll(true)}>See All Posts</button>
        </div>
      }
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
