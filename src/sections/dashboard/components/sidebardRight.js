import React, { useState } from 'react'
import {
    Card, CardBody, TabContent,
    TabPane, Nav, NavItem,
    NavLink, Row, Col,
    CardTitle, CardText, Button,
    ListGroup, ListGroupItem
} from 'reactstrap';

import classnames from 'classnames';

import Logo from './logo'

export const SidebarRight = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className='col'>
            <Card>
                <CardBody>
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <i class="fas fa-plug"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    <i class="fas fa-user-circle"></i>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Logo />
                                        <ListGroup>
                                            <ListGroupItem><Button color="primary" size="sm" block outline>Acerca de</Button></ListGroupItem>
                                            <ListGroupItem>
                                                <p className="mt-3 mb-5 ml-1">Prueba</p>
                                                <Button color="primary" size="sm" block outline>Acerca de</Button>
                                            </ListGroupItem>
                                            <ListGroupItem><Button color="primary" size="sm" block outline>Empresa</Button></ListGroupItem>
                                            <ListGroupItem><Button color="primary" size="sm" block outline>Negocios</Button></ListGroupItem>
                                            <ListGroupItem><Button color="primary" size="sm" block outline>Tareas</Button></ListGroupItem>
                                            <ListGroupItem><Button color="primary" size="sm" block outline>Tickets</Button></ListGroupItem>
                                        </ListGroup>
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
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        </div>)
}