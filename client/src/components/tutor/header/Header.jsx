import React, { useState } from "react";
import "../sass/pages/header.scss";
import Logo from "../../../assets/parents/LOGO.svg";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ activeLink }) => {
  const [userEmail, setuserEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Kiểm tra xem có email của người dùng đã lưu trong localStorage không
    const email = localStorage.getItem("userEmail");
    if (email) {
      navigate(path); // Nếu có, chuyển hướng đến đường dẫn được chọn
    } else {
      setShowModal(true); // Nếu không, hiển thị modal
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    navigate("/tutors/login");
  };

  return (
    <>
      <div className="header-section">
        <div className="header-top">
          <div className="responsive-logo">
            <a href="/parents">
              <img src={Logo} alt="brand-logo" />
            </a>
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <a
                  className={activeLink === "home" ? "active" : ""}
                  href="/tutors"
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  style={{cursor: 'pointer'}}
                  className={activeLink === "courses" ? "active" : ""}
                  onClick={() => handleNavigation("/tutors/class")}
                >
                  Các lớp
                </a>
              </li>
              <li>
                <a
                  style={{cursor: 'pointer'}}
                  className={activeLink === "payment" ? "active" : ""}
                  onClick={() => handleNavigation("/tutors/infor")}
                >
                  Thông tin cá nhân
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "contact" ? "active" : ""}
                  href="/tutors/contact"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <span style={{ fontSize: 15, color: "#8C94A3" }}>
              Trang dành cho Gia sư
            </span>
          </div>
          <div className="menu-bar">
            <svg
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5.54468H21"
                stroke="#1D2026"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12.5447H21"
                stroke="#1D2026"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19.5447H21"
                stroke="#1D2026"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <div className="header-bottom-left-wrap">
              <div className="main-logo">
                <a href="/parents">
                  <img src={Logo} alt="brand-logo" />
                </a>
              </div>

              <div className="search-field-wrap">
                <form action="#">
                  <div className="form-searchbox">
                    <span className="icon">
                      <FaSearch />
                    </span>
                    <input
                      type="text"
                      placeholder="Bạn muốn tìm kiếm thông tin gì?"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="header-bottom-right">
            {!localStorage.getItem("userEmail") && (
              <div className="header-btn-wrap">
                <a className="header-btn orange-btn" href="/tutors/register">
                  Tạo tài khoản
                </a>
                <a className="header-btn div-orange-btn" href="/tutors/login">
                  Đăng nhập
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Thông báo</h2>
            <p>Bạn cần đăng nhập để truy cập trang này.</p>
            <div className="modal-buttons">
              <button className="btn btn-secondary" style={{margin: "10px"}} onClick={handleCloseModal}>
                Đóng
              </button>
              <button className="btn btn-primary" style={{margin: "10px"}} onClick={handleLogin}>
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
