
import React, { Component , Fragment ,useState,useEffect} from 'react'

import Navbar from '../Component/Navbar'
import Navbar_menu from '../Component/Navbar_menu'
import { connect } from 'react-redux'
import { ChangeVarRedux } from '../redux/var_redux'
import './Layout.css'
const Layout =(props) =>{
  

   const open_close=()=>{
    if(props.button_class==="button-closed"){
     
      props.ChangeVarRedux("button-opened",'fixed-navbar-closed')
    }
    else{
    
      props.ChangeVarRedux("button-closed",'fixed-navbar')
    }
       
       console.log('clicked',props.button_class,props.menu_class)

   }
   useEffect(() => {


   },[props.button_class])
    return (
  
  <Fragment>
   <div className='container-layout'>
   <div className='fixed-navbar-menu'>
   <div onClick={open_close} className={props.button_class}>
              <div className='line1 line'></div>
              <div className='line2 line22'></div>
              <div className='line3 line'></div>
   </div>
   <Navbar_menu/>
     </div>
     <div className={props.menu_class}>
        
     <Navbar/>
     </div>
   <div className='move-part'>
   {props.children}

   </div>
 
     </div>
      </Fragment>
     

   
    )
  
}




const mapStateToProps = state => {

  return {
  
      button_class:state.change_var_reducer.button_class,
      menu_class:state.change_var_reducer.menu_class,
   
  }
}



const mapDispatchToProps = dispatch => {
  
  return {
    ChangeVarRedux :(button,menu)=>dispatch(ChangeVarRedux(button,menu)),

    
  }
}

export default  connect(
  mapStateToProps ,mapDispatchToProps
 
)(Layout) 


