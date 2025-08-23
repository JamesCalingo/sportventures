import { posts } from "../posts";

const postsData = posts();


export const recents = postsData.filter((post) => post.frontmatter.published === true).reverse().slice(0, 6);
export const latest = recents[0]