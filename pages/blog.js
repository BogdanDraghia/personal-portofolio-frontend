import Layout from "../src/components/layout/Layout"
import fs from "fs"
import path from "path"
import matter from 'gray-matter';
import Image from "next/image"
const BlogItem = ({description,urlPhoto})=>{
    return(
        <div>
            <Image src={"/profile.jpg"} width="200px" height="200px" objectFit="cover" alt="profile"/>
            <div>
                {description}
            </div>
        </div>
    )
}

const Blog = ({posts})=>{
    return(
        <div>   
            {posts.map((post,index)=>(
                <div key={index}>
                    <BlogItem description={post.frontMatter.description}/>
                    {post.frontMatter.title}
                </div>
            ))}   
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