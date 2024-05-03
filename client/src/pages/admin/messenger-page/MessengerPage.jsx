import React from "react";
import "./messenger-page.css";
import { getMessagesWithOther, getUsersMessageWith, sendMessage } from "../../../api/admin/admin";
import { Container, Row, Col  } from "react-bootstrap";
import UserListBlock from "../../../components/admin/messenger/UserListBlock";
import UserChatBoard from "../../../components/admin/messenger/UserChatBoard";
import SpinnerBoard from "../../../components/admin/messenger/SpinnerBoard";

export default function MessengerPage() {
  // eslint-disable-next-line no-unused-vars
  const [userList, setUserList] = React.useState([]);
  const [userListFiltered, setUserListFiltered] = React.useState([]);
  const [currentMessagesData, setCurrentMessagesData] = React.useState(null);

  const handleChooseFriend = async (otherID) => {
    setCurrentMessagesData(null);
    const chosenFriend = await getMessagesWithOther(otherID);
    setCurrentMessagesData(chosenFriend);
  };

  

  React.useEffect(() => {
    async function fetchData() {
      let usersMessageWithData = await getUsersMessageWith();
      console.log("usersMessageWithData", usersMessageWithData);
      
      setUserList(
        usersMessageWithData
      );

      const firstFriendId = usersMessageWithData[0].id;
      console.log(firstFriendId)

      handleChooseFriend(firstFriendId);
      }
    fetchData();
  }, []);

  React.useEffect(() => {
    setUserListFiltered(userList)
  }, [userList])

  const handleSendMessage = async (id, content) => {
    sendMessage(id, content)
    if (!currentMessagesData) return;

    let usersMessageWithData = await getUsersMessageWith();
    setUserList(
        usersMessageWithData
    );

    const chosenFriend = await getMessagesWithOther(currentMessagesData.id);
    
    const newChosenFriend = { ...chosenFriend };
    newChosenFriend.messages = [...chosenFriend.messages]

    if(newChosenFriend != currentMessagesData)
    {
      setCurrentMessagesData(newChosenFriend);
      console.log("Update messages")
    }
  }

  const handleFilterUser = (keyword) => {
    // filter user list by keyword
    setUserListFiltered(userList.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase())));
  }

  return (
    <>
      
      <Container className="page">
        {userList.length == 0 ? <SpinnerBoard/> : (<Row style={{ height: "100%", justifyContent: "center" }}>
          <Col
            xs={4}
            style={{ height: "100%", marginLeft: "10px", marginRight: "10px" }}
          >
            <UserListBlock
              userList={userListFiltered}
              handleChooseFriend={handleChooseFriend}
              handleFilterUser = {handleFilterUser}
            />
          </Col>
          <Col
            xs={7}
            style={{ height: "100%", marginLeft: "10px", marginRight: "10px" }}
          >
            {currentMessagesData ? <UserChatBoard
              id = {currentMessagesData.id}
              imageSrc={currentMessagesData.photo}
              name={currentMessagesData.name}
              isActive={currentMessagesData.isActive}
              messages={currentMessagesData.messages}
              handleSendMessage={handleSendMessage}
            />: <SpinnerBoard/>}
            
          </Col>
        </Row>)}

        
      </Container>
    </>
  );
}
