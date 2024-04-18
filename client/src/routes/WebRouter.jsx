import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";
import AdminPage from "../pages/admin/AdminPage";
import UserMangementAdmin from "../pages/admin/user-management/UserManagementAdmin";
import MessengerPage from "../pages/admin/messenger-page/MessengerPage";

function WebRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* main page router */}
        <Route path="/" element={<App></App>}>
          {/* <Route index element={<Home></Home>} /> */}
        </Route>
        {/* admin router */}
        <Route path="admin" element={<AdminPage></AdminPage>}>
          <Route path="pages" element={<></>}></Route>
          <Route
            path="user_management"
            element={<UserMangementAdmin></UserMangementAdmin>}
          ></Route>
          <Route path="notifications" element={<></>}></Route>
          <Route path="inbox" element={<MessengerPage/>}></Route>
          <Route path="settings" element={<></>}></Route>
          <Route index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
