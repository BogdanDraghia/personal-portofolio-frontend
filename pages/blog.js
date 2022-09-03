import style from "../src/components/blog/blog.module.css"
import Link from "next/link"
import {motion} from "framer-motion"
import axios from "axios"

const BlogHighLight = ({dataPost,highlight=true})=>{
    console.log(dataPost)
    return(
        <Link href={'/blog/' + dataPost.attributes.slug} passHref>
            <a className={style.lastPostSection} style= {!highlight?{boxShadow:"none"}:{}}>
                <div className={style.blogItemLastImage}>
                    <img src={dataPost.attributes.thumbnailUrl} alt="mockphoto" width="400px" height="300px" />    
                </div> 
                <div className={style.blogItemLastText}>
                    <h2>{dataPost.attributes.title}</h2>
                    {dataPost.attributes.content.length > 20 ? (<div>{dataPost.attributes.content.slice(0,dataPost.attributes.content.slice(0,120).lastIndexOf(" "))+"..."}</div>):(<div>{dataPost.attributes.content}</div>)}
                    
                    <button className={style.blogbutton}>Read more</button>
                </div>
            </a>
        </Link>
    )
}

const BlogItem = ({dataPost})=>{
    return(
        <Link href={'/blog/' + dataPost.attributes.slug}  passHref>
            <motion.a 
            whileHover={{scale:1.02}}
            className={style.blogItem}>
            <div className={style.blogItemImage}>
                <img src={dataPost.attributes.thumbnailUrl} width="400px" height="300px"  alt="profile"/>
            </div>
            <div className={style.blogItemText}>
                <h1>{dataPost.attributes.title}</h1>
                {dataPost.attributes.content.length > 100 ? (<div>{dataPost.attributes.content.slice(0,dataPost.attributes.content.slice(0,130).lastIndexOf(" "))+"..."}</div>):(<div>{dataPost.attributes.content}</div>)}
            </div>
            </motion.a>
        </Link>
    )
}

const BlogContainer = ({posts,backendUrl})=>{
    return(
        <div className={style.wrapBlog}>   
            <div className={style.centerSection}>
                <div className={style.subContentContainer}>

                <BlogHighLight dataPost={posts[0]} backendUrl={backendUrl} highlight={true} />
                </div>
                <div className={style.subContentContainer}>
                <div className={style.postSection}>
                    {
                        posts.slice(1).map((post,index)=>(
                            <BlogHighLight dataPost={post} backendUrl={backendUrl} highlight={false} key={index}/>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContainer

export const getStaticProps = async () => {
    const backendUrl = process.env.BACKEND_URL
    const res = await axios.get(process.env.BACKEND_URL+"/api/articles")
    console.log(res.data.data)
    const posts = res.data.data
    return {
      props: {
        backendUrl,
        posts
      }
    }
  }