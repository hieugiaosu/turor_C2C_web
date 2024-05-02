import React from "react";
import Logo from "../../../assets/parents/LOGO.svg";
import EyeIcon from "../../../assets/parents/images/svg-icon/eye-open.svg";
import Banner from "../../../assets/parents/images/banner/computer-desk.png";

const LoginComponent = () => {
  return (
    <>
      <header className="header-section header-four">
        <div className="container">
          <div className="header-bottom header-four">
            <div className="main-logo">
              <a href="/parents">
                <img src={Logo} alt="brand-logo" />
              </a>
            </div>
            <div className="header-bottom-right">
              <div className="header-btn-wrap d-flex align-items-center">
                <p>Chưa có tài khoản?</p>
                <a
                  className="button button--md button-p-s"
                  href="/parents/register"
                >
                  Tạo tài khoản
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header end  */}
      <main className="register">
        <div className=" register__content">
          {/* Left Content  */}
          <div className="register-left">
            <div className="register-imgWrapper">
              <img src={Banner} alt="rocket" />
            </div>
          </div>
          {/* Right  Content  */}
          <div className="register-right">
            {/* register form */}
            <div className="register-formWrapper">
              <form action="#" className="form">
                <h2 className="register-title">Chào mừng quay trở lại</h2>
                <div className="form-group">
                  <div className="form-field form-field--">
                    <label htmlFor="email">Email</label>
                    <div className="field-wrapper">
                      <input
                        type="email"
                        placeholder="Nhập email của bạn"
                        id="email"
                      />
                      <span className="icon icon--success">
                        <img
                          src="assets/images/svg-icon/checkcircle.svg"
                          alt="success-icon"
                        />
                      </span>
                      <span className="icon icon--warning">
                        <img
                          src="assets/images/svg-icon/Warning.svg"
                          alt="warning-icon"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="form-field form-field--">
                    <label htmlFor="password">Mật khẩu</label>
                    <div className="field-wrapper">
                      <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        id="password"
                      />
                      <span className="icon icon--success">
                        <img
                          src="assets/images/svg-icon/checkcircle.svg"
                          alt="success-icon"
                        />
                      </span>
                      <span className="icon icon--warning">
                        <img
                          src="assets/images/svg-icon/Warning.svg"
                          alt="warning-icon"
                        />
                      </span>
                      <span
                        className="icon icon--eye"
                        onclick="showPassword('password',this)"
                      >
                        <img src={EyeIcon} alt="eye-icon" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group  form-group--2 align-items-center my-2 py-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <p className="form-check-label">Ghi nhớ đăng nhập</p>
                  </div>
                  <button className="button button--md button-i--r">
                    Đăng nhập
                    <span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 12H20.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="form-signup">
                  <h6>Sign in with</h6>
                  <div className="form-signup__wrapper">
                    <a
                      className="social-medaia-box-btn google icon-common"
                      href="#"
                    >
                      {" "}
                      Google{" "}
                    </a>
                    <a
                      className="social-medaia-box-btn facebook icon-common"
                      href="#"
                    >
                      {" "}
                      Facebook{" "}
                    </a>
                    <a
                      className="social-medaia-box-btn apple icon-common"
                      href="#"
                    >
                      {" "}
                      Apple{" "}
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginComponent;
