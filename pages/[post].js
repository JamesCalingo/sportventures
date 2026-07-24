import Image from "next/image";
import Markdown from "react-markdown";
import { postSlugs, postForSlug } from "../posts";
import Layout from "../components/Layout";
import Tag from "../components/Tag";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import Error500 from "./500";
import { displayDate } from "../utils/utils.js";

function Post({ frontmatter, body }) {
  if (!frontmatter || !Object.keys(frontmatter).length) return <Error500 />

  return (
    <Layout pageTitle={frontmatter.display ? `${frontmatter.display} - Sportventures` : `${frontmatter.title} - Sportventures`}>
      <div>
        <article>
          <div className="post-header">
            <div className="post-date">
            <em>{displayDate(frontmatter.publishDate, frontmatter.date)}</em>
          {frontmatter.badge && <a href="/about#badges"><img className="badge" src={frontmatter.badge} alt={"A badge"} /></a>}
            </div>
            <h1 className="post-title">{frontmatter.title}</h1>
            <h3 className="description">{frontmatter.subtitle}</h3>
          </div>

          <Markdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkRehype]}
            components={{
              img: (props) => {
                return <a href={props.src}><Image src={props.src} alt={props.alt} width={1000} height={1000} style={{ width: "75%", height: "auto", }} /></a>
              }
            }}>
            {body}
          </Markdown>
          {frontmatter.tags && <div className="tags-container">
            <p>TAGS:</p>
            {frontmatter.tags && frontmatter.tags.sort().map((tag, index) => <Tag key={index} index={index} last={frontmatter.tags.length - 1} tag={tag} />)}
          </div>
          }
        </article>
      </div>
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
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
