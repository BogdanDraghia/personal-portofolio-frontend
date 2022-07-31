
import Image from "next/image"

const blogPhotoFullSize = ({thumbnailUrl,backendUrl}) =>{

    return (
            <Image priority objectFit="cover" width={1000} height={320}  layout={"responsive"}  src={thumbnailUrl} alt="refresh" />
    )
}

export default blogPhotoFullSize