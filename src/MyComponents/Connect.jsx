import React from 'react'
import Laptop from '../assets/laptop.png'
const Connect = () => {
  return (
    <div>
      <div className='container my-5'>
      <div className="row">
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
            <div className="img">
                <img src={Laptop} className='img-fluid' alt="" />
            </div>
        </div>
        <div className="col-lg-5 px-5 d-flex flex-column justify-content-center align-items-center">
            <div className="head">
                <p className='inter display-6 fw-semibold'>Connect your tools, close your tabs</p>
            </div>
            <div className="contant">
                <p className='inter text-black-50'>Whether you want to edit your Google docs, resolve Jira issues, or collobrate over Zoom,
                    Miro has 100+ integration with tools you already use and love.
                </p>
            </div>
            <div className="btn-mannual w-100">
                <a href="" className='text-primary inter'>Learn more</a>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Connect
