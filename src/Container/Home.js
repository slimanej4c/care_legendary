import React from 'react'
import './style/Home.css'
import Animate from './style/Animate'
function Home() {
  return (
    <div className='home-container'>
      <div className='home-part1'>
           <div  className='home-part1-image'>
            <h3>BIENVENUE CHEZ CAR LEGENDARY EXPERT EN VOITURE DE LUXE</h3>
            <h2>Accompagnement en achat / vente <br/><br/> de vehicule haut de gamme sur <br/><br/> Monaco</h2>

           </div>
          
           <div>
       
          
           </div>
      </div>
           <div className='home-part2'>
            <div className='home-part2-title'>
                 <Animate x={"VOTRE VOITURE DE LUXE SUR-MESURE"} />
            </div>
   
            <div  className='home-part2-image'>
                    
           
               </div>
               <div className='home-part2-text'>
                      

                        <h2>CAR LEGENDARY MONACO </h2>
                              <p>
                                  Depuis la nuit des temps certains produits émergent et viennent révolutionner notre quotidien. 

                                  1886 est l’année qui a vu naitre la première voiture avec moteur à combustion. L’industrie
                                  automobile traversera toutes les époques et marquera plus de 150 ans d’histoire. Fleuron du 
                                  savoir-faire et du génie humain, la voiture est bien plus qu’un moyen pour se déplacer, c’est 
                                  l’extension de sa personnalité, celui de son propriétaire.
                              </p>
                  </div>
                
           </div>
           
      
      </div>
  )
}

export default Home