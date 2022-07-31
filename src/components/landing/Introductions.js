import style from "./landing.module.css"
import Image from 'next/image'

// ICONS
import Cv from "../../props/icons/cv"
import Github from "../../props/icons/github"
import Instagram from "../../props/icons/instagram"
import Linkedin from "../../props/icons/linkedin"
import Button from "../assets/Button"

import SvgIconHelper from "../../components/assets/SvgIconHelper"
import { motion } from "framer-motion";



const Introduction = () => {

    return (
    <div className={style.Wrap}>
        <div className={style.center}>
            <div className={style.txtSection}>
                    <p>Hello, Im Bogdan</p>
                    <h1>Full-stack developer</h1>
                    <p>I want to share the knowledge that I have acquired so far and I am willing to learn many new things.</p>
                    <div className={style.buttonGroup}>
                        <div
                        
                        >
                            <Button text="My work" fill="var(--Accent)" colortxt="white"/>

                        </div>
                        <Button text="Contact" hover={false} colortxt="var(--Accent)"/>
                    </div>
            </div>
            <div className={style.PhotoSection}>
                <div className={style.subPhotoSection}>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={style.ImageMock} >
                        <Image  src={"/profile.jpg"}  alt="bogdandraghia"  width="100%"  objectFit="cover" height="100%" layout="responsive"/>
                    </motion.div>
                    <div className={style.IconShortcutContainer}>
                            <SvgIconHelper name="cv" icon={<Cv width="60px" height="60px" />} pass={"https://github.com/bogdandraghia"}/>
                            <SvgIconHelper name="github" icon={<Github width="60px" height="60px" />} pass={"https://github.com/bogdandraghia"}/>
                            <SvgIconHelper name="github" icon={<Instagram width="60px" height="60px" />} pass={"https://www.linkedin.com/in/bogdandraghia"}/>
                            <SvgIconHelper name="github" icon={<Linkedin width="60px" height="60px" />} pass={"https://www.linkedin.com/in/bogdandraghia/"}/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}
export default Introduction

