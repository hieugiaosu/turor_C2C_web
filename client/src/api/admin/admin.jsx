const rawMessageData = {
    "data": [{
        "id": 1,
        "name": "John Doe",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "isActive": true,
        "messages": [
            {
                "content": "Hello, how are you?",
                "timestamp": "2024-04-19T12:00:00Z",
                "isSent": true
            },
            {
                "content": "I'm fine, thank you!",
                "timestamp": "2024-04-19T12:01:00Z",
                "isSent": false
            },
            {
                "content": "How about you?",
                "timestamp": "2024-04-19T12:02:00Z",
                "isSent": true
            },
            {
                "content": "I'm doing great!",
                "timestamp": "2024-04-19T12:03:00Z",
                "isSent": false
            },
            {
                "content": "That's good to hear!",
                "timestamp": "2024-04-19T12:04:00Z",
                "isSent": true
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "photo": "https://randomuser.me/api/portraits/women/2.jpg",
        "isActive": false,
        "messages": [
            {
                "content": "Hi, nice to meet you!",
                "timestamp": "2024-04-19T13:00:00Z",
                "isSent": true
            },
            {
                "content": "Nice to meet you too!",
                "timestamp": "2024-04-19T13:01:00Z",
                "isSent": false
            },
            {
                "content": "How's your day going?",
                "timestamp": "2024-04-19T13:02:00Z",
                "isSent": true
            }
        ]
    },
    {
        "id": 3,
        "name": "Robert Johnson",
        "photo": "https://randomuser.me/api/portraits/men/3.jpg",
        "isActive": false,
        "messages": [
            {
                "content": "Good morning!",
                "timestamp": "2024-04-19T08:00:00Z",
                "isSent": true
            },
            {
                "content": "Good morning, Robert!",
                "timestamp": "2024-04-19T08:01:00Z",
                "isSent": false
            },
            {
                "content": "How are you today?",
                "timestamp": "2024-04-19T08:02:00Z",
                "isSent": true
            }
        ]
    }, {
        "id": 4,
        "name": "Emily Davis",
        "photo": "https://randomuser.me/api/portraits/women/4.jpg",
        "isActive": false,
        "messages": [
            {
                "content": "Hello, are you available for a meeting?",
                "timestamp": "2024-04-19T09:00:00Z",
                "isSent": true
            },
            {
                "content": "Yes, I am. What time?",
                "timestamp": "2024-04-19T09:01:00Z",
                "isSent": false
            },
            {
                "content": "How about 10 AM?",
                "timestamp": "2024-04-19T09:02:00Z",
                "isSent": true
            },
            {
                "content": "That works for me.",
                "timestamp": "2024-04-19T09:03:00Z",
                "isSent": false
            },
            {
                "content": "Great, see you then.",
                "timestamp": "2024-04-19T09:04:00Z",
                "isSent": true
            },
            {
                "content": "See you!",
                "timestamp": "2024-04-19T09:05:00Z",
                "isSent": false
            }
        ]
    }, {
        "id": 5,
        "name": "Michael Wilson",
        "photo": "https://randomuser.me/api/portraits/men/5.jpg",
        "isActive": true,
        "messages": [{
                "content": "Good night",
                "timestamp": "2024-04-19T09:05:00Z",
                "isSent": false
            }]
    }, {
        "id": 6,
        "name": "Jack Johnson",
        "photo": "https://randomuser.me/api/portraits/men/6.jpg",
        "isActive": true,
        "messages": [{
            "content": "Can you give me a call?",
            "timestamp": "2024-04-19T09:00:00Z",
            "isSent": true
        }, {
            "content": "Sure, what's up?",
            "timestamp": "2024-04-19T09:01:00Z",
            "isSent": false
        }, {
            "content": "I need to discuss something with you.",
            "timestamp": "2024-04-19T09:02:00Z",
            "isSent": true
        }, {
            "content": "I'll call you later.",
            "timestamp": "2024-04-19T09:03:00Z",
            "isSent": false
        }]
    }, {
        "id": 7,
        "name": "Lily Brown",
        "photo": "https://randomuser.me/api/portraits/women/7.jpg",
        "isActive": true,
        "messages": [{
            "content": "Please send me the report.",
            "timestamp": "2024-04-19T09:00:00Z",
            "isSent": true
        }, {
            "content": "I need it for the meeting.",
            "timestamp": "2024-04-19T09:00:05Z",
            "isSent": true
        }, {
            "content": "It's is very important.",
            "timestamp": "2024-04-19T09:00:05Z",
            "isSent": true
        }, {
            "content": "I'll send it to you right away.",
            "timestamp": "2024-04-19T09:01:00Z",
            "isSent": false
        }]
    }
    ]
}

// Base Table

/*
CREATE TABLE TinNhan(
	ID INT AUTO_INCREMENT PRIMARY KEY,
	ThoiGian DATETIME,
    NoiDung VARCHAR(255),
    NguoiGui VARCHAR(50),
    NguoiNhan VARCHAR(50)
);

Load message from 2 user with user token

bla bla ...



getMessagesWithOther(otherID)
example json data:
{
    "id": 1,
    "name": "John Doe",
    "photo": "https://randomuser.me/api/portraits/men/1.jpg",
    "isActive": true,
    "messages": [
        {
            "content": "Hello, how are you?",
            "timestamp": "2024-04-19T12:00:00Z",
            "isSent": true
        },
    ]
}

getUsersMessageWith()
[{
    "id": 1,
    "name": "John Doe",
    "photo": "https://randomuser.me/api/portraits/men/1.jpg",
    "isActive": true,
    "lastMessage": {
        "content": "Hello, how are you?",
        "timestamp": "2024-04-19T12:00:00Z",
        "isSent": true
    }
}, {
    "id": 2,
    "name": "John Doe 2",
    "photo": "https://randomuser.me/api/portraits/men/1.jpg",
    "isActive": true,
    "lastMessage": {
        "content": "Hello, how are you?",
        "timestamp": "2024-04-19T12:00:00Z",
        "isSent": true
    }
}]

sendMessage
{
    "id": 1,
    "content": "Hello, how are you?",
    "timestamp": "2024-04-19T12:00:00Z",
}



*/

export async function getMessagesWithOther(otherID)
{
    // wait 0.5s 
    await new Promise(r => setTimeout(r, 500));

    // fetch data with user token and otherID, blah blah
    const result = rawMessageData.data.find(user => user.id === otherID);
    return result;
}

export async function getUsersMessageWith() {
    // load something
    // wait 0.5s  
    await new Promise(r => setTimeout(r, 500));

    return rawMessageData.data.map(user => {
        let content = "";
        let timestamp = "";
        let isSent = false;
        let messages = user.messages.filter(message => !message.isSent);
        if (messages.length > 0) {
            content = messages[messages.length - 1].content;
            timestamp = messages[messages.length - 1].timestamp;
            isSent = messages[messages.length - 1].isSent;
        }
        return {
            id: user.id,
            name: user.name,
            photo: user.photo,
            isActive: user.isActive,
            lastMessage: {
                content: content,
                timestamp: timestamp,
                isSent: isSent
            }
        }
    });
}