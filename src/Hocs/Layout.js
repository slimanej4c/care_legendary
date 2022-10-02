
import React, { Component , Fragment ,useState,useEffect} from 'react'

import Navbar from '../Component/Navbar'
import Navbar_menu from '../Component/Navbar_menu'
import Footer from '../Component/Footer'
import { connect } from 'react-redux'
import { ChangeVarRedux } from '../redux/var_redux'
import { ChangeTopRedux } from '../redux/var_redux'
import AnimatePage from '../Container/AnimatePage'
import './Layout.css'

const Layout =(props) =>{
  
   const [show_contact ,setshow_contact]=useState('contact-layout-show')
   const [top_menu ,settop_menu]=useState(props.top)
   const [position_menu ,setposition_menu]=useState('relative')
   const [nav_mobile ,setnav_mobile] =useState('move-navbar-menu-mobile')
   const [nav_bureau_position ,setnav_bureau_position] =useState('absolute')
   const open_close=()=>{
  

    settop_menu('0%')
    if(props.button_class==="button-closed"){
     
      props.ChangeVarRedux("button-opened",'fixed-navbar-closed')
    }
    else{
    
      props.ChangeVarRedux("button-closed",'fixed-navbar')
    }
       
       console.log('clicked',props.button_class,props.menu_class)

   }
   
   useEffect(() => {

    
    window.addEventListener('scroll', () => {
      settop_menu(props.top)
      if (window.scrollY > 150) {
          setshow_contact('contact-layout-hidden')
           settop_menu('0%')
          setnav_mobile('fixed-navbar-menu-mobile')
          setposition_menu('absolute')
          setnav_bureau_position('fixed')
      } else {
        setshow_contact('contact-layout-show')
        setnav_mobile('move-navbar-menu-mobile')
        settop_menu('5%')
        setposition_menu('relative')
       
        setnav_bureau_position('absolute')
      }
  });
    
   },[props.button_class])
    return (
  
  <Fragment>
   <div className='container-layout'>
    <div className={show_contact}>
      <div className='contact-layout-div'>
          <h4>tel +333 02 15 14</h4>
             
      </div>

    </div>

     <div className={nav_mobile} >
   
   <Navbar_menu/>
   
     </div>
     <div onClick={open_close} className={props.button_class}>
              <div className='line1 line'></div>
              <div className='line2 line22'></div>
              <div className='line3 line'></div>
   </div>
 
   <div className={props.menu_class} style={{position:nav_bureau_position,top:top_menu}}>
        
        <Navbar/>
        </div>
  
   
   
    
  
       
   <div className='move-part'>
    {props.children}


   </div>
  
   <div className='footer-part'>
    <Footer/>
   </div>
 
     </div>
    
      </Fragment>
     

   
    )
  
}




const mapStateToProps = state => {

  return {
  
      button_class:state.change_var_reducer.button_class,
      menu_class:state.change_var_reducer.menu_class,
      top:state.change_var_reducer.top,
   
  }
}



const mapDispatchToProps = dispatch => {
  
  return {
    ChangeVarRedux :(button,menu)=>dispatch(ChangeVarRedux(button,menu)),
    ChangeTopRedux :()=>dispatch(ChangeTopRedux()),

    
  }
}

export default  connect(
  mapStateToProps ,mapDispatchToProps
 
)(Layout) 


