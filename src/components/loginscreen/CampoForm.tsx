import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

function CampoForm(){
    const toClients = () => {window.location.href = `/clients`;
    }
return (
<div>
            <div>
                <label className="senhaLabel">Email</label>
            <input
            className="email"
            type="text"
            placeholder="Digite seu email"/>
            </div>
            <CiMail className="emailIcon"/>
 <CiLock className="senhaIcon"/>
            <div>
                <label className="emailLabel">Senha</label>
            <input 
            className="senha"
            type="password"
            placeholder="Digite sua senha"/>
            </div>
            <button className="logButton" type="submit" onClick={toClients}>Login</button>
     </div>
)


}

export default CampoForm