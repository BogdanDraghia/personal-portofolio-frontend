import axios from 'axios'
import style from "../../src/components/blog/blogpost.module.css"
import { serialize } from 'next-mdx-remote/serialize'


import BlogPage from '../../src/components/blog/blogPostPage'
export const getStaticPaths = async () => {

    const articles = await axios.get(`${process.env.BACKEND_URL}/api/articles`)

    const paths = articles.data.data.map(article => ({
      params: {
        slug:article.attributes.slug.toString()
      }
    }))
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async ({ params: { slug } }) => {
    const backendUrl = process.env.BACKEND_URL
    const article = await axios.get(`${process.env.BACKEND_URL}/api/articles?filters[slug][$eq]=${slug}`)
    console.log(article.data.data[0].attributes)
    const contentMDX = await serialize(article.data.data[0].attributes.content)
    return {
      props: {
        article:article.data.data[0].attributes,
        contentMDX,
        backendUrl,
        slug,
      }
    }
  }

  const PostPage = ({ backendUrl, article: { title, content,thumbnailUrl} }) => {
    console.log(backendUrl)
    return (
        <div className={style.centerSection}>
          <BlogPage title={title} backendUrl={backendUrl} content={content} thumbnailUrl={thumbnailUrl}/>
        </div>
    )
  }
  export default PostPage