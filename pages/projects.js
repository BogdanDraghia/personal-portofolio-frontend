import style from "../src/components/projects/projects.module.css"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import axios from "axios"

const Projects = ({projects,categories,envUrls}) => {
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
          onChangeFilter(data.attributes.categoryName)
        }}
        className={style.tagBoxFilter} style={{ backgroundColor: data.attributes.color, opacity: activeFilter.includes(data.attributes.categoryName) ? 1 : 0.6 }}>
        {data.attributes.categoryName}
      </div>
    )
  }
  const onChangeFilter = (dataElem) => {
    console.log(dataElem)
    console.log(activeFilter)
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
  const filterOpt = projects.filter(project => {
    console.log(project)
    if (activeFilter.length === 0) return project
    if (activeFilter.some(val => project.attributes.categories.data.map((e)=>e.attributes.categoryName).includes(val))){
      return project
    }
  }).filter(project => project.attributes.content.toLowerCase().includes(searchDesc.toLowerCase()))
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
            {categories.map((category, index) => (
              <TagFilter onChangeFilter={onChangeFilter} data={category} dataactivelist={activeFilter} key={index} />
              ))}
            </div>
          <div 
          onClick={()=>{
            handleResetFilter()
          }}
          className={style.resetButtonContainer}>
            <img  width="50px" height="50px" src={"/images/refresh.svg"} alt="refresh" />
          </div> 
          </div>
        </div>
      </div>
      <div className={style.projectItemsContainer}>
      <AnimatePresence>
        {
          filterOpt.length > 0 ? filterOpt.map((data, index) => (
            <ProjectItem data={data} urls={envUrls} key={index} />
            )) : <div style={{ marginTop: 100 }}>Nothing found</div>
          }
      </AnimatePresence>
          </div>
    </div>
  )
}
export default Projects
/// Components
const Tag = ({ data }) => {
  return (
    <div className={style.tagBox} style={{ backgroundColor: data.attributes.color }}>
      {data.attributes.categoryName}
    </div>
  )
}
const ProjectItem = ({ data,urls}) => {
  console.log(urls)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.projectItem}>
      <div className={style.projectItemPhoto}>
        <img src={`${urls.provider}${data.attributes.image}`} width="350" height="350"  alt="profile" />
      </div>
      <div className={style.projectItemInfo}>
        <div className={style.pItemTittle}>
          <h2>{data.attributes.title}</h2>

            {data.attributes.content.length > 100 ? (<p>{data.attributes.content.slice(0,data.attributes.content.slice(0,120).lastIndexOf(" "))+"..."}</p>):(<p>{data.attributes.content}</p>)}
        </div>
        <div className={style.pItemTags}>
          {
            data.attributes.categories.data.map((data, index) => (
              <Tag data={data}
                key={index}
              />
            ))
          }
        </div>
        <div className={style.pItemLinks}>
          <div className={style.buttonProjects}>
          Source
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export async function getStaticProps() {
  const res = await axios.get(`${process.env.BACKEND_URL}/api/projects?populate=%2A`)

  const categories = await axios.get(`${process.env.BACKEND_URL}/api/categories`)

  const envUrls = {back:process.env.BACKEND_URL,provider:process.env.PROVIDER_URL}
  return {
    props: {
      envUrls,
      categories: categories.data.data,
      projects:res.data.data,
    },
  }
}