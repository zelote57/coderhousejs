import Item from "../Items/Item";
const Categories = ({inputCategories}) => {
    return(
        <>
        <div>
        <ul>
            {inputCategories.map(cate => 
            <li key={cate.url} >{cate.name}</li>)}
        </ul>
        </div>
    </>
    )    
}

export default Categories;