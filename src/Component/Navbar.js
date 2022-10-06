import React ,{useState} from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {connect} from 'react-redux'
import { ChangeVarRedux } from '../redux/var_redux'
function Navbar(props) {
  const GoToPage=()=>{
    props.ChangeVarRedux("button-opened",'fixed-navbar-closed')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
 
  }
  return (
    <div className='nav-container'>
           <div className='nav-logo'>

           </div>
       
            <ul className='nav-ul'>
            <Fragment>
                <li className='nav-item'  onClick={()=>GoToPage()}>
                <NavLink className="nav-link" to="/care_legendary" >ACCUEILL</NavLink>
               
                </li>
                <li className='nav-item'   onClick={()=>GoToPage()}>
                <NavLink className="nav-link" to="/apropos">QUI SOMMES-NOUS ?</NavLink>
                </li>
                <li className='nav-item'  onClick={()=>GoToPage()}>
                <NavLink className="nav-link" to="/prestation">NOS PRESTATIONS</NavLink>
                </li>
                <li className='nav-item'  onClick={()=>GoToPage()}>
                <NavLink className="nav-link" to="/importation">IMPORTATION DE VEHICULES</NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/#">NOS VEHICULES</NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/#">NOS  VEHICULES LIVRES </NavLink>
                </li>
                <li className='nav-item'  onClick={()=>GoToPage()}>
                <NavLink className="nav-link" to="/contact">NOUS CONTACTER </NavLink>
                </li>
            </Fragment>
            </ul>
        </div>
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
 
)(Navbar) 
