import NavBar from "../components/clients/NavBar"
import Search from "../components/clients/Search"
import './page2.css'
import Card from "../components/clients/Card"

function Page2(){
return(
<>
<NavBar />
<Search />
<div className="cardDisplay">
<Card />
<Card />
<Card />
<Card />
</div>
</>
)

}

export default Page2