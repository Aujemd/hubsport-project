import React, { useState } from 'react'
import {
    Card, CardBody, TabContent,
    TabPane, Nav, NavItem,
    NavLink, Button, CardTitle,
    CardText, Row, Col,
    Carousel, CarouselItem, CarouselControl,
    CarouselIndicators, CarouselCaption
} from 'reactstrap';

import classnames from 'classnames';

import paisaje1 from '../../../assets/Paisaje1.jpg'

const items = [
    {
        src: paisaje1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: paisaje1,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: paisaje1,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];


export const DashboardContent = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    return (
        <div className='col-7'>
            <Card>
                <CardBody>
                    <h2>Cerámica Nro. 313</h2>
                    <div>
                        <Nav tabs className="d-flex justify-content-around text-center">
                            <NavItem className="flex-fill">
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <i class="fas fa-camera"></i> Fotos
                            </NavLink>
                            </NavItem>
                            <NavItem className="flex-fill">
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    <i class="fas fa-video"></i> Videos
                            </NavLink>
                            </NavItem>
                            <NavItem className="flex-fill">
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    <i class="fas fa-clipboard"></i> Ficha Tecnica
                            </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Carousel
                                            activeIndex={activeIndex}
                                            next={next}
                                            previous={previous}
                                        >
                                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                            {slides}
                                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                                        </Carousel>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        </div>)
}