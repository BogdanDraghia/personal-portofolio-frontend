import Layout from "../src/components/layout/Layout"
import fs from "fs"
import path from "path"
import matter from 'gray-matter';
import Image from "next/image"
import style from "../src/components/blog/blog.module.css"
import Link from "next/link"
const BlogItemLast = ({dataPost})=>{
    return(
        <Link href={'/blog/' + dataPost.slug} passHref>
            <a className={style.lastPostSection}>
                <div className={style.blogItemLastImage}>
                    <Image src={dataPost.frontMatter.thumbnailUrl} alt="mockphoto" width="400px" height="300px" objectFit="cover"/>    
                </div> 
                <div className={style.blogItemLastText}>
                    <h1>{dataPost.frontMatter.title}</h1>
                    <p>{dataPost.frontMatter.description}</p>
                    <div className={style.button}>Read more</div>     
                </div>
            </a>
        </Link>
    )
}
const BlogItem = ({dataPost})=>{
    return(
        <Link href={'/blog/' + dataPost.slug}  passHref>
            <a className={style.blogItem}>
            <div className={style.blogItemImage}>
                <Image src={dataPost.frontMatter.thumbnailUrl} width="400px" height="300px" objectFit="cover" alt="profile"/>
            </div>
            <div className={style.blogItemText}>
                <h1>{dataPost.frontMatter.title}</h1>
                <p>{dataPost.frontMatter.description}</p>
            </div>
            </a>
        </Link>
    )
}

const Blog = ({posts})=>{
    return(
        <div className={style.wrapBlog}>   
            <div className={style.centerSection}>
                <BlogItemLast dataPost={posts[0]}/>
            <div className={style.postSection}>
                {
                    posts.slice(1).map((post,index)=>(
                        <BlogItem dataPost={post} key={index}/>
                    ))
                }

            </div>
            </div>
        </div>
    )
}
export default Blog

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const { data: frontMatter } = matter(markdownWithMeta)
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })
    return {
      props: {
        posts
      }
    }
  }

<<<<<<< HEAD
=======
// {/* 
// {posts.map((post,index)=>(
//                 <div key={index}>
//                     <BlogItemLast description={post.frontMatter.description}/>
//                     {post.frontMatter.title}
//                 </div>
//             ))}   
//         </div> 
        
        
//         */
    
    
//     }
>>>>>>> ccd4ae7ace1cb8b0e05241fc237367e7065fb9ec
