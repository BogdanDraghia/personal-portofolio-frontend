import style from './components.module.css'

const CodeBloc = ({ children }) => {
    return (
        <div className={style.codeBlock}>
            {children}
        </div>
    )
}

export default CodeBloc