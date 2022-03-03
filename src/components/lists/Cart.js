import Element from './element/Element';

const Cart = (props)=>{

    const cart = props.cart.map((el,index)=><Element 
        key={index}
        id={el.id} 
        name={el.name} 
        click={props.removeProduct}
        qty={el.qty}
        category={el.category}
        add={false}
    />);
    return <div>
        {cart.length > 0 ? cart : <span>Pusto</span>}
    </div>
}

export default Cart; 