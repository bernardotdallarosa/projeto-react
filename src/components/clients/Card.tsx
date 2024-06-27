import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Card(
{
    name,
} : {
    name: string,
}
){
return(
<>
<button className="cardBody" 
>
<div className="nameIcon">PO</div>
<div className="cardName">{name}</div>
<div>Proxima consulta: 11/12/2024</div>
<div className="consultaBox">
    <div>Consultas</div>
    <div>Mensais</div>
</div>
<div className="iconsBox">
<div className="downIcons"><CiMail className="iconSize"/>Copiar Email</div>
<div className="downIcons"><FaWhatsapp className="iconSize"/>Whatsapp</div>
</div>
</button>
</>
)

}

export default Card