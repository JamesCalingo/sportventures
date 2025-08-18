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

  return (
    <Layout pageTitle={`${frontmatter.display} - Sportventures`}>
      <div>
        <article>
          <h1 className="title">{frontmatter.title}</h1>
          <h2 className="description">{frontmatter.description}</h2>
          <em><b>{frontmatter.date && new Date(frontmatter.date).toLocaleDateString()}</b></em>
          <Markdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkRehype]}
            components={{
              img: (props) => {
                console.log(props);
              return  <Image src={props.src} alt={props.alt} width={4000} height={1000} style={{width: "100%", height: "auto"}}/>
              }
            }}>
          {body}
        </Markdown>
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
