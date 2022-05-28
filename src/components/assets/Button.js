import {motion} from "framer-motion"
import style from "./assets.module.css"

const Button = ({text,fill,colortxt,hover=true})=>{
    return(
        <motion.div whileTap={hover ?{ scale: 0.99 }:""} whileHover={hover ?{ scale: 1.05 }:""} className={style.button} style={{...style},{backgroundColor:fill, color:colortxt}}>
            {text}
        </motion.div>
    )
}

export default Button