import { useEffect, useState } from "react";
import "./NavigatorStyle.css";
import { Link, useLocation } from "react-router-dom";
function AdminNavigator() {
  const location = useLocation();
  const [feature, setFeature] = useState(location.pathname.slice(1));
  useEffect(() => {
    setFeature(location.pathname.slice(1));
  }, [location]);
  return (
    <>
      <div className="col-2 m-0 vh-100 admin-navigator">
        <div className="row justify-content-center align-items-center fw-bold py-3 me-0">
          <span className="material-symbols-outlined logo me-2">school</span>{" "}
          BK-TUTOR
        </div>
        <Link
          to={""}
          className={
            "row ms-2 ps-2 mt-5 mb-4 me-0 " +
            (feature == "admin" ? "selected" : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">
            bar_chart_4_bars
          </span>{" "}
          Dashboard
        </Link>
        <Link
          to={"pages"}
          className={
            "row ms-2 ps-2 mt-2 mb-4 me-0 " +
            (feature.search("pages") != -1 ? "selected" : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">select_window</span>
          Pages
        </Link>
        <Link
          to={"user_management"}
          className={
            "row ms-2 ps-2 mt-2 mb-4 me-0 " +
            (feature.search("user_management") != -1
              ? "selected"
              : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">group</span> User
          Management
        </Link>
        <Link
          to={"inbox"}
          className={
            "row ms-2 ps-2 mt-2 mb-4 me-0 " +
            (feature.search("inbox") != -1 ? "selected" : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">chat</span> Inbox
        </Link>
        <Link
          to={"notifications"}
          className={
            "row ms-2 ps-2 mt-2 mb-4 me-0 " +
            (feature.search("notifications") != -1
              ? "selected"
              : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">notifications</span>{" "}
          Notifications
        </Link>
        <Link
          to={"earning"}
          className={
            "row ms-2 ps-2 mt-2 mb-4 me-0 " +
            (feature.search("earning") != -1 ? "selected" : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">settings</span>{" "}
          Earning
        </Link>
        <Link
          to={"settings"}
          className={
            "row ms-2 ps-2 mt-2 mb-4 me-0 " +
            (feature.search("settings") != -1 ? "selected" : "text-secondary")
          }
        >
          <span className="material-symbols-outlined me-2">settings</span>{" "}
          Settings
        </Link>
      </div>
    </>
  );
}
export default AdminNavigator;
