
const HyperLink = (props) => {
    console.log(props)
    return (
        <a href={props.href} style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    )
}

export default HyperLink