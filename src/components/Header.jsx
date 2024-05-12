import React from 'react'

function Header({setCategory}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><span className='badge bg-light text-dark fs-4'>  KalaTv News</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
            <li className='nav-item'>
                <div className='nav-link' onClick={() => setCategory("technology")}> Technology</div>
            </li>
            <li className='nav-item'>
                <div className='nav-link'onClick={() => setCategory("business")} >Business</div>
            </li>
            <li className='nav-item'>
                <div className='nav-link' onClick={() => setCategory("politics")}>Politics</div>
            </li>
            <li className='nav-item'>
                <div className='nav-link' onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className='nav-item'>
                <div className='nav-link' onClick={() => setCategory("health")}>Health</div>
            </li>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header