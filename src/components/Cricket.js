function Cricket({name, description, image}){
    // const name = props.name;
    // const description = props.description;
    // const image = props.image;
    // const {name, description, image} = props;
  
    return(
        <li>
            <p>{name}</p>
            <p>{description}</p>
            <p><img src={image} className="img-thumbnail rounded mx-auto d-block" alt={name}></img></p>
        </li>
    )
}
export default Cricket


//key note is we should not change the prop name in the child component 
//immutable (cannot change)