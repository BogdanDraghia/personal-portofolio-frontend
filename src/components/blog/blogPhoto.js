import style from "../../components/blog/blog.module.css";
import Image from "next/image";
const blogPhotoFullSize = ({ thumbnailUrl, backendUrl }) => {
  return (
    <div className={style.blogphoto}>
      <Image
        width="500"
        height="500"
        sizes='100vw'
        layout={"responsive"} src={thumbnailUrl} placeholder="blur" alt="refresh" />
    </div>
  );
};

export default blogPhotoFullSize;
