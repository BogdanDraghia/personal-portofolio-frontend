import * as React from "react";
import style from "./assets.module.css";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className={style.LogoContainer}>
        <div className={style.LogoIcon}>
          <div className={`${style.LogoCircle}  ${style.LightLogo}`}></div>
        </div>
        <div className={style.LogoText}>Bogdan</div>
      </div>
    </Link>
  );
};

export default Logo;
