import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{marginTop:"40vh"}}>404 <span style={{color:'crimson'}}>Page not found!</span></h1>

        <Link to='/'>
            <button style={{width:'280px',
             height:'50px',
             color:'white',
             backgroundColor:'#33ADFF',
             marginTop:'20px',
             border:'none',
            cursor:'pointer'
        }}>Back to home</button>
        </Link>
            
        </div>
    )
}

export default NotFound
