import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
export const Contact = () => {
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
      <Link to='/About'  style={styles3} >About</Link>
      <Link to='/Contact'   style={styles12} >Contact</Link>
      <Link to='/cover'  style={styles3} >Upload</Link>
      </ul>
    </div>
  </div>
</nav>










    </div>
  )
}
export default Contact;