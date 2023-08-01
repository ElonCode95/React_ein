import './Karte.css'

const Karte = (props) => {
    return (
        <div className='karte-items' >
            <div className='main-item-one'>
                <img className='main-img' src={props.image} alt='React' />
                <div className='main-container'>
                    <h4 className='containert container'>{props.name}</h4>
                    <h5>{props.icon}</h5>
                </div>
            </div>
        </div>
    )
}

export default Karte