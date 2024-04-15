const rawMessageData = {
    "data": [
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
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "photo": "https://randomuser.me/api/portraits/women/2.jpg",
            "isActive": false,
            "messages": [
                {
                    "content": "Hey!",
                    "timestamp": "2021-07-01T14:00:00Z",
                    "isSent": true
                },
                {
                    "content": "Hello",
                    "timestamp": "2021-07-01T14:01:00Z",
                    "isSent": true
                }
            ]
        },
        {
            "id": 3,
            "name": "Alice Smith",
            "photo": "https://randomuser.me/api/portraits/women/9.jpg",
            "isActive": true,
            "messages": [
                {
                    "content": "Hi there!",
                    "timestamp": "2021-07-01T16:00:00Z",
                    "isSent": false
                },
                {
                    "content": "Hello",
                    "timestamp": "2021-07-01T16:01:00Z",
                    "isSent": true
                }
            ]
        },
        {
            "id": 4,
            "name": "Bob Johnson",
            "photo": "https://randomuser.me/api/portraits/men/8.jpg",
            "isActive": false,
            "messages": [
                {
                    "content": "Hi!",
                    "timestamp": "2021-07-01T18:00:00Z",
                    "isSent": false
                },
                {
                    "content": "Hello",
                    "timestamp": "2021-07-01T18:01:00Z",
                    "isSent": true
                }
            ]
        },
        {
            "id": 5,
            "name": "Eve Williams",
            "photo": "https://randomuser.me/api/portraits/women/1.jpg",
            "isActive": true,
            "messages": [
                {
                    "content": "Hey!",
                    "timestamp": "2021-07-01T20:00:00Z",
                    "isSent": true
                },
                {
                    "content": "Hello",
                    "timestamp": "2021-07-01T20:01:00Z",
                    "isSent": false
                }
            ]
        }
    ]
}

export function getMessages()
{
    // fetch data with user token, blah blah
    return rawMessageData.data;
}