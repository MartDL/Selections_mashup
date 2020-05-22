import React, { useRef, useEffect, useState } from 'react'
import './buildChart.css'
import { select, scaleLinear, scaleBand, min, max, axisLeft, axisBottom } from 'd3'

const Chart = ({data}) => {
    const svgRef = useRef()

    const fireCount = data.map(d => d.measures[0].value)
    // const cities = data.map(d => d.dimensions[0].value)
    useEffect(() => {
        const svg = select(svgRef.current)
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const xValue = d => d.measures[0].value;
        const yValue = d => d.dimensions[0].value;
        const margin = { top: 60, right: 20, bottom: 30, left: 250 }
        const innerWidth = width - margin.left - margin.right
        const innerHeight = height - margin.top - margin.bottom


        const xScale = scaleLinear()
            .domain([min(fireCount) - 50, max(fireCount)])
            .range([0, innerWidth])
            console.log(xScale.range())

  

        const yScale = scaleBand()
            .domain(data.map(yValue))
            .range([0, innerHeight])
            .padding(0.1)  
        
        const g =  svg.append('g') 
            .attr('transform', `translate(${margin.left},${margin.top})`) 
            
        g.append('g').call(axisLeft(yScale))
        g.append('g').call(axisBottom(xScale))
        .attr('transform', `translate(0,${innerHeight})`) 


            

        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('y', d => yScale(yValue(d)))
            .attr('width', d => xScale(xValue(d)))
            .attr('height', yScale.bandwidth())
            .attr('fill', 'red')
            .attr('stroke', 'black')



    }, [])

    return (
        <div>
            <svg ref={svgRef} width="1000" height="550"></svg>
        </div>
    )

}

export default Chart;