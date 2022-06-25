import Logo from '../../assets/Logo.png'
import '../Header/header.css'

const Header = () =>{
    return(
        <>
            <header className="header">
                <div>
                    <img src={Logo} alt="logo com a imagem de um avião de papel escrito minha listinha" height="300px" width="500px"/>
                </div>
            </header>
        </>
    )
}

export default Header

