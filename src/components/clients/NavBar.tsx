import { FiUsers } from "react-icons/fi";
import Logo from '../../assets/Logo.svg'

function NavBar(){
    const toLogin = () => {window.location.href = `/`;
    }
    const toClients = () => {window.location.href = `/clients`;
    }
    return(
<>
<div className="navBody">
    <button className="selectIcon" onClick={toLogin}><img src={Logo} className="customIcon" /></button>
<div className="navRect"></div>
    <button className="usersBox" onClick={toClients}><FiUsers style={{width:"35px", height:"35px"}}/></button>
</div>
</>
    )
}

export default NavBar