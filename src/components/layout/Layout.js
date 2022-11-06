import Header from "./Header";
import Footer from "./Footer";
import style from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.expand}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
