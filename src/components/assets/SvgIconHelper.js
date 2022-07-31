import {motion} from "framer-motion"

const SvgIconHelper = ({name,icon,pass})=>{

    return( 
    <motion.a whileHover={{ scale: 1.1 }} target="_blank" style={{textAlign:"center",margin:"15px"}}  href={pass} >
            {icon}
    </motion.a>
    
    )
}

export default SvgIconHelper