import React,{useEffect,useRef,useState} from 'react'
import '../pages/chart.scss';
import * as d3 from 'd3';


const ChartComponent = () => {
    
// console.log(location.state)
    const [data,setData] = useState([190,56,101,180,80])


const randomGenerator = () =>{
    let sample = []
    for(let i = 0; i<5;i++){
        sample.push(Math.floor(Math.random() * (200 - 50) + 50)) // 50 to 200
    }
   setData(sample)
    
}


window.onclick = function(){
    randomGenerator()
    // console.log(data)
}

// let data = [
//     {cat:'A',qty:arr[0]},
//     {cat:'B',qty:arr[1]},
//     {cat:'C',qty:arr[2]},
//     {cat:'D',qty:arr[3]},
//     {cat:'E',qty:arr[4]},
// ]

const svgRef = useRef()

const [dimention,setDimention] = useState({
    width:window.innerWidth,
    height: window.innerHeight
})


useEffect(()=>{

    d3.selectAll('rect').remove()
    DrawChart(data)

    
},[data])

function DrawChart(data){
     //setting svg container
     const w = 600;
     const h = 300;
     const svg = d3.select(svgRef.current)
                 .attr('width',w)
                 .attr('height',h)
                 .style('overflow','visible')
                 .style('margin-top','180px');
 
     //setting scaling
     const xScale = d3.scaleBand()
             .domain(data.map((val,i)=>i))//no. of data point
             .range([0,w])//0 to width in pixel
             .padding(0.5);
 
     const yScale = d3.scaleLinear()
         .domain([0,h])
         .range([h,0]);//top left to 0
 
 
 
     //setting axis(ticks,legends...)
     const xAxis = d3.axisBottom(xScale)
         .ticks(data.length);
     
     const yAxis = d3.axisLeft(yScale)
         .ticks(5);
 
     svg.append('g')
         .call(xAxis)
         .attr('transform',`translate(0, ${h})`);
     
     svg.append('g')
         .call(yAxis);
     
 
     //setting svg data
     svg.selectAll('.bar')
         .data(data)
         .join('rect')
         .attr('x',(v,i)=> xScale(i))   
         .attr('y',yScale)//don't need index as it'll be just vertical line
         .attr('width',xScale.bandwidth())
         .attr('height',val => h - yScale(val))
         .attr('fill','#33ADFF');     
     
}

    
    return (
        <div className='d3'>         
        <svg ref={svgRef}></svg>
            {/* <button onClick={randomGenerator} className='chart--btn'>Randomise</button> */}
        </div>
    )
}

export default ChartComponent
