import React from "react";
import Logo from "../../../assets/parents/LOGO.svg";
import EyeIcon from "../../../assets/parents/images/svg-icon/eye-open.svg";
import Banner from "../../../assets/parents/images/banner/rocket.png";

const RegisterComponent = () => {
  return (
    <>
      <>
        {/* Header start  */}
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
                  <p>Đã có tài khoản ?</p>
                  <a
                    className="button button--md button-p-s"
                    href="/parents/login"
                  >
                    Đăng nhập
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
                  <h2 className="register-title">Đăng ký tài khoản</h2>
                  <div className="form-group form-group--2">
                    <div className="form-field form-field--">
                      <label htmlFor="fname">Họ Tên</label>
                      <div className="field-wrapper">
                        <input
                          type="text"
                          placeholder="First Name..."
                          id="fname"
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
                    <div className="form-field form-field--">
                      <div className="field-wrapper">
                        <input type="text" placeholder="Last Name..." />
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
                  <div className="form-group">
                    <div className="form-field form-field--">
                      <label htmlFor="username">Username</label>
                      <div className="field-wrapper">
                        <input
                          type="text"
                          placeholder="Username..."
                          id="username"
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
                  <div className="form-group">
                    <div className="form-field form-field--">
                      <label htmlFor="email">Email</label>
                      <div className="field-wrapper">
                        <input
                          type="email"
                          placeholder="Email address"
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
                  <div className="form-group form-group--2 my-0">
                    <div className="form-field form-field--">
                      <label htmlFor="password">Password</label>
                      <div className="field-wrapper">
                        <input
                          type="password"
                          placeholder="Create Password"
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
                    <div className="form-field form-field--">
                      <label htmlFor="confirmPass">Confirm Password</label>
                      <div className="field-wrapper">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          id="confirmPass"
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
                          onclick="showPassword('confirmPass',this)"
                        >
                          <img src={EyeIcon} alt="eye-icon" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group  form-group--2 align-items-center my-4 py-2">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <p className="form-check-label">
                        Tôi đồng ý với tất cả <a href="#">Điều khoản dịch vụ</a>
                      </p>
                    </div>
                    <button className="button button--md button-i--r">
                      Đăng ký
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
                    <h6>Sign up with</h6>
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
    </>
  );
};

export default RegisterComponent;
