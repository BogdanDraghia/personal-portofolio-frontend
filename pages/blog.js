import style from "../src/components/blog/blog.module.css";
import Link from "next/link";
import axios from "axios";

const BlogItem = (props) => {
  return (
    <Link href={"/blog/" + props.attributes.slug} passHref>
      <div className={style.blogItem}>
        <div className={style.blogItemContent}>
          <div className={style.blogItemImage}>
            <img
              src={props.attributes.thumbnailUrl}
              width="400px"
              height="300px"
              alt="imageblog"
            />
          </div>
          <h3>{props.attributes.title}</h3>
          {props.attributes.content.length > 100 ? (
            <div>
              {props.attributes.content.slice(
                0,
                props.attributes.content.slice(0, 130).lastIndexOf(" ")
              ) + "..."}
            </div>
          ) : (
            <div>{props.attributes.content}</div>
          )}
        </div>
      </div>
    </Link>
  );
};

const BlogContainer = ({ posts }) => {
  return (
    <div className={style.wrapBlog}>
      <div className={style.centerSection}>
        <div className={style.subContentContainer}>
          <div className={style.postSection}>
            {posts.slice(1).map((post, index) => (
              <BlogItem {...post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;

export const getStaticProps = async () => {
  const res = await axios.get(process.env.BACKEND_URL + "/api/articles");
  const posts = res.data.data;
  return {
    props: {
      posts,
    },
  };
};
