import {motion} from "framer-motion"

const SvgIconHelper = ({name,icon,pass})=>{

    return( 
    <motion.a whileHover={{ scale: 1.1 }} target="_blank"   href={pass} >
            {icon}
    </motion.a>
    
    )
}

export default SvgIconHelper