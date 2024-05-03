import React from "react";
import "./messenger-page.css";
import { getMessages } from "../../../api/admin/admin";
import { Container, Row, Col } from "react-bootstrap";
import UserListBlock from "../../../components/admin/messenger/UserListBlock";
import UserChatBoard from "../../../components/admin/messenger/UserChatBoard";

export default function MessengerPage() {
  const [messageData, setMessageData] = React.useState([]);
  const [userList, setUserList] = React.useState([]);
  const [currentMessagesData, setCurrentMessagesData] = React.useState([]);

  React.useEffect(() => {
    const fetchMessageData = async () => {
      try {
        // Make a GET request to fetch data from the server
        const response = await fetch("http://localhost:3001/admin/inbox/getUserList");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const messageData = await response.json();
  
        // Filter, sort, and process the data as needed
        const filteredMessageData = messageData.filter((user) => user.messages.length > 0);
        filteredMessageData.sort((a, b) => {
          let aTime = a.messages[a.messages.length - 1].timestamp;
          let bTime = b.messages[b.messages.length - 1].timestamp;
          aTime = new Date(aTime).getTime();
          bTime = new Date(bTime).getTime();
          return -aTime + bTime;
        });
        const userList = filteredMessageData.map((user) => {
          let lastMessage = "";
          let messages = user.messages.filter((message) => {
            return !message.isSent;
          });
          if (messages.length > 0) {
            lastMessage = messages[messages.length - 1].content;
          }
          return {
            imageSrc: user.photo,
            name: user.name,
            lastMessage,
            isActive: user.isActive,
          };
        });
  
        // Update the state with the fetched data
        setMessageData(filteredMessageData);
        setUserList(userList);
        setCurrentMessagesData(filteredMessageData[0]);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
  
    // Call the fetchMessageData function when the component mounts
    fetchMessageData();
  }, []);

  const handleChooseFriend = async (name) => {
    try {
      const response = await fetch(`http://localhost:3001/admin/inbox/getMessages?name=${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setCurrentMessagesData(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  return (
    <>
      <Container className="page">
        <Row style={{ height: "100%", justifyContent: "center" }}>
          <Col
            xs={4}
            style={{ height: "100%", marginLeft: "10px", marginRight: "10px" }}
          >
            <UserListBlock
              userList={userList}
              handleChooseFriend={handleChooseFriend}
            />
          </Col>
          <Col
            xs={7}
            style={{ height: "100%", marginLeft: "10px", marginRight: "10px" }}
          >
            <UserChatBoard
              imageSrc={currentMessagesData.photo}
              name={currentMessagesData.name}
              isActive={currentMessagesData.isActive}
              messages={currentMessagesData.messages}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
