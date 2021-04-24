const NavigationItem = (props) => {
    return (
        <li>
            <a href={props.link} className='page-scroll'>
                {props.name}
            </a>
        </li>
    )
}

export default NavigationItem;