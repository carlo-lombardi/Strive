import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const NavBar = (props) =>  (
  <Navbar variant="dark" bg="dark" expand="lg">
  <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Browse</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)

export default NavBar