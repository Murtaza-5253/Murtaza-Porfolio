import React, {useState} from 'react'
import {Images} from '../../constants'
import {AppWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'
const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''})

  const [isFormSubmitter, setIsFormSubmitter] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message}=formData;

  const handleChangeInput  = (e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = ()=>{
    setLoading(true)
    const contact={
      _type:'contact',
      name:name,
      email:email,
      message:message
    }

    client.create(contact).then(()=>{
      setLoading(false);
      setIsFormSubmitter(true)
    })
  }
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <a href="mailto:murtazamaimoon73@gmail.com" className='p-text'>murtazamaimoon73@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="mobile" />
          <a href="tel:+919850255821" className='p-text'>+919850255821</a>
        </div>
      </div>

    {!isFormSubmitter?  
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <textarea 
            placeholder='Your Message' 
            name="message"
            value={message}
            onChange={handleChangeInput}
            className="p-text"></textarea>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading? 'Sending':'Send Message'}</button>
      </div>
      :<div>
          <h3 className="head-text">Thank you for getting in touch</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(Footer,"Contact","app__whitebg")