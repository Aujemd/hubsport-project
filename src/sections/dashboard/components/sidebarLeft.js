import React from 'react'
import {
    Card, CardBody, Form,
    TabContent, TabPane, Nav,
    NavItem, NavLink, Button,
    CardTitle, CardText, Row, Col
} from 'reactstrap';

export const SidebarLeft = () => {
    return (
        <div className='col'>
            <Card className="vh-100">
                <CardBody>
                    <Form className="h-auto">
                        <h4>Busqueda</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-describedby="button-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </Form>
                    <div className="sidebarLeft-list">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </div>
                </CardBody>
            </Card>
        </div>)
}