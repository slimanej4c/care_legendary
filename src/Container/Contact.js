import React from 'react'
import './style/Contact.css'
import AnimatePage from './AnimatePage';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleSubmit=()=>{

  }
  return (
    <AnimatePage>
    <div className='contact-container'>
      <div className='contact-top'>
                <div className='contact-top-left'>
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
                                Send a message
                              </button>
                            </div>
                          </form>

                </div>
                <div className='contact-line'>

                </div>

                <div className='contact-top-right'>
                <h5 className='contact-cor'>  140 rue zone d'activité <br/>BBA Algeria<br/>Tel: +213 666 666 666 <br/> Fax: +213 666 666 666 <br/>Email: email@domain.dz </h5>
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

                </div>
      

      </div>

     
      
      </div>

      </AnimatePage>
  )
}

export default Contact