import style from "./landing.module.css"
import Image from 'next/image'

// ICONS
import Cv from "../../props/icons/cv"
import Github from "../../props/icons/github"
import Instagram from "../../props/icons/instagram"
import Linkedin from "../../props/icons/linkedin"
import Button from "../assets/Button"
import { motion } from "framer-motion";
const IconShortcut = ({name,icon,pass})=>{

    return( 
    <motion.a whileHover={{ scale: 1.1 }} className={style.ShortcutItem} href={pass} >
            {icon}
    </motion.a>
    
    )
}


const Introduction = () => {

    const linkGithub = "https://www.google.com/"

    return (
    <div className={style.Wrap}>
        <div className={style.center}>
            <div className={style.txtSection}>
                    <p>Hello, Im Bogdan</p>
                    <h1>Full-stack developer</h1>
                    <p>I want to share the knowledge that I have acquired so far and I am willing to learn many new things.</p>
                    <div className={style.buttonGroup}>
                        <Button text="My work" fill="var(--Accent)" colortxt="white"/>
                        <Button text="Contact" hover={false} colortxt="var(--Accent)"/>
                    </div>
            </div>
            <div className={style.PhotoSection}>
                <div className={style.subPhotoSection}>
                    <div className={style.ImageMock} >
                        <Image  src={"/profile.jpg"}  alt="bogdandraghia"  width="100%"  objectFit="cover" height="100%" layout="responsive"/>
                    </div>
                    <div className={style.IconShortcutContainer}>
                            <IconShortcut name="cv" icon={<Cv width="60px" height="60px" />} pass={linkGithub}/>
                            <IconShortcut name="github" icon={<Github width="60px" height="60px" />} pass={linkGithub}/>
                            <IconShortcut name="github" icon={<Instagram width="60px" height="60px" />} pass={linkGithub}/>
                            <IconShortcut name="github" icon={<Linkedin width="60px" height="60px" />} pass={linkGithub}/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}
export default Introduction

