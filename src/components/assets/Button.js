import {motion} from "framer-motion"
import style from "./assets.module.css"

const Button = ({text,fill,colortxt,hover=true})=>{
    return(
        <motion.div whileHover={hover ?{ scale: 1.1 }:""} className={style.button} style={{backgroundColor:fill, color:colortxt}}>
            {text}
        </motion.div>
    )
}

export default Button