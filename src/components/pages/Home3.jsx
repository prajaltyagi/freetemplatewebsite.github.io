import React from 'react'

import {Link} from 'react-router-dom'

export const Home3 = () => {
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
     const styles4={
      color:'rgb(66, 65, 65)',
      fontSize:'60px'
     }
     const styles5={
      color: 'rgb(51, 50, 50)',
      fontWeight: 'bolder'
     }
     const styles6={
      color: 'rgb(141, 138, 138)'
     }
     const styles7={
      color:'rgb(66, 65, 65)',
      fontWeight: 'bolder',
     }
     const styles8={
      display:'flex',
      alignItems:'center',
      gap:'20px'
     }
     const styles9={
      width:'40px',
      height:'40px',
      border:'2px solid rgb(224, 139, 11)',
      borderRadius:'50%',
      textAlign:'center',
      cursor:'Pointer',
      fontWeight: 'bold',
      paddingTop:'6px'
     }

     const styles10={
      textDecoration:'none',
      color:'rgb(66, 65, 65)',
     }
     const styles11={
      display:'flex',
      justifyContent:'space-around'
     }
     const styles12={
      marginRight:'20px',
      color:'rgb(224, 139, 11)',
      textDecoration:'none'
     }
     const styles13={
        backgroundColor:'rgb(224, 139, 11)',
        color:'whitesmoke',
        width:'40px',
        height:'40px',
        border:'2px solid rgb(224, 139, 11)',
        borderRadius:'50%',
        textAlign:'center',
        cursor:'Pointer',
        fontWeight: 'bold',
        paddingTop:'6px'
       }
       const styles14={
        textDecoration:'none',
        color:'whitesmoke'
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
      <Link to='/Home'  style={styles12} >Home</Link>
      <Link to='/About'  style={styles3} >About</Link>
      <Link to='/Contact'   style={styles3} >Contact</Link>
      <Link to='/cover'  style={styles3} >Upload</Link>
      </ul>
    </div>
  </div>
</nav>




<header class="py-1 border-bottom ">
  <div class="container-xxl bd-gutter pt-md-1 pb-md-2 ">
      <div class="row">
        <div class="col-xl-8">
          <h1 class="bd-title mt-0" style={styles4}>Free</h1>
          <p class="bd-lead" style={styles2}>Free  Templates,  Layouts & More!</p>
        </div>
        <div style={styles8}>
        <p style={styles7}>Slides</p>
        <p style={styles9}><Link to="/Home" style={styles10}>1</Link></p>
        <p style={styles9}><Link to="/Home2" style={styles10}>2</Link></p>
        <p style={styles13}><Link to="/Home3" style={styles14}>3</Link></p>
        <p style={styles9}><Link to="/Home4" style={styles10}>4</Link></p>
        </div>
        </div>
      </div>
  </header>








  <div class="container">
        <div class="album py-3 ">
            <div class="container">
        
              <div class="row row-cols-1  row-cols-md-3 g-3" >
                <div class="col">
                  <div class="card shadow-sm" >
                    <img src="/images/seven.jpg" width='100px' height='380px' class="bd-placeholder-img card-img-top"/>
                    <div class="card-body" >
                      <p class="card-text " style={styles5}><span style={styles2}> Rehabilitation Yoga </span> Template</p><hr/>
                      <div class="d-flex" style={styles11}>
                      <Link to='https://freewebsitetemplates.com/preview/lawfirm/index.html' target='
                      _blank'><img src="icons/viewIcon.svg" width="30px"/></Link> 
                      <a href='/files/seven.zip' download='tempate.pdf'><img src="icons/downloadIcon.svg" width="30px"/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                      <img src="/images/eight.jpg" width='100px' height='380px' class="bd-placeholder-img card-img-top"/>
                      <div class="card-body" >
                        <p class="card-text " style={styles5}><span style={styles2}> Space Science </span> Template</p><hr/>
                        <div class="d-flex" style={styles11}>
                      <Link to='https://freewebsitetemplates.com/preview/space-science/index.html' target='
                      _blank'><img src="icons/viewIcon.svg" width="30px"/></Link> 
                      <a href='/files/eight.zip' download='tempate.pdf'><img src="icons/downloadIcon.svg" width="30px"/></a>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card shadow-sm">
                      <img src="/images/nine.jpg" width='100px' height='380px' class="bd-placeholder-img card-img-top"/>
                      <div class="card-body" >
                        <p class="card-text " style={styles5}><span style={styles2}> Running Webiste </span> Template</p><hr/>
                        <div class="d-flex" style={styles11}>
                      <Link to='https://freewebsitetemplates.com/preview/gardenwalkthrough/index.html' target='
                      _blank'><img src="icons/viewIcon.svg" width="30px"/></Link> 
                      <a href='/files/nine.zip' download='tempate.pdf'><img src="icons/downloadIcon.svg" width="30px"/></a>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                 </div>
               </div>
              </div>



</div>

  )
}
export default Home3;