/* eslint-disable no-unused-vars */

import {Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import './user-list.css'
import './user-chat-board.css'
import UserAvatar from './UserAvatar';

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

function UserChatBox(props) {
    /*props: {
        imageSrc: string
        name: string
        message: string
        timestamp: string
        isSent: boolean
    } */

    return (
        <Row className='user-chat-box'>
            <Col xs={3} className='blue'>
                <UserAvatar imageSrc={props.imageSrc} width='30px' height='30px' />
            </Col>
            <Col xs={9}  className='green'>
            </Col>
            
        </Row>)
}

export default function UserChatBoard(props) {
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
    return (<>
        <Container className='user-list-block white padding-0' >
            <UserChatInfo imageSrc={props.imageSrc} name={props.name} isActive={props.isActive} /> 
            <div style={{ overflowY: 'auto', maxHeight: 'calc(100% - 75px - 50px - 20px)' }}> {/*100% - user-list-height - search-height - margin-of-search */}
                <UserChatBox imageSrc={props.imageSrc} name={props.name}
                    message={'Hello'} timestamp={'timmeeeeee'} isSent={true} />
            </div>
        </Container>
    </>)
}