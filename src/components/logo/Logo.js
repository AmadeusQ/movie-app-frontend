import './logo.css'
import logo from '../../assets/images/AMADEUS_LOGO2.png'

function Logo() {
  return (
    <a href='/movies' className='homeLink'>
        <img src={logo} alt={"Logo"} className="logo"/>
        <p className="logoText">MOVIES</p>
    </a>
  )
}

export default Logo;