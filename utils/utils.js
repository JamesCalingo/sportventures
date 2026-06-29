import { posts } from "../posts";

const postsData = posts();

export const tags = Array.from(new Set(postsData.flatMap(post => post.frontmatter.tags || []))).sort();

export const recents = postsData.filter((post) => post.frontmatter.published === true).reverse().slice(0, 6);
export const latest = recents[0]
export const pinned = postsData.filter((post) => post.frontmatter.pinned === true)[0];

export const paginate = (page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return postsData.filter((post) => post.frontmatter.published === true).reverse().slice(start, end);
}

export const displayDate = (publishDate, date) => {

    if (!date && !publishDate) return null

    if (!date) return `Published on ${new Date(publishDate).toLocaleDateString()}`

    if (Math.floor((new Date(publishDate) - new Date(date)) / (1000 * 60 * 60 * 24)) > 3) {
        return `${new Date(date).toLocaleDateString()} | Published on ${new Date(publishDate).toLocaleDateString()}`
    }

    return new Date(date).toLocaleDateString();
}