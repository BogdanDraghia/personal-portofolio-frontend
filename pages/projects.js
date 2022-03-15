import style from "../src/components/projects/projects.module.css"
import Image from "next/image"
import Button from "../src/components/assets/Button"
import { useState } from "react"
import {motion,AnimatePresence} from "framer-motion"
let projectData = require("../src/data/projects-data.json")

let tagList=projectData[0].tagsList




const Projects = ()=>{
    const [activeFilter,setActiveFilter] = useState([])
    const [searchDesc,setSearchDesc] = useState("")

    const onChangeFilter=(dataElem)=>{
        console.log(dataElem)
        const index = activeFilter.findIndex((name) => name === dataElem);
        console.log(index)
        if (index !== -1) {
            setActiveFilter([
            ...activeFilter.slice(0, index),
            ...activeFilter.slice(index + 1)
          ]);
        }else{
            setActiveFilter(prevState => [...prevState, dataElem] )
        }
        console.log(activeFilter)
    }
    const filterOpt = projectData.slice(1).filter(project => {
                        
        if(activeFilter.length ===0 ) return project
        if(activeFilter.some(val=>project.tags.includes(val)))
        return project
    }).filter(project=>project.description.toLowerCase().includes(searchDesc.toLowerCase()))
    const handleSearchChange = ({ target }) => setSearchDesc(target.value);
    return(
        
            <div className={style.projectContainer}>
                <h1>Projects</h1>
            <div className={style.filterSectionContainer}>
                
            <div className={style.filterSection}>
            <input onChange={handleSearchChange} value={searchDesc} type="text" />
            {Object.keys(tagList).map((name,index)=>(
                <TagFilter onChangeFilter={onChangeFilter} data={name} key={index}/>
            ))}
            </div>
        </div>
                <AnimatePresence>


                {
                    filterOpt.length> 0 ? filterOpt.map((data,index)=>(
                        <ProjectItem data={data} key={index}/>
                        )) : <div>Noting found</div>
                    }
                </AnimatePresence>
            </div>
    )
}
export default Projects

//https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes
const Tag = ({data})=>{
    return(
        <div className={style.tagBox} style={{backgroundColor:tagList[data]}}>
            {data}
        </div>
    )
}
const TagFilter = ({data,onChangeFilter})=>{
    const [check,setChecked] = useState(false)
    return(
        <div 
            onClick={()=>{
                setChecked(!check) 
                console.log(check)
                onChangeFilter(data)
            }}
        className={style.tagBoxFilter} style={{backgroundColor:tagList[data],opacity:check ? 1:0.6}}>
            {data}
        </div>
    )
}



const ProjectItem = ({data})=>{
    return(
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.projectItem}>
                <div className={style.projectItemPhoto}>
                <Image src="/images/blog/3.png" width="500px" height="500px" objectFit="cover" alt="profile"/>
                </div>
                <div className={style.projectItemInfo}>
                    <div className={style.pItemTittle}>
                        <h2>{data.name}</h2>
                    </div>
                    <div className={style.pItemDescription}>
                        <p>
                        {data.description}
                        </p>
                    </div>
                    <div className={style.pItemTags}>
                        {
                            data.tags.map((tags,index)=>(
                                <Tag data={tags} key={index}/>
                            ))
                        }
                    </div>
                    <div className={style.pItemLinks}>
                    <Button text="Source" fill="#f2f2f2" colortxt={"black"}/>
                    <Button text="Demo" fill="#f2f2f2" colortxt={"black"}/>
                    </div>
                </div>
            </motion.div>

    )
}


// const ProjectItem = ()=>{
//     return(
//             <div className={style.projectItem}>
//                 <div className={style.projectItemPhoto}>
//                 <Image src="/images/blog/3.png" width="500px" height="500px" objectFit="cover" alt="profile"/>
//                 </div>
//                 <div className={style.projectItemInfo}>
//                     <div className={style.pItemTittle}>
//                         <h2>Title project</h2>
//                     </div>
//                     <div className={style.pItemDescription}>
//                         <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                         </p>
//                     </div>
//                     <div className={style.pItemTags}>
//                         <Tag tag={"gatsby"} />
//                         <Tag tag={"gatsby"} />
//                     </div>
//                     <div className={style.pItemLinks}>
//                     <Button text="Source" fill="#f2f2f2" colortxt={"black"}/>
//                     <Button text="Demo" fill="#f2f2f2" colortxt={"black"}/>
//                     </div>
//                 </div>
//             </div>

//     )
// }


// const Projects = ()=>{
//     return(
//         <div className={style.projectContainer}>
//             <div>
//                 Project filter
//             </div>
//             <div className={style.projectContainer}>
                
//                 <ProjectItem/>
//                 <ProjectItem/>
//                 <ProjectItem/>
//             </div>
//         </div>
//     )
// }
// export default Projects