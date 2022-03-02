import classes from './ProductList.module.css';

import Element from './element/Element';

const ProductList = (props)=>{
    const products = props.products.map((el,index) => <Element 
        key = {index}
        id={el.id} 
        name={el.name} 
        click={props.addProduct} 
        add={true}
    />);

    return <div>
        {products}
    </div>
}

export default ProductList;