import Image from "next/image";
import Markdown from "react-markdown";
import { postSlugs, postForSlug } from "../posts";
import Layout from "../components/Layout";
import Badge from "../components/Badge";
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
            <h3><em>{displayDate(frontmatter.publishDate, frontmatter.date)}</em></h3>
            <h1 className="post-title">{frontmatter.title}</h1>
            <h3 className="description">{frontmatter.subtitle}</h3>
            <div className="mobile-badge">
              {frontmatter.badge ? <Badge badge={frontmatter.badge} /> : <div style={{ height: "25px" }} />}
              <h3><em>{frontmatter.author}</em></h3>
              <span className="tag" id="tag-list">
              {frontmatter.tags && !!frontmatter.tags.length && <span className="tag" id="tag-list">
              Tags:<br />{frontmatter.tags.sort().map((tag, index) => <Tag key={index} index={index} last={frontmatter.tags.length - 1} tag={tag} />)}
            </span>}
              </span>

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
            {<Badge badge={frontmatter.badge} />}
            <h3><em>{frontmatter.author}</em></h3>
            {frontmatter.tags && !!frontmatter.tags.length && <span className="tag" id="tag-list">
              Tags:<br />{frontmatter.tags.sort().map((tag, index) => <Tag key={index} index={index} last={frontmatter.tags.length - 1} tag={tag} />)}
            </span>}
          </div>
          {related && <div className="see-also">
            <h3>Related Posts:</h3>
            {related.map((post, index) => <RelatedPost key={index} title={post.title} link={post.link} />)}
          </div>}

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
