import Logo from './Logo.svg'
import '../App.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo"/>
        </header>
    )
}

export default Header