import {Card, Button} from 'react-bootstrap'

const Footer = () =>(
  <Card className="text-center mt-5">
  <Card.Header>Info</Card.Header>
  <Card.Body>
    <Card.Title>The books</Card.Title>
    <Card.Text>
      More info hit the button
    </Card.Text>
    <Button variant="primary">contact us</Button>
  </Card.Body>
  <Card.Footer className="text-muted">80 years ago</Card.Footer>
</Card>


) 

export default Footer