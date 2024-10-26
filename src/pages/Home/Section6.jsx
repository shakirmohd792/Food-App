import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from "../../assets/blog/review-author-1.jpg"
import User2 from "../../assets/blog/review-author-2.jpg"
import User3 from "../../assets/blog/review-author-3.jpg"
import User4 from "../../assets/blog/review-author-5.jpg"

const Section6 = () => {
    return (

        <>
            <section className='blog_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="user_img">
                                        <img src={User1} alt="User1" className='img-fluid' />
                                    </div>
                                    <div className='text-center'>
                                        <p>" Etiam sapien sem at sagittis congue augue massa varius
                                            sodales sapien undo tempus dolor egestas magna suscipit magna
                                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className="item_rating mb-2">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="user_img">
                                        <img src={User2} alt="User2" className='img-fluid' />
                                    </div>
                                    <div className='text-center'>
                                        <p>" Etiam sapien sem at sagittis congue augue massa varius
                                            sodales sapien undo tempus dolor egestas magna suscipit magna
                                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className="item_rating mb-2">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="user_img">
                                        <img src={User3} alt="User3" className='img-fluid' />
                                    </div>
                                    <div className='text-center'>
                                        <p>" Etiam sapien sem at sagittis congue augue massa varius
                                            sodales sapien undo tempus dolor egestas magna suscipit magna
                                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className="item_rating mb-2">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="user_img">
                                        <img src={User4} alt="User4" className='img-fluid' />
                                    </div>
                                    <div className='text-center'>
                                        <p>" Etiam sapien sem at sagittis congue augue massa varius
                                            sodales sapien undo tempus dolor egestas magna suscipit magna
                                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                        <div className="item_rating mb-2">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <h5>BY AMELIE NEWLOVE</h5>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default Section6
