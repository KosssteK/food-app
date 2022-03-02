import classes from './ListButton.module.css';

const ListButton = (props)=>{
    return <button className={classes.button} onClick={props.click}>
        <span>{props.children}</span>
        </button>
};

export default ListButton;