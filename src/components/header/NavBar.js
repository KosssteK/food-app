import {Fragment} from 'react';

import ListButton from './ListButton';
import classes from './NavBar.module.css';

const NavBar = (props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1 className={classes.h1}>Zakupy</h1>
            <ListButton click={()=>{props.setShowCart(false)}}>Produkty</ListButton>
            <ListButton click={()=>{props.setShowCart(true)}}>Lista zakupów</ListButton>
        </header>
    </Fragment>
}

export default NavBar;