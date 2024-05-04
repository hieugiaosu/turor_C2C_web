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
import CoursesPage from "../pages/parents/CoursesPage";
import TutorsPage from "../pages/parents/TutorsPage";
import ContactPage from "../pages/parents/ContactPage";
import PaymentPage from "../pages/parents/PaymentPage";
import HistoryPage from "../pages/parents/HistoryPage";
import TutorHome from "../pages/tutor/TutorHome";
import TutorInfor from "../pages/tutor/TutorInfor";
import TutorContact from "../pages/tutor/TutorContact";
import TutorClass from "../pages/tutor/TutorClass";
import TutorProfile from "../components/parents/tutorProfile/TutorProfile";
import CourseProfile from "../components/parents/courses/CourseProfile";

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
          <Route path="inbox" element={<MessengerPage />}></Route>
          <Route path="earning" element={<StatisticPage />}></Route>
          <Route path="settings" element={<></>}></Route>
          <Route index element={<></>} />
        </Route>
        {/* start parents router */}
        <Route path="parents" element={<HomePage />} />
        <Route path="parents/courses" element={<CoursesPage />} />
        <Route path="parents/tutors" element={<TutorsPage />} />
        <Route path="parents/tutor-profile" element={<TutorProfile />} />
        <Route path="parents/course-profile" element={<CourseProfile />} />
        <Route path="parents/contact" element={<ContactPage />} />
        <Route path="parents/payment" element={<PaymentPage />} />
        <Route path="parents/history" element={<HistoryPage />} />
        <Route path="parents/login" element={<LoginPage />} />
        <Route path="parents/register" element={<RegisterPage />} />

        {/* end parents router */}

        {/*tutors router*/}
        <Route path="tutors" element={<TutorHome />} />
        <Route path="tutors/infor" element={<TutorInfor />} />
        <Route path="tutors/contact" element={<TutorContact />} />
        <Route path="tutors/class" element={<TutorClass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
