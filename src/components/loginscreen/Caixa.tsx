

function Caixa() {
/*return(
<div className="LoginBox">
    <div className="LoginTitle">Bem Vindo</div>
    <form>
    <div>Email</div>
    <input type="text"></input>
    <div>Senha</div>
    <input type="text"></input>
    </form>
</div>
)*/

return(
<div className="LoginBox">
    <h1 className="LoginTitle">Bem Vindo</h1>
    <form>
        <div>
            <div>Email</div>
            <input 
            type="text"
            placeholder="Digite seu email"/>
        </div>
        <div>
            <div>Senha</div>
            <input 
            type="password"
            placeholder="Digite sua senha"/>
        </div>
        <div>
            <input type="submit" value="Login"/>
        </div>
    </form>
</div>

)
}

export default Caixa