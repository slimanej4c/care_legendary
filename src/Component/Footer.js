import React from 'react'
import './Footer.css'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='container-footer'>
        
        <div className='footer-part1'>
            <div className='footer-resume'>
                <h2 className='footer-title'>CAR LEGENDARY</h2>
                <p>Recherche européenne personnalisée de véhicules d'exception à Monaco (98)
                 Un accompagnement personnalisé de la recherche à la livraison de votre véhicule de prestige</p>

            </div>
            <div className='footer-information'>
                <h2 className='footer-title'>INFORMATIONS</h2>
                <div className='footer-all-ul'>
                    <ul className='footer-nav-ul'>
                        <Fragment>
                           
                            <li className='footer-nav-item'  onClick={null}>
                            <NavLink className="footer-nav-link" to="/aprops">QUI SOMMES-NOUS ?</NavLink>
                            </li>
                            <li className='footer-nav-item'  onClick={null}>
                            <NavLink className="footer-nav-link" to="/contact">NOS PRESTATIONS</NavLink>
                            </li>
                            <li className='footer-nav-item'  onClick={null}>
                            <NavLink className="footer-nav-link" to="/experience">NOS VEHICULES</NavLink>
                            </li>
                            <li className='footer-nav-item'  onClick={null}>
                            <NavLink className="footer-nav-link" to="/experience">NOS  VEHICULES LIVRES </NavLink>
                            </li>
                           
                            
                        </Fragment>
                        </ul>
                       
                </div>

            </div>
            <div className='footer-contact'>
                    <h2 className='footer-title'>CONTACT</h2>
                    <div className='footer-contact-num'>
                        <span><b>Num </b>: +377 6 78 63 40 24</span>
                      
                        <span><b>Email</b> : contact@carlegendary.com</span>
                    </div>
                    
                    <span> <b>Adresse</b> : 13 Bd Princesse Charlotte, 98000 Monaco </span>
             
             

            </div>

        </div>
        <div className='footer-part2'>
            <div className='footer-logo'>

            </div>
            <div className='footer-web'>
                    

            </div>

        </div>
        
    </div>
  )
}

export default Footer