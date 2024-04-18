import React from 'react';
import './messenger-page.css'
import { getMessages } from '../../../api/admin/admin';
import {Container, Row, Col} from 'react-bootstrap'
import UserListBlock from '../../../components/admin/messenger/UserListBlock';

export default function MessengerPage() {
    // eslint-disable-next-line no-unused-vars
    const [messageData, setMessageData] = React.useState([]);
    const [userList, setUserList] = React.useState([]);
    
    React.useEffect(() => {
        const messageData = getMessages();
        setMessageData(messageData);
        console.log('messageData', messageData)
        setUserList(messageData.map((user) => {
            let lastMessage = ''
            let messages = user.messages.filter((message) => {
                return !message.isSent
            })

            if (messages.length > 0) {
                lastMessage = messages[messages.length - 1].content
            }

            return {imageSrc: user.photo,
            name: user.name,
            lastMessage,
            isActive: user.isActive}
        }));
    }, [])

    return (<>
        <Container className='page'>
            <Row>
                <Col xs={1}></Col>
                <Col xs={4}>
                    <UserListBlock userList={userList} />
                </Col>
                <Col xs={6} style={{backgroundColor: 'blue'}}>
                    <h1>Col2</h1>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>
    );
}