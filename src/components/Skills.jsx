import React from 'react'
import skills from './data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skills py-4" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
        {skills.map((data) => (
            <>
              <div className="item" key={data.id} data-aos="flip-left" data-aos-duration="1000">
                <img src={`/assets/${data.imageSrc}`} alt="skillimg" style={{borderRadius:'5px'}} />
                <h3>{data.title}</h3>
              </div>
            </>
        ))}
        </div>
      </div>
    </>
  )
}

export default Skills