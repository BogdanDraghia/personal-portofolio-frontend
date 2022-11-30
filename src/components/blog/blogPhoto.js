import style from "../../components/blog/blog.module.css";
import Image from "next/image";
const blogPhotoFullSize = ({ thumbnailUrl, backendUrl }) => {
  return (
    <div className={style.blogPhoto}>
      <Image
        className={style.blogPhotoImage}
        layout={"fill"} src={thumbnailUrl} placeholder="blur" alt="refresh" />
    </div>
  );
};

export default blogPhotoFullSize;
