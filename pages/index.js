import Link from "next/link";
// import { posts } from "../posts";
import PostList from "../components/PostList";
import NewestPost from "../components/NewestPost";
import Layout from "../components/Layout";
import { recents, latest } from "../utils/utils";

const Index = () => {


  return (
    <Layout pageTitle="Sportventures">
      <div id="title">
        <h1 id="blog_title">Sportventures</h1>
        <p id="blog_tag"></p>
      </div>

      <NewestPost slug={latest.slug} display={latest.frontmatter.display ? latest.frontmatter.display : latest.frontmatter.title} subtitle={latest.frontmatter.subtitle} date={latest.frontmatter.date} />

      <div className="section-header">
        <span>RECENT POSTS</span>
      </div>
      <PostList newest posts={recents.slice(1)} />
      <div className="section-header">
        <Link href="/allposts">See All Posts</Link>
      </div>

    </Layout>
  );
};

export async function getStaticProps() {
  const postsData = recents;

  return {
    props: {
      posts: postsData,
    },
  };
}

export default Index;
