import { posts } from "../posts";
import PostList from "../components/PostList";
import Layout from "../components/Layout";

const AllPosts = ({ posts }) => {

    const published = posts.filter((post) => post.frontmatter.published === true).reverse();

    return (
        <Layout pageTitle="All Posts - Sportventures">

            <div className="section-header">
                <span>ALL POSTS</span>
            </div>
            <PostList posts={published} />

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

export default AllPosts;
