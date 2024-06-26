//import Data from './sprint4mock.json';
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Card(){
    //const handleCardClick = (item: any) => {window.location.href = `/client/${item.id}`;}
return(
<>
<button className="cardBody" 
//onClick={() => handleCardClick(item)}
>
<div className="nameIcon">PO</div>
<div className="cardName">Paulo Orvalho</div>
<div>Proxima consulta:</div>
<div>11/12/2024</div>
<div className="consultaBox">
    <div>Consultas</div>
    <div>Mensais</div>
</div>
<div className="iconsBox">
<div><CiMail />Copiar Email</div>
<div><FaWhatsapp />Whatsapp</div>
</div>
</button>
</>
)

}

export default Card