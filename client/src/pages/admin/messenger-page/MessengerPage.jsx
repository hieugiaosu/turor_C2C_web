import React from 'react';
import './messenger-page.css'
import { getMessages } from '../../../api/admin/admin';
import {Container, Row, Col} from 'react-bootstrap'
import UserListBlock from '../../../components/admin/messenger/UserListBlock';
import UserChatBoard from '../../../components/admin/messenger/UserChatBoard';

export default function MessengerPage() {
    // eslint-disable-next-line no-unused-vars
    const [messageData, setMessageData] = React.useState([]);
    const [userList, setUserList] = React.useState([]);
    const [currentMessagesData, setCurrentMessagesData] = React.useState([]);
    
    React.useEffect(() => {
        let messageData = getMessages();
        messageData = messageData.filter((user) => user.messages.length>0)
        setMessageData(messageData);
        messageData.sort((a, b) => {
            //2021-07-01T20:02:00Z
            let aTime = a.messages[a.messages.length - 1].timestamp
            let bTime = b.messages[b.messages.length - 1].timestamp
            // convert 2021-07-01T20:02:00Z to value
            aTime = new Date(aTime).getTime()
            bTime = new Date(bTime).getTime()
            return  -aTime + bTime
        });

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

        setCurrentMessagesData(messageData[0])
        
    }, [])

    const handleChooseFriend = (name) => {
        let chosenFriend = messageData.find((user) => user.name === name)
        setCurrentMessagesData(chosenFriend)
    }

    return (<>
        <Container className='page'>
            <Row style={{height: '100%', justifyContent: 'center'}}>
                <Col xs={4} style={{height: '100%', marginLeft: '10px', marginRight: '10px'}}>
                    <UserListBlock userList={userList} handleChooseFriend={ handleChooseFriend} />
                </Col>
                <Col xs={7} style={{height: '100%', marginLeft: '10px', marginRight: '10px'}}>
                    <UserChatBoard imageSrc={currentMessagesData.photo}
                        name={currentMessagesData.name} isActive={currentMessagesData.isActive}
                        messages={currentMessagesData.messages} />
                </Col>
            </Row>
        </Container>
    </>
    );
}