import React from 'react'

function Nav() {
  return (
    <div className='header-container'>
        <div className='header'>
        <div className='nav'>
            <div >
                Moskol Engineering
            </div>

            <div className="header-list">
                <div>
                    <p><a href='/'>HOME</a></p>
                    <p><a href='/cctv'>CCTV</a></p>
                    <p><a href='/inverters'>INVERTERS</a></p>
                    <p><a href='/batteries'>BATTERIES</a></p>
                </div>
            </div>

            <div>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Nav