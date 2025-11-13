import { posts } from "../../posts";
import PostList from "../../components/PostList";
import Layout from "../../components/Layout";
import {tags} from "../../utils/utils";
console.log(tags)

const Tagged = ({ posts }, tag) => {

    const published = posts.filter((post) => post.frontmatter.published === true);
    const tagged = published.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(tag)).reverse()


    return (
        <Layout pageTitle={`${tag} - Sportventures`}>

            <div className="section-header">
                <span>Posts tagged "{tag}"</span>
            </div>
            <PostList posts={tagged} />

        </Layout>
    );
};

export async function getStaticProps() {
    const tagProps = tags;

    return {
        props: {
            tags: tagProps,
        },
    };
}

export async function getStaticPaths() {
  const paths = tags.map((slug) => `/tagged/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Tagged;
