import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'
import {AppWrap} from '../../wrapper'
import {urlFor,client} from '../../client'
import './Testimonial.scss'
const Testimonial = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index)=>(
    setCurrentIndex(index)
  );

  useEffect(() => {
    const query = '*[_type=="brands"]';
    const skillsQuery = '*[_type=="testimonials"]';
    



    client.fetch(query)
    .then((data)=>{
      console.log(data)
      setBrands(data);
    })
    client.fetch(skillsQuery)
    .then((data)=>{
      setTestimonials(data);
    })
    
  }, [])

  const test = testimonials[currentIndex];

  return (
    <>
    <h2 className=" head-text">Brands & Testimonials</h2>
    {testimonials.length && (
      <>
        <div className="app__testimonial-item app__flex">
          <img src={urlFor(test.imgurl)} alt={testimonials[currentIndex].name} />
          <div className="app__testimonial-content">
            <p className="p-text">{test.feedback}</p>
            <div>
              <h4 className="bold-text">{test.name}</h4>
              <h5 className="p-text">{test.company}</h5>
            </div>
          </div>
        </div>

        
        <div className="app__testimonial-btns app__flex">
          <div className="app__flex" onClick={()=>handleClick(currentIndex===0 ? testimonials.length- 1:currentIndex-1)}>
            <HiChevronLeft/>
          </div>
          <div className="app__flex" onClick={()=>handleClick(currentIndex===testimonials.length-1 ? 0:currentIndex+1)}>
            <HiChevronRight/>
          </div>
        </div>
      </>
    )}

    <div className="app__testimonials-brands app__flex">
      {brands.map((brand)=>(
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5,type:'tween'}}
        key={brand._id}
        >
          <img src={urlFor(brand.imgUrl)} alt={brand.name} />

        </motion.div>
      ))

      }
    </div>
    
    </>
  )
}

export default AppWrap(Testimonial,"Testimonial","app__primarybg")