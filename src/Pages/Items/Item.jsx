
const Item = (props) => {
    return(
        <>
        <div>
        <img src={props.imageUrl} />
        <h3>{props.description}</h3>
        </div>
    </>
    )    
}

export default Item;