
import Image from "next/image"
import style from "../../components/blog/blog.module.css"
const blogPhotoFullSize = ({thumbnailUrl,backendUrl}) =>{

    return (
        <div className={style.blogphoto}>

            <Image priority objectFit="cover" width={1000} height={320}  layout={"responsive"}  src={thumbnailUrl} alt="refresh" />
        </div>
    )
}

export default blogPhotoFullSize