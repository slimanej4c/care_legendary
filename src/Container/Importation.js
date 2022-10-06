import React from 'react'
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import './style/Importation.css'
import { NavLink } from 'react-router-dom'
import AnimatePage from './AnimatePage'
function Importation() {

 
  const GoToPage=()=>{

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
}
  
  return (
    <AnimatePage>
    <div className='impo-container'>
          <div className='impo-part1'>
               <div className='impo-part1-image'>
                   <div className='impo-part1-image-filtre'>

                   </div>
                   
                   <h3>CARLEGENDARY.COM VOTRE EXPERT EN <br/> IMPORTATION DE VÉHICULES</h3>
                   <h2>IMPORTATION DE VEHICULE</h2>
               </div>

          </div>
          <div className='impo-part2'>
                  <div className='impo-part2-image'>
                          <div className='impo-part2-image-filtre'>

                          </div>
                         
                   </div>

                   <div className='impo-part2-description' >
                           <p>
                                Depuis quelques années, l’importation des véhicules de l’étranger est en croissance et nous souhaitons vous offrir un accompagnement sur mesure.

                                Vous souhaitez importer un véhicule d’Allemagne, de Belgique, d’Italie, d’Espagne, des Pays-Bas, du Luxembourg ou de Suisse ? Car Legendary Monaco s’occupe de votre projet. Le processus est simple, vous choisissez l’un des packs et êtes recontacté dans la journée.

                                Il suffit simplement de nous envoyer les annonces des véhicules qui vous intéressent par mail sur : contact@carlegendary.com ou via Whatsapp au 00377 678 634 024.

                                Nous serons votre unique interlocuteur.

                                Car Legendary Monaco prendra contact avec le professionnel et la suite du processus se déroulera avec nous.
                           </p>
                   </div>

          </div>
          <div className='impo-part3'>

               <div className='impo-part3-title'>
                      <h3>CAR LEGENDARY MONACO PROPOSE 3 PRESTATIONS PERSONNALISÉES</h3>
                          <h2>Nos packs D'importation de vehicules</h2>

               </div>
               <div className='impo-part3-packs'>
                      <div className='impo-part3-pack'>
                          <div className='impo-part3-pack-title'>
                                <h1>PACK ARGENT</h1>
                          </div>
                          <div className='impo-part3-pack-container'>
                                <h3>  <FaCheckCircle/> Prise de contact avec un vendeur professionnel pour 5 véhicules</h3>
                                <h3>  <FaCheckCircle/> Vérification de l’entretien du véhicule</h3>
                                <h3>  <FaCheckCircle/> Négociation du tarif</h3>
                                <h3>  <FaCheckCircle/> Préparation du contrat de vente et aide à la transaction</h3>
                                <h3>  <FaCheckCircle/> Aide à la préparation de votre voyage (Avion/billets de train au meilleur tarif mais non inclus dans la prestation)</h3>
                           </div>
                           <h1>600€</h1> 
                           <li className='impo-nav-item' onClick={()=>GoToPage()} >
                                <NavLink className="impo-nav-link" to="/contact">NOUS CONTACTER</NavLink>
                           </li>
                      </div>
                      <div className='impo-part3-pack'>
                          <div className='impo-part3-pack-title'>
                                     <h1>PACK OR</h1>
                          </div>
                          <div className='impo-part3-pack-container'>
                                  <h3>  <FaCheckCircle/> Prise de contact avec le vendeur</h3>
                                  <h3>  <FaCheckCircle/> Recherche personnalisée du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Vérification administrative du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Vérification de l’entretien du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Négociation du tarif</h3>
                                  <h3>  <FaCheckCircle/> Préparation du contrat de vente et aide à la transaction</h3>
                                  <h3>  <FaCheckCircle/> Vidéo du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Accompagnement pour la livraison du véhicule sur Paris</h3>
                          </div>
                          <h1>2500€</h1>
                          <li className='impo-nav-item'  onClick={()=>GoToPage()} >
                                <NavLink className="impo-nav-link" to="/contact">NOUS CONTACTER</NavLink>
                           </li>

                      </div>
                      <div className='impo-part3-pack'>
                          <div className='impo-part3-pack-title'>
                                 <h1>PACK PLATINE</h1>
                          </div>
                          <div className='impo-part3-pack-container'>
                                  <h3>  <FaCheckCircle/> Prise de contact avec le vendeur</h3>
                                  <h3>  <FaCheckCircle/> Recherche personnalisée du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Vérification administrative du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Vérification de l’entretien du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Négociation du tarif</h3>
                                  <h3>  <FaCheckCircle/> Préparation du contrat de vente et aide à la transaction</h3>
                                  <h3>  <FaCheckCircle/> Vidéo du véhicule</h3>
                                  <h3>  <FaCheckCircle/> Accompagnement pour la livraison du véhicule à domicile dans toute l’Europe</h3>
                          </div>
                          <h1>5000€</h1>
                          <li className='impo-nav-item' onClick={()=>GoToPage()} >
                                <NavLink className="impo-nav-link" to="/contact">NOUS CONTACTER</NavLink>
                           </li>
                      </div>


               </div>

          </div>
          <div className='impo-part4'>
              <div className='impo-part4-title'>
                   <h2>INFORMATIONS SUPPLEMENTAIRES</h2>
              </div>
              <div className='impo-part4-description'>
                     <p>
                         Le règlement de notre prestation se déroule après la transaction bancaire avec le vendeur.

                          Nos options disponibles : 

                          Déplacement physique avant achat : Frais réels + 300€
                          Livraison par un transporteur spécialisé : Sur devis
                          Garantie mécanique : Sur devis
                          Expertise du véhicule : Sur devis
                          Ne sont pas inclus dans nos prestations : Les coûts d’immatriculation, de malus ainsi que le certificat de conformité.

                          Aucun achat à un vendeur particulier.

                          Un supplément de 300€ concernant la livraison des véhicules avec une motorisation supérieur ou égale au V8 aura lieu compte-tenu de la consommation des véhicules.
                     </p>
                     
              </div>

          </div>

    </div>
    </AnimatePage>
  )
}

export default Importation