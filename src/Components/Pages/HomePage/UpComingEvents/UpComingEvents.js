import React, { useState } from 'react';
import { Card, Col,  Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "./events.css"

const UpComingEvents = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className='events-bg'>
            <div className='mx-5'>
                <h1 className='text-center pt-5 tag-color'>Current and Upcoming events</h1>
                <Row xs={1} md={2} className="gx-5 mt-5 ">
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }} >
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/bg_3.jpg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5  d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/Image(17).jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/LIVE%20SESSION%20DOCTOR.jpg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-16%20at%202.55.59%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-17%20at%205.34.33%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-18%20at%209.31.24%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-20%20at%2011.05.44%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-20%20at%2011.05.43%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-21%20at%208.05.34%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-21%20at%207.51.38%20PM.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Marathon Event</Card.Title>
                                <p>Delhi</p>
                                <p>22:25:00 - 23:25:00</p>
                                <p>2020-07-09</p>
                                <Card.Text>
                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee
                                </Card.Text>
                                <Card.Link className='mt-4' style={{ float: "right", textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='d-flex justify-content-around mt-5'>

                    <div className='counter1'>
                        <h2 className='text-light text-center p-3'>
                            {counterOn && <CountUp start={0} end={10} duration={1} delay={0}></CountUp>}+<br />COUNTRIES


                        </h2>
                    </div>

                    <div className='counter2'>
                        <h2 className='text-light text-center p-3'>
                            {counterOn && <CountUp start={0} end={150} duration={1} delay={0}></CountUp>}+<br />PROJECTS


                        </h2>
                    </div>
                    <div className='counter3'>
                        <h2 className='text-light text-center p-3'>
                            {counterOn && <CountUp start={0} end={10000} duration={1} delay={0}></CountUp>}+<br />VOLUNTEERS


                        </h2>
                    </div>
                </div>
                <div className='d-flex justify-content-around mt-5'>

                    <div className='counter3'>
                        <h2 className='text-light text-center p-3'>
                            {counterOn && <CountUp start={0} end={20} duration={1} delay={0}></CountUp>}+<br />STATES


                        </h2>
                    </div>
                    <div className='counter1'>
                        <h2 className='text-light text-center p-3'>
                            {counterOn && <CountUp start={0} end={500000} duration={1} delay={0}></CountUp>}+<br />BENIFICIRIES


                        </h2>
                    </div>
                </div>


            </ScrollTrigger>


            <div className='mx-5'>
                <h1 className='text-center pt-5 tag-color'>Fundraisers</h1>
                <p className='text-center text-light'>A little change makes all the difference.</p>
                <Row xs={1} md={2} className="gx-5 mt-5 ">
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }} >
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/fundRaisers/Villagekid.jpg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Test Fund Raiser Kavach</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur adipiscing elit duis tristique
                                </Card.Text>
                                <h5 className='font-bold'>15000 raised of 30000</h5>
                                <div class="progress" style={{width: '100%', height:"5px"}}>
                                    
                                    <div class="progress-bar progress-bar-stripped"
                                        style={{width: '50%', backgroundColor: '#f58634'}}>
                                    </div>
                                    
                                </div>
                                <Card.Link className='mt-4' style={{ textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }} >
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/fundRaisers/fundRaiserKavach.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Kavach Initiative</Card.Title>
                                <Card.Text>
                                Simmi Foundation has taken an initiative Kavach to donate shield masks to the workers who put their lives at risk daily. Let's make a change during this lockdown Let's make a change during this lockdown to help these workers who do not have the luxury to
                                </Card.Text>
                                <h5 className='font-bold'>21000 raised of 150000</h5>
                                <div class="progress" style={{width: '100%', height:"5px"}}>
                                    
                                    <div class="progress-bar progress-bar-stripped"
                                        style={{width: '15%', backgroundColor: '#f58634'}}>
                                    </div>
                                    
                                </div>
                                <Card.Link className='mt-4' style={{ textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }} >
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/fundRaisers/WhatsApp%20Image%202021-11-09%20at%2010.34.25.jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Donating Clothes</Card.Title>
                                <Card.Text>
                                SIMMI FOUNDATION Donated Clothes and blankets to almost 4500 Underprivileged people. As we know how how important is clothes at this winter time, Hence SIMMI Foundation appeal you all to help us in this drive by donating the much you could have.
                                </Card.Text>
                                <h5 className='font-bold'>10000 raised of 100000</h5>
                                <div class="progress" style={{width: '100%', height:"5px"}}>
                                    
                                    <div class="progress-bar progress-bar-stripped"
                                        style={{width: '10%', backgroundColor: '#f58634'}}>
                                    </div>
                                    
                                </div>
                                <Card.Link className='mt-4' style={{ textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="gy-5 d-flex justify-content-center">

                        <Card style={{ width: '28rem' }} >
                            <Card.Img variant="top" src="https://simmifoundation.org/admin/images/fundRaisers/WhatsApp%20Image%202021-11-09%20at%2010.34.25%20(40).jpeg" />
                            <Card.Body>
                                <Card.Title className='tag-color'>Education</Card.Title>
                                <Card.Text>
                                Smart India Multi Management Institute (SIMMI) Foundation working dedicatedly in providing education to underprivileged poor children free of cost. Meanwhile post covid situation our team working on giving Chaupal Classes and almost motivated almost
                                </Card.Text>
                                <h5 className='font-bold'>10000 raised of 500000</h5>
                                <div class="progress" style={{width: '100%', height:"5px"}}>
                                    
                                    <div class="progress-bar progress-bar-stripped"
                                        style={{width: '5%', backgroundColor: '#f58634'}}>
                                    </div>
                                    
                                </div>
                                <Card.Link className='mt-4' style={{ textDecoration: "none", fontSize: "1.2rem", color: "#f58634" }} href="#">Read More </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </div>
            <div className='' style={{height:"60px"}}>

            </div>

        </div>
    );
};

export default UpComingEvents;