import React from 'react'
import {
    Card, CardBody, Form,
    TabContent, TabPane, Nav,
    NavItem, NavLink, Button,
    CardTitle, CardText, Row, Col} from 'reactstrap';

export const SidebarLeft = () => {
    return (
        <div className='col'>
            <Card>
                <CardBody>
                    <h4>Busqueda</h4>
                    <Form>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-describedby="button-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </div>)
}