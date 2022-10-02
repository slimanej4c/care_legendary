import React from 'react'
import './style/Home.css'
import Animate from './style/Animate'
import AnimatePage from './AnimatePage'
import { motion  } from 'framer-motion';
import './style/Prestation.css'
function Home() {
     console.log('hight scrol',     document.documentElement.scrollHeight ,
     document.documentElement.clientHeight ,window.pageYOffset)
     
  return (
    <AnimatePage>
    <div className='home-container'>

      <div className='home-part1'>
           <div  className='home-part1-image'>
           <Animate x={"--- VOTRE VOITURE DE LUXE SUR-MESURE ---"} />

               <h3>BIENVENUE CHEZ <br/> CAR LEGENDARY EXPERT EN VOITURE  DE LUXE</h3>
               
              
               <h2>ACCOMPAGNEMENT EN ACHAT / VENTE <br/>DE VEHICULE HAUT DE GAMME SUR <br/> MONACO</h2>
               <div className='home-part1-div'>

               </div>
           </div>
          
           <div>
       
          
           </div>
      </div>
           <motion.div className='home-part2' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1}}>
            <div className='home-part2-title'>
                 <Animate x={"--- VOTRE VOITURE DE LUXE SUR-MESURE ---"} />
            </div>
   
            <div  className='home-part2-image'>
                    
           
               </div>
               <motion.div className='home-part2-text' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1.5}}>
                      

                        <h2>CAR LEGENDARY MONACO </h2>
                              <p>
                                  Depuis la nuit des temps certains produits émergent et viennent révolutionner notre quotidien. 

                                  1886 est l’année qui a vu naitre la première voiture avec moteur à combustion. L’industrie
                                  automobile traversera toutes les époques et marquera plus de 150 ans d’histoire. Fleuron du 
                                  savoir-faire et du génie humain, la voiture est bien plus qu’un moyen pour se déplacer, c’est 
                                  l’extension de sa personnalité, celui de son propriétaire.
                              </p>
                  </motion.div>
                
           </motion.div>

           <div className='prestation-part3'>

          
                        <motion.div className='prestation-part3-image1' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:2}}>

                                <div className='prestation-part3-image-filtre'>

                            
                                      <h2>RECHERCHE  <br/>PERSONNALISÉE </h2>
                                      <p className='p_blanc'>
                                      Amateurs ou passionnés, vous souhaitez acquérir un véhicule de prestige et vos exigences sont nombreuses : berline, 4X4, sportive, supercar, 
                                      voiture de collection… vous avez le modèle exact en tête. Néanmoins, la recherche est un processus long et compliqué, et vous n’avez pas le temps 
                                      ou la volonté de vous y soustraire ? Rassurez-vous, nous sommes là pour vous. Profitez de notre expertise et de notre réseau, et confiez-nous la
                                      recherche de votre véhicule de rêve, nous parcourons l’Europe pour vous le dénicher.
                                      </p>
                                      </div>
                        </motion.div>
                        <motion.div className='prestation-part3-image2' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:2}}>

                                <div className='prestation-part3-image-filtre'>

                            
                                      <h2>IMPORTATION <br/>DE VÉHICULES </h2>
                                      <p className='p_blanc'>
                                      L’importation de véhicules de l’étranger est en croissance et nous souhaitons vous offrir un accompagnement sur mesure. Vous souhaitez
                                       importer un véhicule ou avez simplement besoin d’un accompagnement concernant une acquisition ? Car Legendary Monaco s’occupe de votre projet.
                                        Le processus est simple, vous choisissez l’un des packs et êtes recontacté dans la journée.
                                      </p>
                                      </div>
                        </motion.div>

          </div>
           
       
      </div>
      </AnimatePage>
  )
}

export default Home