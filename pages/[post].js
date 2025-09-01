import { useEffect, useState } from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import { postSlugs, postForSlug } from "../posts";
import Layout from "../components/Layout";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import Error500 from "./500";

function Post({ frontmatter, body }) {
  if (!frontmatter || !Object.keys(frontmatter).length) return <Error500 />

  const [seeMore, setSeeMore] = useState(false)

  useEffect(() => {
    const readMoreElements = document.querySelector(".read-more");
    console.log(seeMore)
    if (seeMore) readMoreElements.style.display = "block";
    else readMoreElements.style.display = "none";
  }, [seeMore])

  return (
    <Layout pageTitle={frontmatter.display ? `${frontmatter.display} - Sportventures` : `${frontmatter.title} - Sportventures`}>
      <div>
        <article>
          <h1 className="title">{frontmatter.title}</h1>
          <h2 className="description">{frontmatter.subtitle}</h2>
          <em><b>{frontmatter.date && new Date(frontmatter.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</b></em>
          <Markdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkRehype]}
            components={{
              img: (props) => {
                return <Image src={props.src} alt={props.alt} width={1000} height={1000} style={{ width: "75%", height: "auto", }} />
              }
            }}>
            {body}
          </Markdown>
          {!seeMore && <p id="read-more-tag" onClick={() => setSeeMore(true)}>Read more</p>}
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
