import style from "../src/components/projects/projects.module.css"
import Image from "next/image"

let tagColors={
    "gatsby":"#4fb6e1"
}

const Tag = (props)=>{
    console.log(tagColors)
    return(
        <div className={style.tagBox} style={{backgroundColor:tagColors[props.tag]}}>
            test
        </div>
    )
}

const ProjectItem = ()=>{
    return(
            <div className={style.projectItem}>
                <div className={style.projectItemPhoto}>
                <Image src="/images/blog/3.png" width="500px" height="500px" objectFit="cover" alt="profile"/>
                </div>
                <div className={style.projectItemInfo}>
                    <div className={style.pItemTittle}>
                        <h2>Title project</h2>
                    </div>
                    <div className={style.pItemDescription}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className={style.pItemTags}>
                        <Tag tag={"gatsby"} />
                        <Tag tag={"gatsby"} />
                    </div>
                    <div className={style.pItemLinks}>
                        test
                    </div>
                </div>
            </div>

    )
}


const Projects = ()=>{
    return(
        <div className={style.projectContainer}>
            <div className={style.projectContainer}>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </div>
        </div>
    )
}
export default Projects