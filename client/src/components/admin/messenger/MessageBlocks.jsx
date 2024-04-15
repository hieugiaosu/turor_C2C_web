// import React from 'react';
import MessageBlock from "./MessageBlock";

export default function MessageBlocks({data}) {
    /*
    {
            "id": 1,
            "name": "John Doe",
            "photo": "https://randomuser.me/api/portraits/men/1.jpg",
            "isActive": true,
            "messages": [
                {
                    "content": "Hello, how are you?",
                    "timestamp": "2021-07-01T12:00:00Z",
                    "isSent": true
                },
                {
                    "content": "I'm fine, thank you!",
                    "timestamp": "2021-07-01T12:01:00Z",
                    "isSent": false
                },
                {
                    "content": "How about you?",
                    "timestamp": "2021-07-01T12:02:00Z",
                    "isSent": true
                },
                {
                    "content": "I'm doing great!",
                    "timestamp": "2021-07-01T12:03:00Z",
                    "isSent": false
                },
                {
                    "content": "That's good to hear!",
                    "timestamp": "2021-07-01T12:04:00Z",
                    "isSent": true
                }
            ]
        }
    */
    
    console.log(data)

    return (
        <>
            {
                data.messages.map((message, index) => {
                    let name = data.name;
                    let photo = data.photo;
                    let isActive = data.isActive;
                    // let content = data.messages[index];
                    return (
                <MessageBlock key={index} data={[name, photo, isActive]} />
            )})}
    </>
    );
}