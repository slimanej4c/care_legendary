import React ,{useState} from 'react'
import './style/Contact.css'
import AnimatePage from './AnimatePage';
import GoogleMapReact from 'google-map-react';
import { input } from 'react-router-dom'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact(props) {
  const [name, setname] = useState("")
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleSubmit=()=>{
    console.log('clicked')

  }
  return (
    <AnimatePage>
    <div className='contact-container'>
      <div className='contact-top'>
                <div className='contact-top-left'>
                           

                </div>
                      <div className='contact-map'>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: "" }}
                          defaultCenter={defaultProps.center}
                          defaultZoom={defaultProps.zoom}
                        >
                          <AnyReactComponent
                            lat={36.955413}
                            lng={4.337844}
                            text="My Marker"
                          />
                        </GoogleMapReact>

                        </div>
                <div className='contact-line'>

                </div>

                <div className='contact-top-right'>
                <h5 className='contact-cor'>  13 Bd Princesse Charlotte,  <br/> 98000 Monaco<br/>Tel: +377 6 78 63 40 24 <br/>Email: contact@carlegendary.com </h5>
                <form
                        
                        onSubmit={handleSubmit}
                        className="contact-form"
                      
                      >
                        <div className="contact-div">
                       
                          <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="contact-item"
                            value={props.name}
                            onChange={event => setname(event.target.value)}
                            required
                          />
                        </div>
                        <div className="contact-div">
                          <input
                            type="text"
                            placeholder="Your Tel"
                            name="name"
                            className="contact-item"
                            required
                          />
                        </div>
                        <div className="contact-div">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="contact-item"
                            required
                          />
                        </div>
                        <div className="contact-div">
                          <textarea
                            placeholder="Your message"
                            name="message"
                            className="contact-item contact-message"
                            required
                          />
                        </div>
                        <div className="contact-button-div">
                          <button
                            className="contact-button"
                            type="submit"
                          >
                            ENVOYER
                          </button>
                        </div>
                      </form>
                

                </div>
      

      </div>

     
      
      </div>

      </AnimatePage>
  )
}

export default Contact