import { FiUsers } from "react-icons/fi";

function NavBar(){
    return(
<>
<div className="navBody">
<div className="navRect"></div>
    <button className="usersBox"><FiUsers style={{width:"35px", height:"35px"}}/></button>
</div>
</>
    )
}

export default NavBar