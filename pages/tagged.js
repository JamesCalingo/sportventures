import { posts } from "../posts";
import PostList from "../components/PostList";
import Layout from "../components/Layout";

const Tagged = ({ posts }, tag) => {

    const published = posts.filter((post) => post.frontmatter.published === true);
    const tagged = published.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes("Hockey East")).reverse()
    console.log(tagged)

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
    const postsData = posts();

    return {
        props: {
            posts: postsData,
        },
    };
}

export default Tagged;
