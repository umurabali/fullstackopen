import React from 'react'


const Total = (props) => {

    return (
        <p>Number of exercises {props.course.parts[0].exercise} + {props.course.parts[1].exercise} + {props.course.parts[2].exercise}</p>
    )
}


export default Total;