import axios from "axios";
import style from "../../src/components/blog/blogpost.module.css";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from 'next-mdx-remote'
import BlogPage from "../../src/components/blog/blogPostPage";
import rehypeHighlight from "rehype-highlight"
import { CodeBlock } from "../../src/components/blog/components";
// import '../../src/components/blog/components/github-highlight.css'

// import "highlight.js/styles/github-dark.css";
export const getStaticPaths = async () => {
  const articles = await axios.get(`${process.env.BACKEND_URL}/api/articles`);

  const paths = articles.data.data.map((article) => ({
    params: {
      slug: article.attributes.slug.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const backendUrl = process.env.BACKEND_URL;
  const article = await axios.get(
    `${process.env.BACKEND_URL}/api/articles?filters[slug][$eq]=${slug}`
  );
  const contentMDX = await serialize(article.data.data[0].attributes.content, { mdxOptions: { rehypePlugins: [rehypeHighlight] } });
  return {
    props: {
      article: article.data.data[0].attributes,
      contentMDX,
      backendUrl,
      slug,
    },
  };
};

const PostPage = ({
  backendUrl,
  contentMDX,
  article: { title, thumbnailUrl },
}) => {
  return (
    <div className={style.centerSection}>
      <BlogPage
        title={title}
        backendUrl={backendUrl}
        thumbnailUrl={thumbnailUrl}
      >
        <MDXRemote {...contentMDX} components={{ blockquote: CodeBlock }} />
      </BlogPage>
    </div>
  );
};
export default PostPage;


