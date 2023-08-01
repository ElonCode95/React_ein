import './Body.css'

const Body = (props) => {
    return (
        <div className='container main-body'>
            {props.children}
        </div>
    )
}

export default Body