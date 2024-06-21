

function Caixa() {

return(
<div className="LoginBox">
    <h1>Bem Vindo</h1>
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
            <button id="LogButton" type="submit">Login</button>
        </div>
    </form>
</div>

)
}

export default Caixa