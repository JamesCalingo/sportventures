import Link from "next/link";
import PostList from "../components/PostList";
import NewestPost from "../components/NewestPost";
import Layout from "../components/Layout";
import { recents, latest, pinned } from "../utils/utils";

const Index = () => {

  return (
    <Layout pageTitle="Sportventures">
      <div id="title">
        <h1 id="blog_title">Sportventures</h1>
        <p id="blog_tag">Travels and thoughts on the wide world of sports</p>
        {/* <p><Link href={"2026newvenuelist"}>Aiming to visit 26 new venues in 2026</Link></p> */}
      </div>

      {pinned &&
        <div className="pinned">
          <a href={pinned.slug}>{pinned.frontmatter.display ? pinned.frontmatter.display : pinned.frontmatter.title}</a>
        </div>
      }

      <NewestPost slug={latest.slug} display={latest.frontmatter.display ? latest.frontmatter.display : latest.frontmatter.title} subtitle={latest.frontmatter.subtitle} date={latest.frontmatter.date ? latest.frontmatter.date : latest.frontmatter.publishDate} background={latest.frontmatter.background} />

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
