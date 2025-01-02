import React from 'react'

const CollabrationContant = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='title'>
            <p className='display-6 fw-semibold inter'>Free Forever</p>
          </div>
          <div className='contant'>
            <p className='text-black-50 inter'>
              Our free plan gives you unlimited team members, 3 boards and 300+
              experts made template. Singing up with your work email lets you
              bring in your team faster. See our{' '}
              <a className='text-primary text-decoration-none'>
                Pricing plans </a>
              for more features.
            </p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='title'>
            <p className='display-6 fw-semibold inter'>Easy integration</p>
          </div>
          <div className='contant'>
            <p className='text-black-50 inter'>
              Miro has 100+ powerful integration with tools you already use like
              GSuite, Slack and Jira. So your workflow is seamless. View the
              full list in our
              <a className='text-primary text-decoration-none'> Marketplace.</a>
            </p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='title'>
            <p className='display-6 fw-semibold inter'>Security first</p>
          </div>
          <div className='contant'>
            <p className='text-black-50 inter'>
                We treat your data like you would with the almost care. We follow industry-leading security standards
                 and give you tools to protect intellectual property. Learn more at our
              <a className='text-primary text-decoration-none'> Trust Center.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="btn-mannually  d-flex justify-content-center my-5">
        <div className="btn btn-primary rounded-pill p-2 px-4 fs-5">Sign up free</div>
      </div>
    </div>
  )
}

export default CollabrationContant
