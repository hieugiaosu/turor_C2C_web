/* eslint-disable no-unused-vars */

import {Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import './user-list.css'
import './user-chat-board.css'
import UserAvatar from './UserAvatar';
import React from 'react'

function UserChatInfo(props) {
    /*
    props: {
        imageSrc: string
        name: string
        isActive: boolean
    }
    */
    return (
        <Row className='user-chat-info'>
            <Col xs={2} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                <UserAvatar imageSrc={props.imageSrc} isActive={props.isActive} />
            </Col>
            <Col xs={10} className='padding-0' style={{
                        display: 'flex', alignItems: 'center'
                        }}>
                <Container className='padding-0' style={{width: '80%'}}>
                    <Container className='user-avatar-block padding-0' style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        fontSize: '1.25rem', fontWeight: 'bold'
                        }}>{props.name}</Container>
                    <Container className='user-avatar-block padding-0' style={{
                        display: 'flex', justifyContent: 'flex-start',
                        fontSize: '1rem', color: 'gray', overflow: 'hidden', textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                        }}>{props.isActive ? 'Active now' : 'Offline'}</Container>
                </Container>
                <Container className='padding-0' style={{width: '20%'}}>
                    <Button className='user-chat-info-button'><b>...</b></Button>
                </Container>
            </Col>

        </Row>)
}

function convertTime(timestamp) {
    // 2021-07-01T20:00:00Z
    const date = new Date(timestamp);
    const now = new Date();

    if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear())
    {
        return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
        + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    }
    //return 03:05 20/12/2022
    // can you add zero to first if < 10
    return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
        + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
        + ' ' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
        + '/' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1)
        + '/' + date.getFullYear();
}

function UserChatBox(props) {
    /*props: {
        imageSrc: string
        name: string
        message: string
        timestamp: string
        isSent: boolean
    } */

    return (
        <Container className='user-chat-box'>
            {!props.isSent? (props.imageSrc && <Container className='chat-avatar-container'>
                <UserAvatar imageSrc={props.imageSrc} width='30px' height='30px'/>
                <div style={{ marginLeft: '10px' }}>{convertTime(props.timestamp)}</div>
            </Container>): <Container className='chat-avatar-container' style={{justifyContent: 'flex-end'}}>
                <div style={{ marginLeft: '10px' }}>{convertTime(props.timestamp)}</div>
            </Container>}

            {props.isSent?<Container className='message-box-1-container'>
                    <Container className='message-box-1'>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>{props.message}</div>
                    </Container>
                </Container> :
                <Container className='message-box-2-container'>
                    <Container className='message-box-2'>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>{props.message}</div>
                    </Container>
                </Container>}
        </Container>)
}

export default function UserChatBoard({imageSrc, name, messages, isActive}) {
    /*
    props: {
        imageSrc: string
        name: string
        messages: {
            content: string
            isSent: boolean
            timestamp: string
        }[]
        }
        isActive: boolean
    }
    */
    const scrollRef = React.useRef(null);
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const [inputValue, setInputValue] = React.useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = (event) => {
        event.preventDefault();
        console.log(inputValue);
        setInputValue('');
    };

    return (<>
        <Container className='user-list-block white padding-0'
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <UserChatInfo imageSrc={imageSrc} name={name} isActive={isActive} /> 
            <div ref={scrollRef} style={{ overflowY: 'auto', flexGrow: 1 }}>
                {
                    messages?.map((message, index) => {
                        if (message.isSent)
                            return <UserChatBox key={index} message={message.content}
                                timestamp={message.timestamp} isSent={message.isSent}/>
                        return <UserChatBox key={index} imageSrc={imageSrc} name={name}
                            message={message.content} timestamp={message.timestamp} isSent={message.isSent} />
                    })
                }
            </div>
            <Container className='user-chat-input'>
                <Form style={{width: '100%'}}>
                    <InputGroup className='user-chat-group'>
                        <Form.Control className='user-chat-group-input' type='text' placeholder='Type a message'
                        value={inputValue} onChange={handleInputChange}/>
                        <button className='user-chat-group-button' onClick={handleSendClick}>Send</button>
                    </InputGroup>
                </Form>

                
            </Container>
        </Container>
    </>)
}