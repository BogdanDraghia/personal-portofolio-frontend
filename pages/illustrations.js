import style from "../src/components/illustrations/illustrations.module.css"
import Image from "next/image"
import {useState} from "react"
import { motion, AnimatePresence } from "framer-motion"

let IllustrationsData = require("../src/data/illustrations-data.json")




const IllustrationItem = (props)=>{
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={style.IllustrationItem} index={props.id} onClick={()=>{props.handleOverlay(props.id)}}>
            <div className={style.helperOpen}>
                <div ></div>
                <div ></div>
                <div ></div>
            </div>
            <Image src={"/images/illustrations/dog.jpg"}   width="300px" height="300px" objectFit="cover" alt="profile" />
        </motion.div>
    )
}

const IllustrationOverlay = (props)=>{

        const [copynotification,setCopyNotification] = useState(false)
    const copyColor = (elem)=>{
        navigator.clipboard.writeText(elem)
        setCopyNotification(true)
        setTimeout(() => setCopyNotification(false), 1500);
        
    }

    const closeOverlay=(e)=>{
        if(e.target.getAttribute('data')){
            props.handleOverlay()
        }
    }
    const hex2rgba = (hex, alpha = 1) => {
        const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
      };
    return (
        <AnimatePresence>
        {props.render && (
            <motion.div
            initial={{ opacity: 0, zIndex: 3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${style.IllustrationOverlay} close`}  style={{backgroundColor:hex2rgba(props.data.dominantColor,0.8)}} data="close" onClick={(e)=>{closeOverlay(e)}}>
                <div className={style.overlayContent}>
                    <div className={style.closeHelperContainer} data="close">
                        <div className={style.closeHelperCross}>
                            <div style={{transform:"rotate(45deg)"}}></div>
                            <div style={{transform:"rotate(-45deg)"}}></div>
                        </div>
                    </div>
                    <div className={style.imageOverlay}>
                        <AnimatePresence>
                            {
                            copynotification && (
                                <motion.div 
                                initial={{opacity:0}}
                                animate={{y:-10,opacity:1}}
                                exit={{opacity:0}}
                                transition={{
                                    duration: 1,
                                    type: "spring",
                                  }}
                                className={style.notificationContainer}>
                                    <div className={style.notification}>
                                    Color copied to the clipboard !
                                    </div>
                                </motion.div>
                                )
                            }
                           
                        </AnimatePresence>
                        <Image src={"/images/illustrations/dog.jpg"}   width="400px" height="400px" objectFit="cover" alt="profile" />
                    </div>
                    <div className={style.palette}>
                        {props.data.pallete.map((item,index)=>(
                            <motion.div 

                            className={style.paletteBox}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={()=>{
                                copyColor(item)
                            }}
                            key={index}>
                                <div className={style.colorBox} style={{backgroundColor:item}} ></div>
                                <div className={style.colorCode}>{item}</div>
                            </motion.div>
                        ))
                        }
                    </div>
                </div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}




const Illustrations = ({illustrations})=>{
    const [isOpen, setIsOpen] = useState(false)
    const [currentItemData, setCurrentItemData] = useState(undefined)
    const handleOverlay= (index) =>{
        setCurrentItemData(illustrations[index-1])
        setIsOpen(!isOpen)
    }
    return( 
        <div className={style.center}>
            <div className={style.IllustrationsGrid}>
                {illustrations.map((data,index)=>(
                    <IllustrationItem 
                    handleOverlay={handleOverlay} id={data.id} key={index}>
                        {data.name}
                    </IllustrationItem>
                ))}
            </div>
            <IllustrationOverlay render={isOpen} data={currentItemData} handleOverlay={handleOverlay}/>
        </div>
    )
}

export async function getStaticProps() {
    const res = IllustrationsData
    return {
      props: {
        illustrations:res,
      },
    }
  }

  
export default Illustrations
