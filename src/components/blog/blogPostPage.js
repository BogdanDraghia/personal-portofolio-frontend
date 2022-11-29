import BlogPhotoFullSize from "./blogPhoto";
import style from "./blogpost.module.css";

const blogPage = ({ backendUrl, title, content, thumbnailUrl, children }) => {
  return (
    <div className={style.containerBlogPost}>
      <div className={style.imageBlogPost}>
        <BlogPhotoFullSize
          thumbnailUrl={thumbnailUrl}
          backendUrl={backendUrl}
        />
      </div>
      <div className={style.detailsBlogPost}>
        {/* <div className={style.infoBlogPost}>
          <p>Lorem ipsum,10 minute read</p>
        </div> */}
      </div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default blogPage;
