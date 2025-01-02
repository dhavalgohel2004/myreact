import React from 'react'
import Walmart from '../assets/walmart.png'
import Cisco from '../assets/cisco.png'
import Deloitte from '../assets/deloitte.png'
import Okta from '../assets/okta.png'

const Brand = () => {
  return (
    <div className='container d-flex justify-content-around py-5'>
      <div className='row w-100'>
        <div className='col-sm-3 p-0 d-flex justify-content-center'>
          <img src={Walmart} className='img-fluid' alt='' />
        </div>
        <div className='col-sm-3 p-0 d-flex justify-content-center'>
          <img src={Cisco} className='img-fluid' alt='' />
        </div>
        <div className='col-sm-3 p-0 d-flex justify-content-center'>
          <img src={Deloitte} className='img-fluid' alt='' />
        </div>
        <div className='col-sm-3 p-0 d-flex justify-content-center'>
          <img src={Okta} className='img-fluid' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Brand
