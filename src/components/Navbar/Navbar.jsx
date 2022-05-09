import React from 'react';
//MUI
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
//Icon
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//Router-dom
import { Link,useLocation } from 'react-router-dom';
//Logo
import logo from "../../assets/commerce.png";
//Styles
import useStyles from "./styles"

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color="inherit">
                    <img src={logo}  alt="commerce.js" height="25px" className={classes.image}/>
                    AliShop
                </Typography>
                <div className={classes.grow}/>
                {location.pathname === '/'&&(
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label='Show cart items' color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartIcon style={{color:"white"}}/>
                        </Badge>

                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
            
        </>
    );
};

export default Navbar;