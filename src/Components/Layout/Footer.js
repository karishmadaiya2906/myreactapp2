import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../Styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
 <div className='conatinerF'>
  <div className='row'>
    <div className='col-md-3 col-lg-2 col-5 ft-1'>
      <h3> <span> Miracle</span> Resturan</h3>
      <p>lorem ipsum Aliquip incididunt aliqua nulla est in.
        lorem ipsum Culpa exercitation cupidatat exercitation Lorem quis adipisicing reprehenderit magna exercitation.
      </p>
      <div className='footer-icon'>
        <i class=' facebook'>
          <FacebookIcon/>
        </i>
        <i class=' instagram'>
          <InstagramIcon/>
        </i>
        <i class=' linkedin '>
          <LinkedInIcon/>
        </i>
      </div>
    </div>
    
    
    
  </div>
 </div>
 <div className='last-footer'>
  <p> MIRACLE RESTAURANTS</p>
 </div>
    </div>
  
    </>
  )
}

export default Footer
