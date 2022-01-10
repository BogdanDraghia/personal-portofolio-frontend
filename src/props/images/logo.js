import * as React from "react"
import style from "./assets.module.css"
const Logo = () => {
    return (
        <div className={style.LogoContainer}>
            <div className={style.LogoIcon}>
                <div className={`${style.LogoCircle}  ${style.LightLogo}`}
                >

                </div>
            </div>
            <div className={style.LogoText}>Bogdan</div>
        </div>
    )
}

export default Logo