import { FiUsers } from "react-icons/fi";

function NavBar(){
    return(
<>
<div className="navBody">
<div className="navRect"></div>
    <div className="usersBox"><FiUsers style={{width:"35px", height:"35px"}}/></div>
</div>
</>
    )
}

export default NavBar