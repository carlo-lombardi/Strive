import React from 'react'
import SingleBook from './SingleBook'
import { Form, FormControl} from 'react-bootstrap'


const BookList = (props) =>(
  <div>
     <Form inline>
      <FormControl onKeyPress={filtering()} id="search" type="text" placeholder="Search" className="mr-sm-2" />
    </Form>


    <SingleBook id="books"  category={props.category} />
    
  </div>
)
const filtering = () =>{
    let search = document.querySelector("#search")
    let data = document.querySelector("#books")
    console.log(search);
    console.log(data);

}



export default BookList