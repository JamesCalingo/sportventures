import { posts } from "../posts";
import PostList from "../components/PostList";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { tags } from "../utils/utils";

const AllPosts = ({ posts }) => {
    const published = posts.filter((post) => post.frontmatter.published === true).reverse();
    // console.log(published.length)

    const [postList, setPostList] = useState(published)
    const [tag, setTag] = useState('')
    const [page, setPage] = useState(1)
    const [oldestFirst, setOldestFirst] = useState(false)

    useEffect(() => {
        handleResetSelect()
    }, []
    )

    useEffect(() => {
        console.log("POSTLIST CHANGED")
    }, [postList]
    )

    useEffect(() => {
        if (tag) {
            const filtered = published.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(tag))
            setPostList(filtered)
        } else {
            setPostList(published)
        }
    }, [tag])

    useEffect(() => {
        setPostList(postList.reverse())
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
                        {tags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>

                {tag ? <button onClick={() => window.location.reload()}>Show All Posts</button> : <button onClick={() => setOldestFirst(!oldestFirst)}>Show {oldestFirst ? "Newest" : "Oldest"} First</button>}
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
