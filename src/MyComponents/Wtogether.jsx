import React from 'react'
import Slider from '../assets/3slider.png'

const Wtogether = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-5 px-5 d-flex flex-column justify-content-center align-items-center">
            <div className="head">
                <p className='inter display-6 fw-semibold'>Wo together, wherever you work</p>
            </div>
            <div className="contant">
                <p className='inter text-black-50'>In the office, remote, or a mix of the two, with miro, your team can connect,
                    collabrate and co-create in one space no matter where you are.
                </p>
            </div>
            <div className="btn-mannual w-100">
                <a href="" className='text-primary inter'>Learn more</a>
            </div>
        </div>
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
            <div className="img">
                <img src={Slider} className='img-fluid' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wtogether
