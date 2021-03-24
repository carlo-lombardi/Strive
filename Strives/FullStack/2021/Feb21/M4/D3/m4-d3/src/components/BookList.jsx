import React from 'react'
import SingleBook from './SingleBook'
import { Form, FormControl, Button } from 'react-bootstrap'


const BookList = (props) =>(
  <div>
     <Form inline>
      <FormControl id="search" type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>


    <SingleBook id="books"  category={props.category} />
    
  </div>
)



export default BookList