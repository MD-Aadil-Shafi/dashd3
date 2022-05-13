import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import ChartComponent from '../components/ChartComponent'

const Chart = () => {
    const location = useLocation()
    return (
        <div className='chart'>
            <h1>Click anywhere on screen to randomise data</h1>

           <ChartComponent/> 

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

export default Chart
