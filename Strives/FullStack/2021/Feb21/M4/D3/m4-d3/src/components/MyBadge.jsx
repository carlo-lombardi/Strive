import React from 'react'
import { Badge } from 'react-bootstrap'

const Badges = (props) =>(
  <div>
       <h1>
       <Badge style={{backgroundColor: props.color, color: 'white'}} /*variant={props.color}*/ >{props.text}</Badge>
      </h1>
  </div>
) 

export default Badges