import './Section.css';
import React01 from '../images/react.png'
import React02 from '../images/Hero.png'
import React03 from '../images/Section.png'
import React04 from '../images/Caerd.png'

import Caerd from './Caerd'
const Section = () => {



    return (
        <>
            <div className='main-section contaier'>
                <h4>Dieser Abschnitt enthält die Bilder aller von Ihnen erstellten Coupons</h4>



                <Caerd image={React01} titel='Header' />
                <Caerd image={React02} titel='Hero' />
                <Caerd image={React03} titel='Section' />
                <Caerd image={React04} titel='Caerd' />

            </div>
        </>
    )
}

export default Section