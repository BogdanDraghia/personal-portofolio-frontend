
import style from "../src/components/projects/projects.module.css"
import Search from "../src/props/images/search"
import {motion} from "framer-motion"
import { useEffect, useState, useRef } from "react"
const PlayGround = () =>{
  const variants = {
    open: { x: 0 ,width:150},
    closed: {x:-20, width:0 },
}
const changeSearchButton = (value)=>{
  console.log(value)  
  if(value === ""){
    console.log("entered")
    setStateSearch(false)
  }
  if(value === "#onClickOnly"){
    setStateSearch(!stateSearch)
  }
  if(value != "#onclickOnly"){
    setSearchDesc(value)
  }
}


useEffect(() => {
  const clickedOut = (e) => {
      if (renderDropdown && ref.current && !ref.current.contains(e.target)) {
          setRenderDropdown(false)
      }
  }
  document.addEventListener("mousedown", clickedOut)
  return () => {
      document.removeEventListener("mousedown", clickedOut)
  }

}, [renderDropdown])

const [stateSearch,setStateSearch] = useState(false)
const [searchDesc,setSearchDesc] = useState("")
  return (
      <motion.div 
      onClick={() => changeSearchButton("#onClickOnly")}
      className={style.searchInputContainer}>
        <Search className = {style.searchTest}/>
        <motion.div
          animate={stateSearch ? "open" : "closed"}
          variants={variants}
          initial = {false}
        >
        <motion.input 
          className={style.searchInput}
          onChange={elem => changeSearchButton(elem.target.value)} value={searchDesc}
          type="text" 
          />
        </motion.div>
      </motion.div>
  )
}

export default PlayGround 