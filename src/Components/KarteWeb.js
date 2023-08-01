import './KarteWeb.css'
import Css from '../images/css.png'
import Html from '../images/html.png'
import Js from '../images/Js.png'
import Karte from './Karte'
import { FaCss3, FaHtml5, FaJsSquare } from "react-icons/fa";
import React from 'react'

const KarteWeb = () => {
    return (
        <>
            <Karte image={Css} name='Css' icon={FaCss3} />
            <Karte image={Html} name='Html' icon={FaHtml5} />
            <Karte image={Js} name='J s' icon={FaJsSquare} />
        </>

    )
}

export default KarteWeb