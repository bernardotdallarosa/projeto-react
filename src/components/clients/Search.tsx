import { FaMagnifyingGlass } from "react-icons/fa6";

function Search(){
    return(
<>
<h1 style={{position:"absolute",left:"150px", top:"40px"}}>Fulano Silva</h1>
<h1 style={{position:"absolute",left:"160px", top:"112px"}}>Cliente</h1>
<FaMagnifyingGlass className="magGlass"/>
<input className="searchBar" type="text" placeholder="Search"></input>
</>
    )
}

export default Search

