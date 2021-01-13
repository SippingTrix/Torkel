import React from 'react'
import './Header.css'
import Logo from './Torkel_Logo.png'
import { AppBar, Toolbar, makeStyles, } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles({
    appBar: {},

    toolbar: {  
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '3%',
      paddingRight: '3%',
      backgroundColor : 'black'
    },

    logo: {
        height: '150px',
        width: '250px'
    },

    searchField: {},
  });
  
  export default function Header() {
    const classes = useStyles();
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src={Logo} alt='Torkel Logo' className={classes.logo} />
          <h1>Torkel</h1>
          <div className={classes.headerIcon}>
          <DehazeIcon/>
          <ShoppingCartIcon/>
          </div>
          
         
        </Toolbar>
      </AppBar>
    );
  }
  







