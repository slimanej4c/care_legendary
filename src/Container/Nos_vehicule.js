import React ,{useState, useEffect} from 'react'
import './style/Nos_vehicule.css'
function Nos_vehicule() {
    const [image_show , setimage_show]=useState(require('../Assets/images/bureau/aprops1.jpg'))
    const [index_image , setindex_image]=useState(0)
    const [anime_image , setanime_image]=useState(true)
    const SliderData = [
        {image:require('../Assets/images/bureau/aprops1.jpg'),},
        {image:require('../Assets/images/bureau/home1.jpg'),},
        {image: require('../Assets/images/bureau/home111.jpg'), },
        {image:require('../Assets/images/bureau/aprops1.jpg'),},
        {image:require('../Assets/images/bureau/home1.jpg'),},
        {image: require('../Assets/images/bureau/home111.jpg'), },
        {image:require('../Assets/images/bureau/aprops1.jpg'),},
        {image:require('../Assets/images/bureau/home1.jpg'),},
        {image: require('../Assets/images/bureau/home111.jpg'), },
        {image:require('../Assets/images/bureau/aprops1.jpg'),},
        {image:require('../Assets/images/bureau/home1.jpg'),},
        {image: require('../Assets/images/bureau/home111.jpg'), },
       
      ];
      const SetImage=(image,id)=>{

        setimage_show(image)
        setindex_image(id)
        setanime_image(false)
      }
     const Show_image=()=>{

        return(
            <div className='ve-part2-show'>
                            <img src={image_show}></img>

                        </div>
        )
     }
     useEffect(() => {
       if(index_image<SliderData.length){
        {anime_image &&  setTimeout(()=>setindex_image(index_image+1),2000) }
       
       setimage_show(SliderData[index_image].image)

       }
       else{
        setindex_image(0)
       }
       
        
        
       },[index_image])
  return (
    <div  className='ve-container'>

                <div className='ve-part1'>
                    <div className='ve-part1-image'>
                        <div className='ve-part1-image-filtre'>

                            <h3>CARLEGENDARY.COM</h3>
                            <h2>Notre catalogue de vehicules  <br/> haut de gamme </h2>

                        </div>
                    </div>

                </div>

                <div className='ve-part2'>
                        <div className='ve-part2-title'>
                                <h2>NOS VEHICULES DE PRESTIGE </h2>

                        </div>
                            
                        <div className='ve-part2-catalog'>
                                {SliderData.map((slide, index) => {
                
                
                
                                return (
                                    <div className={index===index_image? 've-part2-images-selected':'ve-part2-images' } key={index} onClick={()=>SetImage( slide.image ,index)} >
                                        
                                            <img src={slide.image} className='ve-part2-images-item'></img>

                                    </div>
                                            ) })}

                        </div>
                        
                        {Show_image()}

                </div>

                < div className='ve-part3'>
                        <div className='ve-part3-title'>
                                <h2>NOS MARQUES AUTOMOBILES HAUT DE GAMME A MONACO</h2>

                        </div>
                        <div className='ve-line'>

                        </div>
                        <div className='ve-part3-marque'>

                            <h1>W Ã f p r â</h1>
                            <h2>ë 4 L Q Á </h2>

                        </div>


                </div>


    </div>

  )
}

export default Nos_vehicule