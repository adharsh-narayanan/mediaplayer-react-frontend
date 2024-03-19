import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'





function Footer() {
  return ( 
    <div className='w-100 mt-5   d-flex justify-content-center align-items-center flex-column'>
      
      <div className='w-100 row d-flex justify-content-evenly p-5 '   style={{color:'white'} }>

        
          <div className='col-md-4  mt-5  website' >
            <div className='w-75'>
                <h3> <FontAwesomeIcon icon={faVideo} style={{color:'orange',fontSize:'40px'} } />  Video Player</h3>
                <p style={{color:'white' , textAlign:`justify`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nemo, magni harum nesciunt reiciendis, consequuntur repellendus ipsam .</p>
            </div>
          </div>
        
        
         <div className='col-md-2 mt-5'>
            <h3 className='  links'>Links</h3>
            
              <ul className='m-0 p-0' style={{listStyle:`none`,}}>
                <li><Link to={'/'}>Landing page</Link></li>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/Watchhistory'}>Watch history</Link></li>
              </ul>
         </div>
          
       
        
          <div className=' col-md-2 guides mt-5'  >
            <h3>Guides</h3>
            <ul  className='m-0 p-0' style={{listStyle:`none`,}} >
              <li><a>React</a></li>
              <li><a>Bootstrap</a></li>
              <li><a>Bootswatch</a></li>
            </ul>
          </div>
        
       
         <div className='mt-3 col-md-4 contact mt-5' >
            <h3>Contact Us</h3>
            <div className='d-flex'>
              <input className='rounded text-dark form-control' type="text" placeholder='enter your email id' />
              <button className='p-2 w-50 btn btn-warning  ms-2 rounded'>Subscribe</button>
            </div>
            <div className='d-flex mt-3 fs-4 justify-content-around pt-2'>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faSquareXTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
  
            </div>
         </div>
        
      </div>
     
      <div>
        <p>Copyright &copy; 2024 Media Player.Built with react</p>
      </div>
    </div>
  )
}

export default Footer