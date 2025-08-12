import { posts } from "../posts";

import Layout from "../components/Layout";
import GridItem from "../components/GridItem";

const Index = ({ posts }) => {
  return (
    <Layout pageTitle="Sportventures">
        <div id="title">
          <h1 id="blog_title">Sportventures</h1>
          <p id="blog_tag"></p>
        </div>
      <PostsList posts={posts} />
    </Layout>
  );
};

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>Nothing to see here...</p>;

  return (
    <div id="postsList">

        {posts
          .filter((post) => post.frontmatter.published === true)
          .reverse()
          //TODO: paginate this list
          .map((post, index) => {
            const { frontmatter, slug } = post;
            const { display, date, } = frontmatter;

            return ( <GridItem key={index} slug={slug} display={display} date={date} />
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
