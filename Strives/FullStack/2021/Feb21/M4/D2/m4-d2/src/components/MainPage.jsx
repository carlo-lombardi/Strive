import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import fantasy from '../Data/fantasy.json'
import history from '../Data/history.json'
import horror from '../Data/horror.json'
import romance from '../Data/romance.json'
import scifi from '../Data/scifi.json'

  class  MyCarousel extends React.Component {

    state = {
        selectedBook: null
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={2}>
                        <Carousel>
                            {
                                fantasy.map(book => (
                                    <Carousel.Item key={book.asin}>
                                        <img
                                            className="d-block w-100" 
                                            src={book.img}
                                            alt={book.title}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2}>
                        <Carousel>
                            {
                                history.map(book => (
                                    <Carousel.Item key={book.asin}>
                                        <img
                                            className="d-block w-100" 
                                            src={book.img}
                                            alt={book.title}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2}>
                        <Carousel>
                            {
                                horror.map(book => (
                                    <Carousel.Item key={book.asin}>
                                        <img
                                            className="d-block w-100" 
                                            src={book.img}
                                            alt={book.title}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2}>
                        <Carousel>
                            {
                                romance.map(book => (
                                    <Carousel.Item key={book.asin}>
                                        <img
                                            className="d-block w-100" 
                                            src={book.img}
                                            alt={book.title}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2}>
                        <Carousel>
                            {
                                scifi.map(book => (
                                    <Carousel.Item key={book.asin}>
                                        <img
                                            className="d-block w-100"
                                            src={book.img}
                                            alt={book.title}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default MyCarousel