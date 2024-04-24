import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";
import AdminPage from "../pages/admin/AdminPage";
import UserMangementAdmin from "../pages/admin/user-management/UserManagementAdmin";
import MessengerPage from "../pages/admin/messenger-page/MessengerPage";
import StatisticPage from "../pages/admin/statistic-page/StatisticPage";
import HomePage from "../pages/parents/HomePage";
import LoginPage from "../pages/parents/LoginPage";
import Header from "../components/parents/header/Header";
import RegisterPage from "../pages/parents/RegisterPage";

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
          <Route path="earning" element={<StatisticPage/>}></Route>
          <Route path="settings" element={<></>}></Route>
          <Route index element={<></>} />
        </Route>
        {/* start parents router */}
        <Route path="/parents" element={<HomePage />}>
          <Route path="course-list" element={<></>}></Route>
        </Route>
        <Route path="parents/login" element={<LoginPage />}></Route>
        <Route path="parents/register" element={<RegisterPage />}></Route>
        {/* end parents router */}
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
