
import Element from './element/Element';

const ProductList = (props)=>{
    console.log(props.products)
    const products = props.products.map((el,index) => <Element 
        key = {index}
        id={el.id} 
        name={el.name} 
        click={props.addProduct} 
        category={el.category}
        add={true}
    />);

    return <div>
        {products.length > 0 ? products : <span>Pusto</span>}
    </div>
}

export default ProductList;