import './WebLabrary.css';

const WebLibrary = (props) => {
    return (
        <div className='main-title container'>
            {props.children}
        </div>
    )
}
export default WebLibrary