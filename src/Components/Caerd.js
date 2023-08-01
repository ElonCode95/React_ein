import './Card.css'
import { FaReact } from "react-icons/fa";
const Caerd = (props) => {
    return (
        <div>
            <div className='main-items' >
                <div className='main-item-one'>
                    <img className='main-img' src={props.image} alt='React' />
                    <div className='main-container'>
                        <h4 className='container' ><FaReact style={{ 'color': '#006fba' }} />REACT <br /><span><FaReact style={{ 'color': '#006fba' }} />{props.titel}</span></h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Caerd