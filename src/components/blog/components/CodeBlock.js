import style from './components.module.css'

const CodeBloc = ({ children }) => {
    return (
        <div className={style.codeBlock}>
            hello
            {children}
        </div>
    )
}

export default CodeBloc