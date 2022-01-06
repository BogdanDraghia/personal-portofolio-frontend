import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Moon from "../../props/images/moon"
import Logo from "../../props/images/logo"
import Link from 'next/link'
import style from "./layout.module.css"
const Header = () => {
    const ref = useRef()
    const variants = {
        darkMotion: { x: 0 },
        lightMotion: { x: 22 },
    }
    const variantsDropDown1 = {
        up: { rotate: -40 },
        down: { rotate: 0 }
    }
    const variantsDropDown2 = {
        up: { rotate: 40 },
        down: { rotate: 0 }
    }
    const [changeTheme, setChangeTheme] = useState(false)
    const [renderDropdown, setRenderDropdown] = useState(false)
    const [stateBurger, setStateBurger] = useState(false)


    // FUNCTIONS
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
    useEffect(() => {
        let savedTheme = window.localStorage.getItem("theme")
        if (savedTheme === 'darkmode') {
            document.body.classList.add('darkmode')
            setChangeTheme(false)
        } else {
            document.body.classList.add('lightmode')
            setChangeTheme(true)
        }
    }, [])
    const ToggleButtonDropdown = () => {
        setRenderDropdown(!renderDropdown)
    }
    const toggleButtonBurger = () => {
        setStateBurger(!stateBurger)
    }
    const changethemeHandler = () => {
        console.log("change")
        if (changeTheme) {
            document.body.classList.remove("lightmode")
            document.body.classList.add("darkmode")
            window.localStorage.setItem("theme", "darkmode");
        } else {
            document.body.classList.remove("darkmode")
            document.body.classList.add("lightmode")
            window.localStorage.setItem("theme", "lightmode")
        }
        setChangeTheme(!changeTheme)
    }

    return (
        <nav className={style.center}>
            <div className={style.navbar}>
                <a className={style.logo}>
                    <Logo />
                </a>
                <div className={stateBurger ? `${style.openNavMenu} ${style.navMenuWrap}` : `${style.closedNavMenu} ${style.navMenuWrap}`}>
                    <ul className={`${style.navMenu} ${stateBurger ? style.color1 : style.color2}`}>
                        <li
                            className={style.listItem}
                            ref={ref}
                            onClick={() => ToggleButtonDropdown()}>

                            <div className={style.dropdownBlock}
                            >
                                <div>My work</div>
                                <div className={style.dropdownArrow}>
                                    <motion.div
                                        animate={renderDropdown ? "down" : "up"}
                                        variants={variantsDropDown2}
                                        className={style.dropdownArrowLine1}></motion.div>
                                    <motion.div
                                        animate={renderDropdown ? "down" : "up"}
                                        variants={variantsDropDown1}
                                        className={style.dropdownArrowLine2}></motion.div>
                                </div>
                            </div>
                            {renderDropdown && (
                                <ul className={style.dropdownItems}>
                                    <li>
                                        Websites and apps
                                    </li>
                                    <li>
                                        Illustrations
                                    </li>
                                    <li>
                                        Others
                                    </li>
                                </ul>
                            )}

                        </li>
                        <li>
                            <Link href="/blog/test" passHref>
                                <div className={style.menuText}>Blog</div>
                            </Link></li>
                        <li className={"accent"}>Contact</li>
                        <li className={style.changethemeli}>
                            <div className={style.changeTheme} onClick={() => changethemeHandler()}>
                                <motion.div
                                    initial={false}
                                    animate={changeTheme ? "darkMotion" : "lightMotion"}
                                    variants={variants}
                                    className={style.circlechange}
                                >
                                    <Moon
                                        className={style.MoonVar}
                                        style={{ height: "20px", rotate: "40deg" }}
                                    />
                                </motion.div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${style.burgerMenu} ${style.transitionSmooth} `}
                    onClick={() => toggleButtonBurger()}>
                    <div className={!stateBurger ? style.burgerLine : `${style.burgerLine} ${style.bgLineAnimate1}`}></div>
                    <div className={!stateBurger ? style.burgerLine : `${style.burgerLine} ${style.bgLineAnimate2}`}></div>
                    <div className={!stateBurger ? style.burgerLine : `${style.burgerLine} ${style.bgLineAnimate3}`}></div>
                </div>
            </div>
        </nav >

    )
}
export default Header