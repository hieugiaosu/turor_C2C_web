import React from 'react';
import {Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './user-list.css'
import UserAvatar from './UserAvatar';

function UserBlock(props) 
{
    /*
    props: {
        imageSrc: string
        name: string
        lastMessage: string
        isActive: boolean
    }
    */
    return (
        <Row className='user-block'>
            <Col xs={3} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                <UserAvatar imageSrc={props.imageSrc} isActive={props.isActive} />
            </Col>
            <Col xs={9} className='padding-0'>
                <Container className='user-avatar-block' style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    fontSize: '1.25rem', fontWeight: 'bold'
                    }}>{props.name}</Container>
                <Container className='user-avatar-block' style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    fontSize: '1rem', color: 'gray', overflow: 'hidden', textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                    }}>{props.lastMessage}</Container>
            </Col>
        </Row>
    );

}

export default function UserListBlock(props) {
    /*
    props: {
        userList: [{
            imageSrc: string
            name: string
            lastMessage: string
            isActive: boolean
        }]
    }
    */
    
    const [userList, setUserList] = React.useState([]);

    React.useEffect(() => {
        if (props.userList) setUserList(props.userList)
    }, [props.userList])
    
    return (<>
        <Container style={{ backgroundColor: 'white' }}>
            <Row className='user-list'>
                <Col className='my-block'
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        fontSize: '1.75rem'
                    }}>
                    Chat
                </Col>
                <Col  className='my-block'
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Button className='compose-button'>+ Compose</Button>
                </Col>
            </Row>
            <Row className='search'>
                <InputGroup className='padding-0'>
                <Col xs={2} className='padding-0'><Button className='search-button'><FaSearch /></Button></Col>
                <Col xs={10} className='padding-0'><Form.Control className='search-box' type="search" placeholder="Search" /></Col>  
                </InputGroup>
            </Row>

            {
               userList.map((user, index) => {
                    return (
                        <UserBlock key={index} name={user.name}
                            lastMessage={user.lastMessage}
                            imageSrc={user.imageSrc}
                            isActive={user.isActive} />
                    )
                })
            }

        </Container>
    </>
    );
}

