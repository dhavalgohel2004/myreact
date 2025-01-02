import React from 'react'
import logo from '../assets/svg.png'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='nav-bar-main'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                  <Link className='navbar-brand p-0 mb-3' to='/'>
                    <img src={logo} className='img-fluid' alt='' />
                  </Link>
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='navbar-toggler-icon'></span>
                  </button>
                  <div className='collapse navbar-collapse' id='navbarText'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                      <li className='nav-item'>
                        <Link className='nav-link text-black inter d-flex align-items-center' to='caption'>
                          Product
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link text-black inter d-flex align-items-center' to='brand'>
                          Solution
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link text-black inter d-flex align-items-center' to='collabrationhead'>
                          Resources
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link text-black inter' to='collabrationcontant'>
                          Enterprise
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link text-black inter' to='wtogether'>
                          Pricing
                        </Link>
                      </li>
                    </ul>
                    <span className='navbar-text'>
                      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item inter align-content-center'>
                          <Link
                            className='nav-link text-black d-flex align-items-center'
                            to='connect'
                          >
                            <span className='material-symbols-outlined fs-4 align-content-center'>
                              public
                            </span>
                            EN
                          </Link>
                        </li>
                        <li className='nav-item align-content-center inter'>
                          <Link className='nav-link text-black' to='#'>
                            Contact Sales
                          </Link>
                        </li>
                        <li className='nav-item align-content-center inter'>
                          <Link className='nav-link text-black' to='#'>
                            Login
                          </Link>
                        </li>
                        <li className='nav-item inter'>
                          <Link className='nav-link text-black' to='#'>
                            <div className='btn btn-primary rounded-5 p-2 px-3 fs-6 d-flex justify-content-center align-items-center'>
                              Sign up free
                              <span className='material-symbols-outlined px-1'>
                                arrow_right_alt
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar
