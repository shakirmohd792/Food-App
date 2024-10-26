import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from '../../assets/shop/appstore.png'
import StoreGOOGLE from '../../assets/shop/googleplay.png'
import DownloadImage from '../../assets/shop/e-shop.png'
import Brand1 from '../../assets/brands/brand-11.png'
import Brand2 from '../../assets/brands/brand-12.png'
import Brand3 from '../../assets/brands/brand-13.png'
import Brand4 from '../../assets/brands/brand-14.png'
import Brand5 from '../../assets/brands/brand-15.png'
import Brand6 from '../../assets/brands/brand-16.png'
import Brand7 from '../../assets/brands/brand-17.png'
import Brand8 from '../../assets/brands/brand-18.png'

const Section5 = () => {
    return (
        <>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p>
                                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius
                            </p>
                            <Link to="/">
                                <img src={StoreIOS} alt='IOS' className='img-fluid me-3 store' />
                            </Link>
                            <Link to="/">
                                <img src={StoreGOOGLE} alt='Android' className='img-fluid me-3 store' />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img src={DownloadImage} alt='e-shop' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <div className='d-flex align-items-center justify-content-between'>
                                <div className='brand_img'>
                                <img
                                    className="d-block w-100"
                                    src={Brand1}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand2}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand3}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand4}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand5}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand6}
                                    alt="First slide"
                                />
                                </div>
                                </div>
                                </Carousel.Item>
                            <Carousel.Item>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className='brand_img'>
                                <img
                                    className="d-block w-100"
                                    src={Brand1}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand7}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand2}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand8}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand5}
                                    alt="First slide"
                                />
                                </div>
                                <div className="brand_img">
                                <img
                                    className="d-block w-100"
                                    src={Brand3}
                                    alt="First slide"
                                />
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

export default Section5


