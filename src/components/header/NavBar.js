import {Fragment} from 'react';

import cartImg from '../../img/cart1.png';
import listImg from '../../img/list.png';
import addImg from '../../img/add_box.png';
import {MenuEnum} from '../enums/Enums';

import ListButton from './ListButton';
import classes from './NavBar.module.css';

const NavBar = (props)=>{
    return <Fragment>
        <header className={classes.header}>
            <ListButton click={()=>{props.setShowCart(MenuEnum.ADD)}}><img src={addImg} alt='img'/></ListButton>
            <ListButton click={()=>{props.setShowCart(MenuEnum.PRODUCTS)}}><img src={listImg} alt='img'/></ListButton>
            <ListButton click={()=>{props.setShowCart(MenuEnum.CART)}}><img src={cartImg} alt='img'/></ListButton>
        </header>
    </Fragment>
}

export default NavBar;