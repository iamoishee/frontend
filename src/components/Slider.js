import React from 'react'
import Style from './css/Slider.css'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={'https://i.redd.it/re4dkhurjey31.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={'https://i2.wp.com/plaindesign.com.au/wp-content/uploads/2020/01/Cover-Photo-for-Facebook_-820-x-312-px.jpg?fit=820%2C312&ssl=1'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfgG4bRcdepSpPpJ68U_ALDTe7aKG4AABkg&usqp=CAU'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider
