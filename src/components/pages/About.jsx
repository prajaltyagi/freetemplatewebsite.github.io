import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
export const About = () => {
  const styles1={
    textDecoration:'none',
     paddingLeft:'5px',
     color:'whitesmoke',
     fontSize:'20px'
      }
      const styles2={
       color:'rgb(224, 139, 11)'
      }
      const styles3={
       marginRight:'20px',
       color:'whitesmoke',
       textDecoration:'none'
      }
      const styles12={
        marginRight:'20px',
        color:'rgb(224, 139, 11)',
        textDecoration:'none'
       }
      const styles4={
        textAlign:'center'
      }
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
<Link to='/'><img src="icons/downloadIcon.svg" width="50px"/></Link> 
    <button class="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > 
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/' style={styles1}><span style={styles2}>Free </span> Template Webiste</Link>
        </li>
      </ul>
      <ul class="d-flex mb-2 mb-lg-0" style={styles3} role="search">
      <Link to='/Home'  style={styles3} >Home</Link>
      <Link to='/About'  style={styles12} >About</Link>
      <Link to='/Contact'   style={styles3} >Contact</Link>
      <Link to='/cover'  style={styles3} >Upload</Link>
      </ul>
    </div>
  </div>
</nav>



<div className='container'>
<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4  text-body-emphasis">About <span style={styles2}>Us</span></h1>
      <p class="fs-5 text-body-secondary">In the realm of web design, free template websites stand out as invaluable resources for individuals and businesses seeking to establish a compelling online presence without the hefty price tag. These platforms offer a diverse array of professionally crafted templates, covering a wide spectrum of styles, functionalities, and industries. From sleek portfolios to dynamic e-commerce sites, there's a template to suit virtually every need and aesthetic preference. What sets these templates apart is not just their cost-free nature, but also their remarkable flexibility and ease of use. With intuitive customization options, users can effortlessly tailor these templates to reflect their unique brand identity and vision. Moreover, the convenience of ready-made designs accelerates the website development process, allowing users to focus more on content creation and strategic growth initiatives. </p>
    </div>

<div style={styles4}>
<img src="images/about.jpg" width=' 800px'/>
</div>
</div>
    </div>
  )
}
export default About;