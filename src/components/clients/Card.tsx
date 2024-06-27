import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Card({name, recurrence, id} : {name: string, recurrence: string, id: string}){
    const getUppercaseLetters = (str: string) => {
        return str.split('').filter(char => char === char.toUpperCase() && char !== ' ').join('');
      }
    
      const uppercaseName = getUppercaseLetters(name);
      const toClient = () => {window.location.href = `/client/:${id}`;}
    
return(
<>
<button className="cardBody" onClick={toClient}>
<div className="nameIcon">{uppercaseName}</div>
<div className="cardName">{name}</div>
<div>Proxima consulta: 11/12/2024</div>
<div className="consultaBox">
    <div>Consulta</div>
    <div>{recurrence}</div>
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