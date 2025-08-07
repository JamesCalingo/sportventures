import { posts } from "../posts";

import Layout from "../components/Layout";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <Layout pageTitle="Sportventures - James Calingo">
      <div className="main_page">
        {/* <div id="title">
          <h1 id="blog_title">s</h1>
          <p id="blog_tag">SPORT</p>
        </div> */}
      </div>
      <PostsList posts={posts} />
    </Layout>
  );
};

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>Nothing to see here...</p>;

  return (
    <div id="postsList">
      <ul>
        {posts
          .filter((post) => post.frontmatter.published === true)
          .reverse()
          .map((post, index) => {
            const { frontmatter, slug } = post;
            const { description, date, title } = frontmatter;

            return (
              <li key={index}>
                <Link href={`/blog/${slug}`}>
                  
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className="italic">{new Date(date).toLocaleDateString()}</p>
            
                </Link>
              </li>
            );
          })}
      </ul>
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
