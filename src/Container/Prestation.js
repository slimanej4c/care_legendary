import React from 'react'
import './style/Prestation.css'
import { motion  } from 'framer-motion';
import { NavLink } from 'react-router-dom'
import AnimatePage from './AnimatePage'
function Prestation() {
  const GoToPage=()=>{

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
}
  return (
    <AnimatePage>
    <div  className='prestation-container'>
          <div className='prestation-part1'>
                    <div  className='prestation-part1-image'>
                      <div className='prestation-part1-image-div'>

                        <h3>CARLEGENDARY.COM VOITURE PRESTIGE A MONACO</h3>
                        
                        <h2>NOS PRESTATIONS  <br/> ET SERVICES VEHICULE DE<br/>  LUXE </h2>
                        </div>
                    </div>
                    
                
          </div>

          <div className='prestation-line'>

          </div>

          <div className='prestation-part2' >
       
                        <motion.h2  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1}}>Offrez-vous  votre nouvelle<br/>  voiture avec Car Legendary  <br/> Monaco</motion.h2>
                        <motion.p className='p_noir' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:2}}>
                        Vous souhaitez faire l’acquisition d’un modèle de haut-standing ? Nous vous permettons d’acquérir votre nouvelle voiture clé en main.
                         Votre supercar de rêve est presque entre vos mains : il suffit de nous la demander. Contactez nous au +377 678 634 024
                        </motion.p>
               
          </div>

          <div className='prestation-part3'>
                      <div className='prestation-part3-title'>
                                            <h2>NOS PRESTATIONS  <br/>SUR-MESURE</h2>


                                            <h3>CAR LEGENDARY MONACO, <br/> VOTRE PARTENAIRE AUTOMOBILE DE CONFIANCE </h3>

                      </div>
                       
                      <div className='prestation-part3-images'>
                        
          
                              <motion.div className='prestation-part3-image1' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1}}>

                                      <div className='prestation-part3-image-filtre'>

                                  
                                            <h2>RECHERCHE  <br/>PERSONNALISÉE </h2>
                                            <p >
                                            Amateurs ou passionnés, vous souhaitez acquérir un véhicule de prestige et vos exigences sont nombreuses : berline, 4X4, sportive, supercar, 
                                            voiture de collection… vous avez le modèle exact en tête. Néanmoins, la recherche est un processus long et compliqué, et vous n’avez pas le temps 
                                            ou la volonté de vous y soustraire ? Rassurez-vous, nous sommes là pour vous. Profitez de notre expertise et de notre réseau, et confiez-nous la
                                            recherche de votre véhicule de rêve, nous parcourons l’Europe pour vous le dénicher.
                                            </p>

                                                <li className='prestation-nav-item' onClick={()=>GoToPage()} >
                                                          <NavLink className="prestation-nav-link" to="/contact">NOUS CONTACTER</NavLink>
                                                  </li>
                                            </div>
                              </motion.div>
                              <motion.div className='prestation-part3-image2' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1}}>

                                      <div className='prestation-part3-image-filtre'>

                                  
                                            <h2>IMPORTATION <br/>DE VÉHICULES </h2>
                                            <p >
                                            L’importation de véhicules de l’étranger est en croissance et nous souhaitons vous offrir un accompagnement sur mesure. Vous souhaitez
                                            importer un véhicule ou avez simplement besoin d’un accompagnement concernant une acquisition ? Car Legendary Monaco s’occupe de votre projet.
                                              Le processus est simple, vous choisissez l’un des packs et êtes recontacté dans la journée.
                                              
                                            </p>

                                            <li className='prestation-nav-item' onClick={()=>GoToPage()} >
                                                          <NavLink className="prestation-nav-link" to="/importation">EN SAVOIR PLUS</NavLink>
                                              </li>
                                            </div>
                              </motion.div>

                      </div> 

          </div>


    </div>
    </AnimatePage>
  )
}

export default Prestation