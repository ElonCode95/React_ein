import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container">
                <a className='navbar-brand' href="/"><img src={Logo} alt='logo' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>React</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">HTML & CSS</a>
                        </li>
                        <li className="nav-item">
                            <Link to='https://eloncode.de' className="nav-link ">Wordpress</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header