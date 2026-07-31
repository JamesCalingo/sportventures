import { posts } from "../posts";
import PostList from "../components/PostList";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const AllPosts = ({ posts }) => {
    const published = posts.filter((post) => post.frontmatter.published === true).reverse();
    console.log(published.length)

    const [postList, setPostList] = useState(published)
    const [tag, setTag] = useState('')
    const [page, setPage] = useState(1)
    const [oldestFirst, setOldestFirst] = useState(false)

    useEffect(() => {
        if (tag !== '') {
            const filtered = published.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(tag))
            setPostList(filtered)
        } else {
            setPostList(published)
        }
    }, [tag])

    useEffect(() => {
        if (oldestFirst) {
            setPostList(published.reverse())
        } else {
            setPostList(published)
        }
    }, [oldestFirst])

    function handleResetSelect() {
        const selectElement = document.getElementById('tag-select');
        selectElement.selectedIndex = 0;
        setTag('');
    }

    return (
        <Layout pageTitle="All Posts - Sportventures">

            <div className="section-header">
                <span>THE ARCHIVES</span>
            </div>
            <div className="controls">
                <div id="tag-filter">
                    <label htmlFor="tag-select">Filter by: </label>
                    <select id="tag-select" defaultValue={""} onChange={(e) => {
                        const selectedTag = e.target.value;
                        setTag(selectedTag);
                    }}>
                        <option value="" disabled>All Posts</option>
                        {Array.from(new Set(posts.flatMap(post => post.frontmatter.tags || []))).sort().map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
                {tag ? <button onClick={() => handleResetSelect()}>Show All Posts</button> : <button onClick={() => setOldestFirst(!oldestFirst)}>Show {oldestFirst ? "Newest" : "Oldest"} First</button>}
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
