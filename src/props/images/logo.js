import * as React from "react"
import style from "./assets.module.css"
<<<<<<< HEAD
import Link from "next/link"
const Logo = () => {
    return (
        <Link href="/" passHref>
=======
const Logo = () => {
    return (
>>>>>>> ccd4ae7ace1cb8b0e05241fc237367e7065fb9ec
        <div className={style.LogoContainer}>
            <div className={style.LogoIcon}>
                <div className={`${style.LogoCircle}  ${style.LightLogo}`}
                >

                </div>
            </div>
            <div className={style.LogoText}>Bogdan</div>
        </div>
<<<<<<< HEAD
        </Link>
=======
>>>>>>> ccd4ae7ace1cb8b0e05241fc237367e7065fb9ec
    )
}

export default Logo