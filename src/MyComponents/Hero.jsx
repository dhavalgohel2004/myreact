import React from 'react'
import './Hero.css'
import RightImg from '../assets/img-miro.png'

const Hero = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column align-item-center justify-content-center'>
            <div className='text1'>
              <p className='display-3 fw-bold inter text-center text-lg-start'>
                Take ideas from better to best
              </p>
            </div>
            <div className='text2'>
              <p className='fs-5 w-75 inter text-center text-lg-start w-100'>
                Miro is your team's visual platform to connect, collabrate and
                create - together
              </p>
            </div>
            <div className='form'>
              <form action=''>
                <input
                  type='email'
                  placeholder='Enter your work email'
                  className='p-3 w-100 rounded-5 border-1'
                  name='mail'
                  id='mail'
                />
                <div className='btn-bottom my-2'>
                  <div className='btn btn-primary p-3 w-100 rounded-5 border-1 d-flex align-items-center justify-content-center inter'>
                    Sign up free
                    <span className='material-symbols-outlined align-content-center mt-1 ms-2'>
                      arrow_right
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className='caption'>
              <p className='text-black-50 small inter text-center text-lg-start'>
                Collaborate with your team within minutes
              </p>
            </div>
            <div className='rating my-5 my-lg-0 d-flex justify-content-lg-start justify-content-center'>
              <div className='main p-2 bg-black-50 d-flex bg-light-grey w-75 rounded-4 justify-content-center align-items-center'>
                <div className="row">
                <div className='col-sm-6 text-center p-0'>
                  <div className='stars'>
                    <span class='material-symbols-outlined text-warning'>
                      star
                    </span>
                    <span class='material-symbols-outlined text-warning'>
                      star
                    </span>
                    <span class='material-symbols-outlined text-warning'>
                      star
                    </span>
                    <span class='material-symbols-outlined text-warning'>
                      star
                    </span>
                    <span class='material-symbols-outlined text-warning'>
                      star
                    </span>
                    <p className='small fw-semibold inter m-0'>
                      Based on 5149+ reviews:
                    </p>
                  </div>
                </div>
                <div className='col-sm-6 align-content-center'>
                  <div className='brands d-flex mx-1 justify-content-center'>
                    <p className='mx-2 m-0 fw-bold fs-6'>GetApp</p>
                    <p className='mx-2 m-0 fw-bold fs-6'>Capterra</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div className='img'>
              <img src={RightImg} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
