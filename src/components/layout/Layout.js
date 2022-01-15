import Header from "./Header"
import Footer from "./Footer"
<<<<<<< HEAD
import style from './layout.module.css'

const Layout = ({children})=>{
    return (
    <div className={style.expand}>
=======
import styles from './layout.module.css'

const Layout = ({children})=>{
    return (
    <div>
>>>>>>> ccd4ae7ace1cb8b0e05241fc237367e7065fb9ec
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
    </div>)
}
export default Layout
