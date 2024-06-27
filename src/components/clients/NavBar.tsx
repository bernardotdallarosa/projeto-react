import { FiUsers } from "react-icons/fi";
import Logo from '../../assets/Logo.svg'

function NavBar(){
    return(
<>
<div className="navBody">
    <img src={Logo} className="customIcon" />
<div className="navRect"></div>
    <button className="usersBox"><FiUsers style={{width:"35px", height:"35px"}}/></button>
</div>
</>
    )
}

export default NavBar