import React from 'react'
import { Card, Col, Container, Row} from 'react-bootstrap'


const displayBook = (props) => (

  <Container>
    <Row className="justify-content-center mt-3">
      {
          props.category.map(item => (
          <Col xs={12} md={3} className="1">
          <Card key={item.asin} >
          <Card.Img className="img-fluid" variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            { /*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
      </Col>
        ))

      }
    </Row>
  </Container>

)

export default displayBook