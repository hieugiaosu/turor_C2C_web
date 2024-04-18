import React from 'react';
import './messenger-page.css'
import { getMessages } from '../../../api/admin/admin';
import {Container, Row, Col} from 'react-bootstrap'
import UserListBlock from '../../../components/admin/messenger/UserListBlock';

export default function MessengerPage() {
    // eslint-disable-next-line no-unused-vars
    const [messageData, setMessageData] = React.useState([]);
    
    React.useEffect(() => {
        const messageData = getMessages();
        setMessageData(messageData);
    }, [])

    return (<>
        <Container className='page'>
            <Row>
                <Col xs={4}>
                    <UserListBlock/>
                </Col>
                <Col xs={1}></Col>
                <Col xs={7} style={{backgroundColor: 'blue'}}>
                    <h1>Col2</h1>
                </Col>
            </Row>
        </Container>
    </>
    );
}