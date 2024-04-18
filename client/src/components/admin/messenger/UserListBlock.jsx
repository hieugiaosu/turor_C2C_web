// import React from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';

function UserBlock() {
    return (
        <Row className="justify-content-between">
            <Col>Chat</Col>
            <Col><Button variant="primary" className='user-list-item'>+ Compose</Button></Col>
        </Row>
    );
}

export default function UserListBlock() {
    // Your code here
    return (<>
        <Container>
            <Row className="justify-content-between">
                <Col>Chat</Col>
                <Col><Button variant="primary" className='user-list-item'>+ Compose</Button></Col>
            </Row>

            <UserBlock/>
        </Container>
    </>
    );
}

