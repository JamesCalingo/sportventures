import { posts } from "../posts";
import PostList from "../components/PostList";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const AllPosts = ({ posts }) => {
    const published = posts.filter((post) => post.frontmatter.published === true).reverse();
    console.log(published.length)

    const [postList, setPostList] = useState(published)
    const [tag, setTag] = useState('')

    useEffect(() => {
        if (tag !== '') {
            const filtered = published.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(tag))
            setPostList(filtered)
        } else {
            setPostList(published)
        }
    }, [tag])

    return (
        <Layout pageTitle="All Posts - Sportventures">

            <div className="section-header">
                <span>ALL POSTS</span>
            </div>
            <div id="tag-filter">
                <label htmlFor="tag-select">Filter by: </label>
                <select onChange={(e) => {
                    const selectedTag = e.target.value;
                    setTag(selectedTag);
                }}>
                    <option value="">All Posts</option>
                    {Array.from(new Set(posts.flatMap(post => post.frontmatter.tags || []))).sort().map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            <PostList posts={postList} />

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
