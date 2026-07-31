import Image from "next/image";
import Markdown from "react-markdown";
import { postSlugs, postForSlug } from "../posts";
import Layout from "../components/Layout";
import Tag from "../components/Tag";
import RelatedPost from "../components/RelatedPost";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import Error500 from "./500";
import { displayDate } from "../utils/utils.js";

function Post({ frontmatter, body, slug }) {

  if (!frontmatter || !Object.keys(frontmatter).length) return <Error500 />

  const related = frontmatter.related && frontmatter.related.length ? frontmatter.related.filter(post => post.link !== slug) : null;

  return (
    <Layout pageTitle={frontmatter.display ? `${frontmatter.display} - Sportventures` : `${frontmatter.title} - Sportventures`}>
      <div className="post-container">
        <article>
          <div className="post-header">
            <div className="post-date">
              <em>{displayDate(frontmatter.publishDate, frontmatter.date)}</em>
            </div>
            <h1 className="post-title">{frontmatter.title}</h1>
            <h3 className="description">{frontmatter.subtitle}</h3>
            <div className="mobile-badge">
              {frontmatter.badge && frontmatter.badge !== "badges/blank.png" ? <a href="/about#badges"><img className="badge" src={frontmatter.badge} alt={"A badge"} /></a> : <img className="badge" src="/badges/blank.png" alt={"A placeholder"} />}
            </div>
          </div>

          <Markdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkRehype]}
            components={{
              img: (props) => {
                return <a href={props.src}><Image src={props.src} alt={props.alt} width={1000} height={1000} style={{ width: "85%", height: "auto", }} /></a>
              }
            }}>
            {body}
          </Markdown>

        </article>
        <div id="side">
          <div className="widescreen-badge">
            {frontmatter.badge && frontmatter.badge !== "badges/blank.png" ? <a href="/about#badges"><img className="badge" src={frontmatter.badge} alt={"A badge"} /></a> : <img className="badge" src="/badges/blank.png" alt={"A placeholder"} />}
          </div>

          {related && <div className="see-also">
            <h3>Related Posts:</h3>
            {related.map((post, index) => <RelatedPost key={index} title={post.title} link={post.link} />)}
          </div>}
          {frontmatter.tags && <div className="tags-container">
            <h4>TAGS:</h4>
            <ul id="tag-list">
              {frontmatter.tags && frontmatter.tags.length && frontmatter.tags.sort().map((tag, index) => <Tag key={index} index={index} last={frontmatter.tags.length - 1} tag={tag} />)}
            </ul>
          </div>
          }
        </div>
      </div>
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body, slug } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
      slug
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
