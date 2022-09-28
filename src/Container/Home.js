import React from 'react'
import './style/Home.css'
import Animate from './style/Animate'
import AnimatePage from './AnimatePage'
import { motion  } from 'framer-motion';
function Home() {
     console.log('hight scrol',     document.documentElement.scrollHeight ,
     document.documentElement.clientHeight ,window.pageYOffset)
     
  return (
    <AnimatePage>
    <div className='home-container'>

      <div className='home-part1'>
           <div  className='home-part1-image'>
           <Animate x={"--- VOTRE VOITURE DE LUXE SUR-MESURE ---"} />

               <h3>BIENVENUE CHEZ CAR LEGENDARY EXPERT EN VOITURE DE LUXE</h3>
               
               <h2>Accompagnement en achat / vente <br/><br/> de vehicule haut de gamme sur <br/><br/> Monaco</h2>
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
           
       
      </div>
      </AnimatePage>
  )
}

export default Home