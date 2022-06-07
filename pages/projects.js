import style from "../src/components/projects/projects.module.css"
import Image from "next/image"

import Button from "../src/components/assets/Button"
import RefreshSvg from "../src/props/images/refresh.svg"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

let projectData = require("../src/data/projects-data.json")
let tagList = projectData[0].tagsList



const Projects = () => {
  const [activeFilter, setActiveFilter] = useState([])
  const [searchDesc, setSearchDesc] = useState("")
  const handleResetFilter = () => {
    setActiveFilter([])
    setSearchDesc("")
  }
  const TagFilter = ({ data, onChangeFilter }) => {
    return (
      <div
        onClick={() => {
          onChangeFilter(data)
          console.log(activeFilter)
        }}
        className={style.tagBoxFilter} style={{ backgroundColor: tagList[data]["color"], opacity: activeFilter.includes(data) ? 1 : 0.6 }}>
        {data}
      </div>
    )
  }
  const onChangeFilter = (dataElem) => {
    const index = activeFilter.findIndex((name) => name === dataElem);
    if (index !== -1) {
      setActiveFilter([
        ...activeFilter.slice(0, index),
        ...activeFilter.slice(index + 1)
      ]);
    } else {
      setActiveFilter(prevState => [...prevState, dataElem])
    }
  }
  const filterOpt = projectData.slice(1).filter(project => {
    if (activeFilter.length === 0) return project
    if (activeFilter.some(val => project.tags.includes(val)))
      return project
  }).filter(project => project.description.toLowerCase().includes(searchDesc.toLowerCase()))
  const handleSearchChange = ({ target }) => setSearchDesc(target.value);
  return (
    <div className={style.projectContainer}>
      <h1>Projects</h1>
      <div className={style.filterSectionContainer}>
        <div className={style.filterSection}>
          <div className={style.FilterSearchSection}>

            <input
              className={style.searchInputContainerTmp}
              onChange={handleSearchChange} value={searchDesc} type="text" />
          </div>

          
          <div className={style.tagContainer}>
            <div className={style.subTagContainer}>
            {Object.keys(tagList).map((name, index) => (
              <TagFilter onChangeFilter={onChangeFilter} data={name} dataactivelist={activeFilter} key={index} />
              ))}
            </div>
          <div 
          onClick={()=>{
            handleResetFilter()
          }}
          
          className={style.resetButtonContainer}>
            <Image objectFit="cover" width="50px" height="50px" src={RefreshSvg} alt="refresh" />
          </div> 
          </div>
        </div>
      </div>
      <AnimatePresence>
        {
          filterOpt.length > 0 ? filterOpt.map((data, index) => (
            <ProjectItem data={data} key={index} />
          )) : <div style={{ marginTop: 100 }}>Nothing found</div>
        }
      </AnimatePresence>
    </div>
  )
}
export default Projects

/// Components
const Tag = ({ data }) => {
  return (
    <div className={style.tagBox} style={{ backgroundColor: tagList[data]["color"] }}>
      {data}
    </div>
  )
}

const ProjectItem = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.projectItem}>
      <div className={style.projectItemPhoto}>
        <Image src="/images/blog/3.png" className={style.projectItemPhotoClass} layout="fill"  alt="profile" />
      </div>
      <div className={style.projectItemInfo}>
        <div className={style.pItemTittle}>
          <h2>{data.name}</h2>
        </div>
        <div className={style.pItemDescription}>
          <p>
            {data.description.length > 100 ? (<div>{data.description.slice(0,data.description.lastIndexOf(" "))+"..."}</div>):(<div>{data.description.length}</div>)}
          </p>
        </div>
        <div className={style.pItemTags}>
          {
            data.tags.map((tags, index) => (
              <Tag data={tags}
                key={index}
              />
            ))
          }
        </div>
        <div className={style.pItemLinks}>
          <Button text="Source" fill="#f2f2f2"  colortxt={"black"} />
          <Button text="Demo" fill="#f2f2f2" colortxt={"black"} />
        </div>
      </div>
    </motion.div>

  )
}

