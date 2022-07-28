
import Image from "next/image"

const blogPhotoFullSize = ({thumbnailUrl,backendUrl}) =>{

    return (
        <div style={{overflow:"none",margin:"10px"}}>
            <Image objectFit="cover" width={1000} borderRadius={10} height={320}  src={backendUrl+thumbnailUrl} alt="refresh" />
        </div>
    )
}

export default blogPhotoFullSize