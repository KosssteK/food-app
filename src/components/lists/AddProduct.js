import classes from './AddProduct.module.css';


import {Categories} from '../enums/Enums';
import { Fragment, useState } from 'react';

const AddProduct = (props)=>{
    const [showError, setShowError] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState(Categories.BAKERY);

    const onSelectChange = (event)=>{
        setCategory(event.target.value);
    }

    const onNameChange = (event)=>{
        setShowError(false);
        setName(event.target.value);
    }

    const submitHandler = event =>{
        event.preventDefault();
        setShowError(false);

        if(name.trim(' ').length === 0){
            setShowError(true);
            return;
        }

        console.log(name);
        console.log(category);

        props.updateProducts({id: Math.random(), name: name, category:category});
    }

    const selectOptions = [];

    for(const key in Categories){
        selectOptions.push(<option key={key} value={Categories[key]}>{Categories[key]}</option>);
    }

    return <Fragment>
        {showError ? <p>Nope</p> : null}
        <form onSubmit={submitHandler} className={classes.productForm}>
        <h2>Nazwa</h2>
        <input className={classes.inputs} value={name} onChange={onNameChange}/>
        <h2>Dział</h2>
        <select className={classes.inputs} value={category} onChange={onSelectChange} name="category" id="category">
            {selectOptions}
        </select>
        <button className={classes.button} type='submit'>Dodaj</button>
    </form></Fragment>
}

export default AddProduct;