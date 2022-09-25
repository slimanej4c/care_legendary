import React ,{useState} from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {connect} from 'react-redux'
import { ChangeVarRedux } from '../redux/var_redux'
function Navbar(props) {
  return (
    <div className='nav-container'>
           <div className='nav-logo'>

           </div>
       
            <ul className='nav-ul'>
            <Fragment>
                <li className='nav-item'  onClick={()=>props.ChangeVarRedux("button-opened",'fixed-navbar-closed')}>
                <NavLink className="nav-link" to="/accueill" >ACCUEILL</NavLink>
               
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/aprops">QUI SOMMES-NOUS ?</NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/contact">NOS PRESTATIONS</NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/experience">IMPORTATION DE VEHICULES</NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/experience">NOS VEHICULES</NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/experience">NOS  VEHICULES LIVRES </NavLink>
                </li>
                <li className='nav-item'  onClick={null}>
                <NavLink className="nav-link" to="/experience">NOUS CONTACTER </NavLink>
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
