import axios from 'axios'
import style from "../../src/components/blog/blogpost.module.css"
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
    const article = await axios.get(`${process.env.BACKEND_URL}/api/articles?filters[slug][$eq]=${slug}`)
    console.log(article.data.data[0].attributes)
    return {
      props: {
        article:article.data.data[0] .attributes,
        slug,
      }
    }
  }

  const PostPage = ({ article: { title, content} }) => {
    return (
        <div className={style.centerSection}>
          <h1>{title}</h1>
          <p>{content}</p>
      <p>

      </p>
        </div>
    )
  }
  export default PostPage