import React from 'react'
import Twiiter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Youtube from '../assets/youtube.png'
import Linkedin from '../assets/linkedin.png'
import Apple from '../assets/app-store.png'
import Playstore from '../assets/playstore.png'
import './Hero.css'
import './Responsive.css'

const FooterMain = () => {
  return (
    <div className='container-fluid bg-dark-blue py-5'>
      <div className='row'>
        <div className='col-lg-3 py-3 py-lg-0 d-flex justify-content-center align-items-center'>
          <div className='brands'>
            <div className='main d-flex justify-content-around'>
              <img
                src={Twiiter}
                className='img-fluid mx-2 manual-size'
                alt=''
              />
              <img
                src={Facebook}
                className='img-fluid mx-2 manual-size'
                alt=''
              />
              <img
                src={Linkedin}
                className='img-fluid mx-2 manual-size'
                alt=''
              />
              <img
                src={Instagram}
                className='img-fluid mx-2 manual-size'
                alt=''
              />
              <img
                src={Youtube}
                className='img-fluid mx-2 manual-size'
                alt=''
              />
              <p className='text-light d-flex justify-content-center align-items-center m-0'>
              <span class='material-symbols-outlined fs-5'>public</span>EN
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-5 py-3 py-lg-0 d-flex justify-content-center align-items-center'>
          <div className="links d-flex justify-content-center align-items-center">
                <p className='text-light mx-2 m-0 small'>&copy; 2022 Miro</p>
                <p className='text-light mx-2 m-0 small'>Terms of Service</p>
                <p className='text-light mx-2 m-0 small'>Privacy Policy</p>
                <p className='text-light mx-2 m-0 small'>Manage Cookies</p>
          </div>
        </div>
        <div className='col-lg-4 py-3 py-lg-0 d-flex justify-content-center align-items-center'>
          <div className="availableon d-flex">
            <div className="row">
              <div className="col-sm-6 p-0 d-flex justify-content-center">
              <div className="appstore d-flex border rounded-4 px-2 p-resp mx-1 py-2 justify-content-between align-items-center">
                  <div className="img mx-1">
                    <img src={Apple} className='img-fluid p-size' alt="" />
                  </div>
                  <div className="plateform mx-1">
                    <p className='text-light small m-0'>Get it on</p>
                    <p className='text-light fs-5 m-0'>App Store</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-0 d-flex justify-content-center">
              <div className="playstore d-flex border rounded-4 px-3 p-resp mx-1 py-2 justify-content-between align-items-center">
                <div className="img mx-1">
                    <img src={Playstore} className='img-fluid p-size' alt="" />
                  </div>
                  <div className="plateform mx-1">
                    <p className='text-light small m-0'>Get it on</p>
                    <p className='text-light fs-5 m-0 text-nowrap'>Play Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMain
