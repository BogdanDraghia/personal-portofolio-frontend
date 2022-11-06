import style from "../../components/blog/blog.module.css";
const blogPhotoFullSize = ({ thumbnailUrl, backendUrl }) => {
  return (
    <div className={style.blogphoto}>
      <img priority layout={"responsive"} src={thumbnailUrl} alt="refresh" />
    </div>
  );
};

export default blogPhotoFullSize;
