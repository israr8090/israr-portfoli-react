import React from 'react'
import project from './data/projects.json'


const Projects = () => {
  return (
    <>
      <div className="container projects my-5" id="projects">
        <h1>PROJECTS</h1>
        <div className="row  d-flex justify-content-center align-items-center ">
          {project.map((data) => (
            <>
              <div key={data.id} className='my-4 col-md-4 col-lg-4 col-sm-6 mx-4'>
                <div className="card bg-dark text-light" style={{ width: '22rem', border: '1px solid yellow',
                      borderRadius: '10px', boxShadow:'5px 5px 10px 10px rgba(101, 175,10, 0.5)' }}
                      data-aos="flip-right"
                      data-aos-duration="1000"
                >
                  <div className="project-img d-flex justify-content-center align-items-center p-3">
                    <img src={data.imageSrc} class="card-img-top" alt="projectimg" 
                    style={{
                      width:'250px', 
                      height:'250px',
                      border: '2px solid yellow',
                      borderRadius: '10px'
                      }} />
                  </div>
                  <div className="card-body text-center ">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                    <a href={data.source} className="btn btn-warning">Code</a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

      </div>
    </>
  )
}

export default Projects