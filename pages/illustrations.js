import style from "../src/components/illustrations/illustrations.module.css";
import { useState, useEffect } from "react";
import { m, AnimatePresence, LazyMotion, domMax } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
const IllustrationItem = (props) => {
  return (
    <LazyMotion features={domMax}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={style.IllustrationItem}
        index={props.id}
        onClick={() => {
          props.handleOverlay(props.id);
        }}
      >
        <div className={style.helperOpen}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Image
          src={`${props.providerUrl}${props.image}`}
          width="300px"
          loading="lazy"
          layout="responsive"
          height="300px"
          placeholder="blur"
          alt="profile"
        />
      </m.div>
    </LazyMotion>
  );
};

const IllustrationOverlay = (props) => {
  const [copynotification, setCopyNotification] = useState(false);
  const copyColor = (elem) => {
    navigator.clipboard.writeText(elem);
    setCopyNotification(true);
    setTimeout(() => setCopyNotification(false), 1500);
  };

  const closeOverlay = (e) => {
    if (e.target.getAttribute("data")) {
      props.handleOverlay();
    }
  };
  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
  return (
    <LazyMotion features={domMax}>
      <AnimatePresence>
        {props.render && (
          <m.div
            initial={{ opacity: 0, zIndex: 3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${style.IllustrationOverlay} close`}
            style={{
              backgroundColor: hex2rgba(props.data.attributes.dominantColor, 0.8),
            }}
            data="close"
            onClick={(e) => {
              closeOverlay(e);
            }}
          >
            <div className={style.overlayContent}>
              <div className={style.closeHelperContainer} data="close">
                <div className={style.closeHelperCross}>
                  <div style={{ transform: "rotate(45deg)" }}></div>
                  <div style={{ transform: "rotate(-45deg)" }}></div>
                </div>
              </div>
              <div className={style.imageOverlay}>
                <AnimatePresence>
                  {copynotification && (
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ y: -10, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1,
                        type: "spring",
                      }}
                      className={style.notificationContainer}
                    >
                      <div className={style.notification}>
                        Color copied to the clipboard !
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
                <Image
                  src={`${props.providerUrl}${props.data.attributes.image}`}
                  layout="responsive"
                  width="400px"
                  height="400px"
                  placeholder="blur"
                  alt="profile"
                />
              </div>
              <div className={style.palette}>
                {props.data.attributes.pallete.map((item, index) => (
                  <m.div
                    className={style.paletteBox}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      copyColor(item);
                    }}
                    key={index}
                  >
                    <div
                      className={style.colorBox}
                      style={{ backgroundColor: item }}
                    ></div>
                    <div className={style.colorCode}>{item}</div>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

const Illustrations = ({ illustrations, providerUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItemData, setCurrentItemData] = useState(undefined);
  const handleOverlay = (index) => {
    setCurrentItemData(illustrations[index]);
    setIsOpen(!isOpen);
  };

  const handleOverlayCloseWithEsc = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleOverlayCloseWithEsc, false);

    return () => {
      document.removeEventListener("keydown", handleOverlayCloseWithEsc, false);
    };
  }, []);

  return (
    <div className={style.center}>
      <Head>
        <title>Illustrations</title>
        <meta name="description" content="Personal portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.IllustrationsGrid}>
        {illustrations.map((data, index) => (
          <IllustrationItem
            handleOverlay={handleOverlay}
            image={data.attributes.image}
            id={index}
            providerUrl={providerUrl}
            key={index}
          >
            {data.name}
          </IllustrationItem>
        ))}
      </div>
      <IllustrationOverlay
        render={isOpen}
        data={currentItemData}
        providerUrl={providerUrl}
        handleOverlay={handleOverlay}
      />
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(`${process.env.BACKEND_URL}/api/illustrations`);
  const providerUrl = process.env.PROVIDER_URL;
  return {
    props: {
      providerUrl,
      illustrations: res.data.data,
    },
  };
}

export default Illustrations;
