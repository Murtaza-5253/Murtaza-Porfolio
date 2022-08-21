import React, { useEffect, useState } from 'react'
import './Header.scss'

import {motion} from 'framer-motion'
import {Images} from '../../constants'
import {AppWrap} from  '../../wrapper'
import {urlFor,client} from '../../client'
const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
const Header = () => {

  
  const [headSkills, setHeadSkills] = useState([])
  const [headCirc, setHeadCirc] = useState([])
  const [profilePic, setProfilePic] = useState([])

  useEffect(() => { 
    const query = '*[_type=="headskill"]'
    const circquery = '*[_type=="headercirc"]'
    const profpic = '*[_type=="profilepic"]'
  client.fetch(query).then((data)=>
   setHeadSkills(data)
  )
  client.fetch(circquery).then((data)=>
   setHeadCirc(data)
  )
  client.fetch(profpic).then((data)=>
   setProfilePic(data)
  )
}
   )
  

  return (
    <div className="app__header app__flex">
      <motion.div 
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:1.0}}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Murtaza</h1>
            </div>
          </div>
            <div className="tag-cmp app_flex">
            {headSkills.map((hskill,index)=>(
            <p className="p-text">{hskill.title}</p>
          ))}
          </div>
          
        </div>
        
      </motion.div>

      <motion.div 
      whileInView={{opacity:[0,1]}}
      transition={{duration:1.0, delayChildren:0.5}}
      className="app__header-img"
      >
        {profilePic.map((pic)=>(
          // Images.mzprofile566x710_3
          <img src={urlFor(pic.imgUrl)} alt="profile_bg" />
        ))}
        
        <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration:1.5, ease:'easeInOut'}}
        src={Images.circle}
        alt="profile_circle"
        className="overlay_circle"
        />

    
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {/* [Images.flutter,Images.redux,Images.sass] */}
        {headCirc.map((circle,index)=>
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={urlFor(circle.imgUrl)} alt="circle" />
        </div>
        )}
      </motion.div>
    </div>
  )
}
export default AppWrap(
  Header, 'Home',
  'app__primarybg',
);