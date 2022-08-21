import React,{useState,useEffect} from 'react'

import {motion} from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor,client} from '../../client'

import './Skills.scss'
const Skills = () => {

  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type=="experiences"]';
    const skillsQuery = '*[_type=="skills"]';


    client.fetch(query)
    .then((data)=>{
      console.log(data)
      setExperience(data);
    })
    client.fetch(skillsQuery)
    .then((data)=>{
      setSkills(data);
    })
  }, [])
  
  return (
    <>
      <h2 className=" head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
            {skills.map((skill)=>(
              <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                {/* <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div> */}
                <div className="app__flex" style={{ backgroundColor:skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>

              </motion.div>
            ))}
        </motion.div>
        <motion.div className="app__skills-exp">

          {console.log('here',experience.works)}
          {experience?.map((work)=>(

            <motion.div
            className='app__skills-exp-item'
            key={work.year}>

              <div className="app__skills-exp-year">
                {console.log('MZ',work.year)}
                <p className="bold-text">{work.year}</p>
              </div>

              <motion.div
              className='app__skills-exp-works'
              >
                {work.works.map((stuff)=>(
                  
                  <>
              <motion.div
             whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="app__skills-exp-work"
            data-tip
            data-for={stuff.name}
            key={stuff.name}
            >
              <h4 className="bold-text">{stuff.name}</h4>
              <p className="p-text">{stuff.company}</p>
            </motion.div>
            <ReactTooltip
            id={stuff.name}
            effect="solid"
            arrowColor='#fff'
            className='skills-tooltip'
          >
            {stuff.desc}


            </ReactTooltip>
            </>
                ))}
              </motion.div>
            </motion.div>
          ))}

  
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  Skills,
  'Skills',
  'app__whitebg',
);