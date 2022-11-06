import style from "./layout.module.css";

const Footer = () => {
  const styleFooter = {
    opacity: 0.8,
    textAlign: "center",
    padding: "15px",
    marginTop: "auto",
  };
  return (
    <footer className={style.footerSection}>
      Copyright © 2022 Bogdan Draghia
    </footer>
  );
};

export default Footer;
