import classes from './Element.module.css';

const Element =(props)=>{
    const buttonClasses = [classes.button]; 
    if(props.add){
        buttonClasses.push(classes.add);
    }else{
        buttonClasses.push(classes.sub);
    }

    return <div className={classes.item} key={props.id}>
        <span className={classes.name}>{props.name}</span>
        {props.qty ? <span className={classes.qty}>{props.qty}</span> : null}
        <button className={buttonClasses.join(' ')} onClick={()=>props.click(props.id)}>{props.add ? '+' : '-'}</button>
    </div>
}

export default Element;