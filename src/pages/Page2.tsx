import NavBar from "../components/clients/NavBar"
import Search from "../components/clients/Search"
import './page2.css'
import Card from "../components/clients/Card"
import { Database } from '../sprint4mock.ts'

function Page2(){

    console.log(Database)
return(
<>
<NavBar />
<Search />
<div className="cardDisplay">
    {
        Database.map((e) => {
            console.log(e)
            return <Card name={e.name} />
        })
    }
</div>
</>
)

}

export default Page2