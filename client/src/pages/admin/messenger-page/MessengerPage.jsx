import React from 'react';
import { getMessages } from '../../../api/admin/admin';
import MessageBlocks from '../../../components/admin/messenger/MessageBlocks';

export default function MessengerPage() {
    const [messageData, setMessageData] = React.useState([]);
    
    React.useEffect(() => {
        // Fetch messages
        // const messages = getMessages();
        // setMessages(messages);
        const messageData = getMessages();
        setMessageData(messageData);
    }, [])

    return (
        <div>
            <h1>Messenger Page</h1>
            <MessageBlocks data={messageData[0]} />
        </div>
    );
}