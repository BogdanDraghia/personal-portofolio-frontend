import style from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
// ICONS
import Cv from "../../props/icons/cv";
import Github from "../../props/icons/github";
import Instagram from "../../props/icons/instagram";
import Linkedin from "../../props/icons/linkedin";

// ASSETS
import Button from "../assets/Button";
import SvgIconHelper from "../assets/SvgIconHelper";

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.contentLeft}>
        <p>Hello, Im Bogdan</p>
        <h1>Full-stack developer</h1>
        <p>
          I want to share the knowledge that I have acquired so far and I am
          willing to learn many new things.
        </p>
        <div className={style.buttonGroup}>
          <Link href="/projects" passHref>
            <div>
              <Button text="My work" fill="var(--accent)" colortxt="white" />
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div>
              <Button text="Contact" hover={false} colortxt="var(--accent)" />
            </div>
          </Link>
        </div>
      </div>
      <div className={style.contentRight}>
        <div className={style.subPhotoSection}>
          <div className={style.imageContainer}>
            <Image
              className={style.ImageHero}
              src={"/profile.jpg"}
              alt="bogdandraghia"
              layout='fill'
              placeholder="blur"

            />
          </div>
          <div className={style.IconShortcutContainer}>
            <SvgIconHelper
              name="cv"
              icon={<Cv width="60px" height="60px" />}
              pass={"/cv/CV-BogdanCristianDraghia.pdf"}
            />
            <SvgIconHelper
              name="Linkedin"
              icon={<Linkedin width="60px" height="60px" />}
              pass={"https://www.linkedin.com/in/bogdandraghia/"}
            />
            <SvgIconHelper
              name="github"
              icon={<Github width="60px" height="60px" />}
              pass={"https://github.com/bogdandraghia"}
            />
            <SvgIconHelper
              name="Instagram"
              icon={<Instagram width="60px" height="60px" />}
              pass={"https://www.instagram.com/bogdan_draghia/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
