import React, { useEffect } from 'react'
import { useState } from 'react'
import { Images } from '../../constants'
import {urlFor,client} from '../../client'
import './CTA.scss'

const CTA = () => {

    const [resume, setResume] = useState([])

    useEffect(() => {
        const query = '*[_type=="CTA"] `file->{ url }}`';
    
        client.fetch(query)
        .then((data)=>{
          setResume(data);
        })
      }, [])
    

  return (
    <div className='CTA'>
        <a href={Images.Murtaza_Resume}>Download Resume</a>
    </div>
  )
}

export default CTA