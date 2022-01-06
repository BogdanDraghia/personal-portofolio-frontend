import Header from "./Header"
import Footer from "./Footer"
import styles from './layout.module.css'

const Layout = ({children})=>{
    return (
    <div>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
    </div>)
}
export default Layout
