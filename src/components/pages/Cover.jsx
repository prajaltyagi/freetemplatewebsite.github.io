import React from 'react'
import {Link} from 'react-router-dom'
export const Cover = () => {
  const styles1={
   backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.8),rgba(10, 10, 10, 0.8)),url("/images/cover.jpg")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh', // Set height as needed
  }
  const styles2={
    color: 'rgb(224, 139, 11)'
  }
  const styles3={
    color:'whitesmoke',
    fontWeight: '300',
    fontSize: '50px',
    paddingTop:'150px',
  }

  const styles4={
    color:'rgb(180, 176, 176)'
  }

  const styles5={
    backgroundColor: 'rgb(224, 139, 11)',
    borderRadius:'50px',
     border:'none',

  }
  const styles6={
    textDecoration:'none',
    color:'whitesmoke'

  }
  return (
    <div style={styles1}>
      
      <div class="px-4 py-5  text-center">
    <h1 class="display-5  " style={styles3}><span style={styles2}> Free </span>Template Webiste</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4" style={styles4}>A <span style={styles2}>template</span> is simply the <span style={styles2}>layout</span> and <span style={styles2}>design</span> the platform applies over your content. Sometimes referred to as a <span style={styles2}>"skin"</span> , templates are interchangeable and affect website elements such as:<span style={styles2}> Fonts. Colors </span>.</p><br/>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn  btn-lg px-4 gap-3" style={styles5}><Link style={styles6} to='/home'>Let Started</Link></button>
       
      </div>
    </div>
  </div>
     

    </div>
    
  )
}
export default Cover