import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

function CampoForm(){
return (
    <>
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
            <button id="LogButton" type="submit">Login</button>
     </div>
        </>
)


}

export default CampoForm