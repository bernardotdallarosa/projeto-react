function Infobox(props){
    return(
<>
 <label>{props.title}</label>
 <div className="info">{props.info}</div>
</>
)
}

export default Infobox