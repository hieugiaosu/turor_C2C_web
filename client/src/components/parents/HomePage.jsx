import React from "react";
const HomePage = () => {
  return (
    <>
      <>
        {"{"}% extends "layout/layout.html" %{"}"}
        {"{"}% block content %{"}"}
        {/* header section Start*/}
        <div className="offcanvas-overlay" />
        <header className="header-section">
          <div className="header-top">
            <div className="responsive-logo">
              <a href="index.html">
                <img src="assets/images/svg-icon/logo.svg" alt="brand-logo" />
              </a>
            </div>
            <div className="main-menu">
              <ul>
                <li>
                  <a className="active" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="course-list.html">Courses</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="become-instructor.html">Become an Instructor</a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="select-item">
                <div className="select-box">
                  <select className="custom-select sources" title="USD">
                    <option>Euro</option>
                    <option>Pound</option>
                  </select>
                </div>
              </div>
              <div className="select-item">
                <div className="select-box">
                  <select className="custom-select sources" title="English">
                    <option>English</option>
                    <option>Germany</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
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
                  <a href="index.html">
                    <img
                      src="assets/images/svg-icon/logo.svg"
                      alt="brand-logo"
                    />
                  </a>
                </div>
                <div className="borwser-dropdown">
                  <div className="select-box">
                    <select className="custom-select sources" title="Browse">
                      <option>Mozila</option>
                      <option>Chrome</option>
                      <option>Safari</option>
                    </select>
                  </div>
                </div>
                <div className="search-field-wrap">
                  <form action="#">
                    {/* Search Field  */}
                    <div className="form-searchbox">
                      <span className="icon">
                        <img src="assets/images/svg-icon/search.svg" alt="" />
                      </span>
                      <input type="text" placeholder="What do you want learn" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="header-bottom-right">
              <div className="header-cart-wrap">
                <ul>
                  <li>
                    <a className="notification-icon" href="#">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.26855 9.75C5.26731 8.86051 5.44213 7.97957 5.78294 7.15796C6.12375 6.33635 6.62381 5.59031 7.25429 4.96286C7.88476 4.33541 8.6332 3.83895 9.45644 3.5021C10.2797 3.16525 11.1615 2.99467 12.0509 3.00019C15.7625 3.02778 18.7312 6.11282 18.7312 9.83474V10.5C18.7312 13.8577 19.4337 15.8062 20.0524 16.8711C20.1191 16.9849 20.1546 17.1142 20.1553 17.2461C20.156 17.378 20.1219 17.5077 20.0565 17.6222C19.991 17.7367 19.8966 17.8319 19.7826 17.8982C19.6686 17.9646 19.5392 17.9997 19.4073 18H4.59173C4.45985 17.9997 4.33038 17.9645 4.2164 17.8982C4.10242 17.8318 4.00795 17.7366 3.94252 17.6221C3.8771 17.5076 3.84303 17.3778 3.84376 17.2459C3.84449 17.1141 3.87999 16.9847 3.94667 16.8709C4.56573 15.806 5.26855 13.8575 5.26855 10.5L5.26855 9.75Z"
                          stroke="#1D2026"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                          stroke="#1D2026"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="card card-activity notification-box">
                        <div className="card-header">
                          <h2 className="card-title">Recent Activity</h2>
                          <p className="mark-read">Mark as Read</p>
                        </div>
                        <div className="card-body">
                          {/* Activity content  */}
                          <ul className="activity">
                            <li className="activity-item">
                              <div className="activity-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.83927 11.0622C2.09381 9.80558 1.83274 8.32 2.10509 6.88447C2.37744 5.44894 3.16447 4.16221 4.3184 3.26589C5.47232 2.36958 6.91376 1.92534 8.37204 2.0166C9.83033 2.10785 11.2051 2.72833 12.2383 3.7615C13.2715 4.79468 13.892 6.16949 13.9832 7.62777C14.0745 9.08606 13.6303 10.5275 12.734 11.6814C11.8377 12.8354 10.5509 13.6224 9.1154 13.8947C7.67988 14.1671 6.1943 13.906 4.93763 13.1606L4.93764 13.1605L2.86536 13.7526C2.77962 13.7771 2.68889 13.7782 2.60257 13.7559C2.51626 13.7335 2.43749 13.6885 2.37444 13.6254C2.31139 13.5624 2.26634 13.4836 2.24398 13.3973C2.22161 13.311 2.22273 13.2202 2.24723 13.1345L2.83931 11.0622L2.83927 11.0622Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z"
                                    fill="#FF6636"
                                  />
                                  <path
                                    d="M5 8.75C5.41421 8.75 5.75 8.41421 5.75 8C5.75 7.58579 5.41421 7.25 5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75Z"
                                    fill="#FF6636"
                                  />
                                  <path
                                    d="M11 8.75C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25C10.5858 7.25 10.25 7.58579 10.25 8C10.25 8.41421 10.5858 8.75 11 8.75Z"
                                    fill="#FF6636"
                                  />
                                </svg>
                              </div>
                              <div className="activity-info">
                                <p>
                                  {" "}
                                  <span className="username">Kevin</span>{" "}
                                  comments on your lecture “What is ux” in “2021
                                  ui/ux design with figma”
                                </p>
                                <span className="time">Just now</span>
                              </div>
                            </li>
                            <li className="activity-item">
                              <div className="activity-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <div className="activity-info">
                                <p>
                                  {" "}
                                  <span className="username">Kevin</span>{" "}
                                  comments on your lecture “What is ux” in “2021
                                  ui/ux design with figma”
                                </p>
                                <span className="time">5 min ago</span>
                              </div>
                            </li>
                            <li className="activity-item">
                              <div className="activity-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.2"
                                    d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M4.00073 3H13.5007C13.6333 3 13.7605 3.05268 13.8543 3.14645C13.9481 3.24021 14.0007 3.36739 14.0007 3.5V11"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="activity-info">
                                <p>
                                  {" "}
                                  <span className="username">Kevin</span>{" "}
                                  comments on your lecture “What is ux” in “2021
                                  ui/ux design with figma”
                                </p>
                                <span className="time">6 min ago</span>
                              </div>
                            </li>
                            <li className="activity-item">
                              <div className="activity-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.83927 11.0622C2.09381 9.80558 1.83274 8.32 2.10509 6.88447C2.37744 5.44894 3.16447 4.16221 4.3184 3.26589C5.47232 2.36958 6.91376 1.92534 8.37204 2.0166C9.83033 2.10785 11.2051 2.72833 12.2383 3.7615C13.2715 4.79468 13.892 6.16949 13.9832 7.62777C14.0745 9.08606 13.6303 10.5275 12.734 11.6814C11.8377 12.8354 10.5509 13.6224 9.1154 13.8947C7.67988 14.1671 6.1943 13.906 4.93763 13.1606L4.93764 13.1605L2.86536 13.7526C2.77962 13.7771 2.68889 13.7782 2.60257 13.7559C2.51626 13.7335 2.43749 13.6885 2.37444 13.6254C2.31139 13.5624 2.26634 13.4836 2.24398 13.3973C2.22161 13.311 2.22273 13.2202 2.24723 13.1345L2.83931 11.0622L2.83927 11.0622Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z"
                                    fill="#FF6636"
                                  />
                                  <path
                                    d="M5 8.75C5.41421 8.75 5.75 8.41421 5.75 8C5.75 7.58579 5.41421 7.25 5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75Z"
                                    fill="#FF6636"
                                  />
                                  <path
                                    d="M11 8.75C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25C10.5858 7.25 10.25 7.58579 10.25 8C10.25 8.41421 10.5858 8.75 11 8.75Z"
                                    fill="#FF6636"
                                  />
                                </svg>
                              </div>
                              <div className="activity-info">
                                <p>
                                  {" "}
                                  <span className="username">Kevin</span>{" "}
                                  comments on your lecture “What is ux” in “2021
                                  ui/ux design with figma”
                                </p>
                                <span className="time">Just now</span>
                              </div>
                            </li>
                            <li className="activity-item">
                              <div className="activity-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <div className="activity-info">
                                <p>
                                  {" "}
                                  <span className="username">Kevin</span>{" "}
                                  comments on your lecture “What is ux” in “2021
                                  ui/ux design with figma”
                                </p>
                                <span className="time">5 min ago</span>
                              </div>
                            </li>
                            <li className="activity-item">
                              <div className="activity-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.2"
                                    d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M4.00073 3H13.5007C13.6333 3 13.7605 3.05268 13.8543 3.14645C13.9481 3.24021 14.0007 3.36739 14.0007 3.5V11"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="activity-info">
                                <p>
                                  {" "}
                                  <span className="username">Kevin</span>{" "}
                                  comments on your lecture “What is ux” in “2021
                                  ui/ux design with figma”
                                </p>
                                <span className="time">6 min ago</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        width={22}
                        height={18}
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                          stroke="#1D2026"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                          fill="#1D2026"
                          stroke="#1D2026"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                          fill="#1D2026"
                        />
                        <path
                          d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                          stroke="#1D2026"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-btn-wrap">
                <a className="header-btn orange-btn" href="create-account.html">
                  Create Account
                </a>
                <a className="header-btn div-orange-btn" href="sign-in.html">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </header>
        {/*End header-section */}
        <div className="hero-section">
          <div className="container">
            <div className="row st_screenfix">
              <div className="col-xl-5 col-lg-6 d-flex align-items-center">
                <div className="hero-content">
                  <h1>Learn with expert anytime anywhere</h1>
                  <p>
                    Our mision is to help people to find the best course online
                    and learn with expert anytime, anywhere.
                  </p>
                  <a className="button button--lg" href="create-account.html">
                    Create Account
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="hero-thumb">
                  <img src="assets/images/hero-thumb.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End hero-section */}
        <div className="category-section section-padding">
          <div className="container">
            <div className="section-title">
              <h2>Browse with top category</h2>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content badge-color-1">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M25 6H7C6.86868 6 6.73864 6.02586 6.61732 6.07612C6.49599 6.12637 6.38575 6.20003 6.29289 6.29289C6.20003 6.38575 6.12637 6.49599 6.07612 6.61732C6.02586 6.73864 6 6.86868 6 7V25C6 25.1313 6.02586 25.2614 6.07612 25.3827C6.12637 25.504 6.20003 25.6143 6.29289 25.7071C6.38575 25.8 6.49599 25.8736 6.61732 25.9239C6.73864 25.9741 6.86868 26 7 26H25C25.1313 26 25.2614 25.9741 25.3827 25.9239C25.504 25.8736 25.6143 25.8 25.7071 25.7071C25.8 25.6143 25.8736 25.504 25.9239 25.3827C25.9741 25.2614 26 25.1313 26 25V7C26 6.86868 25.9741 6.73864 25.9239 6.61732C25.8736 6.49599 25.8 6.38575 25.7071 6.29289C25.6143 6.20003 25.504 6.12637 25.3827 6.07612C25.2614 6.02586 25.1313 6 25 6ZM19.5 19.5H12.5V12.5H19.5V19.5Z"
                          fill="#564FFD"
                        />
                        <path
                          d="M19.5 12.5H12.5V19.5H19.5V12.5Z"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25 6H7C6.44772 6 6 6.44772 6 7V25C6 25.5523 6.44772 26 7 26H25C25.5523 26 26 25.5523 26 25V7C26 6.44772 25.5523 6 25 6Z"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26 13H29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26 19H29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 13H6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 19H6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 26V29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 26V29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 3V6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 3V6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Label</h4>
                      <span>63,476 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-2">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M25 19.1076L20.4004 23.7072C20.2783 23.8294 20.1266 23.9178 19.9602 23.9639C19.7938 24.0099 19.6182 24.0122 19.4507 23.9703L12.2061 22.1591C12.0702 22.1252 11.943 22.063 11.8326 21.9767L5 16.6339L9.0718 8.97363L15.4868 7.10344C15.716 7.03664 15.9614 7.054 16.1789 7.1524L20.5 9.1076H17.9142C17.7829 9.1076 17.6529 9.13347 17.5315 9.18372C17.4102 9.23398 17.3 9.30764 17.2071 9.4005L12.3153 14.2923C12.214 14.3936 12.1356 14.5155 12.0855 14.6497C12.0354 14.784 12.0148 14.9274 12.0249 15.0703C12.0351 15.2132 12.0758 15.3523 12.1444 15.4781C12.213 15.6039 12.3078 15.7134 12.4224 15.7994L13.1 16.3076C13.7924 16.8269 14.6345 17.1076 15.5 17.1076C16.3655 17.1076 17.2076 16.8269 17.9 16.3076L19.5 15.1076L25 19.1076Z"
                          fill="#23BD33"
                        />
                        <path
                          d="M30.0897 15.2231L27 16.7679L23 9.10768L26.1212 7.5471C26.3557 7.42986 26.6268 7.40939 26.8763 7.4901C27.1257 7.57082 27.3335 7.74626 27.4548 7.97866L30.5289 13.8658C30.5904 13.9835 30.6278 14.1123 30.639 14.2446C30.6501 14.377 30.6348 14.5102 30.5939 14.6365C30.553 14.7629 30.4874 14.8798 30.4008 14.9805C30.3143 15.0812 30.2085 15.1637 30.0897 15.2231V15.2231Z"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.00016 16.634L1.91045 15.0892C1.79167 15.0298 1.68591 14.9473 1.59934 14.8466C1.51277 14.7459 1.44713 14.629 1.40624 14.5026C1.36535 14.3763 1.35004 14.243 1.3612 14.1107C1.37236 13.9784 1.40977 13.8496 1.47124 13.7319L4.54536 7.84475C4.66671 7.61236 4.87447 7.43691 5.12391 7.35619C5.37334 7.27548 5.6445 7.29594 5.879 7.41319L9.00016 8.97377L5.00016 16.634Z"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27 16.7679L25 19.1076L20.4004 23.7073C20.2783 23.8294 20.1266 23.9178 19.9602 23.9639C19.7938 24.01 19.6182 24.0122 19.4507 23.9703L12.2061 22.1592C12.0702 22.1252 11.943 22.063 11.8326 21.9768L5 16.6339"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.9999 19.1077L19.4999 15.1077L17.8999 16.3077C17.2075 16.827 16.3654 17.1077 15.4999 17.1077C14.6345 17.1077 13.7923 16.827 13.0999 16.3077L12.4223 15.7995C12.3077 15.7135 12.2129 15.6039 12.1443 15.4781C12.0758 15.3523 12.035 15.2133 12.0249 15.0704C12.0147 14.9275 12.0354 14.784 12.0855 14.6498C12.1356 14.5156 12.2139 14.3937 12.3152 14.2924L17.207 9.40056C17.2999 9.3077 17.4101 9.23404 17.5315 9.18379C17.6528 9.13353 17.7828 9.10767 17.9141 9.10767H22.9999"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.07166 8.97363L15.4867 7.10344C15.7158 7.03664 15.9613 7.054 16.1788 7.1524L20.4999 9.10761"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 26.6077L10.2326 25.6658C10.0797 25.6276 9.938 25.5538 9.81907 25.4504L7 23"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Business</h4>
                      <span>52,822 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-3">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M2.99933 12.1064H28.9993L29.0001 23.9999C29.0001 24.2651 28.8947 24.5195 28.7072 24.707C28.5196 24.8946 28.2653 24.9999 28.0001 24.9999H4.00006C3.73484 24.9999 3.48049 24.8946 3.29295 24.707C3.10542 24.5195 3.00006 24.2651 3.00006 23.9999L2.99933 12.1064Z"
                          fill="#FD8E1F"
                        />
                        <path
                          d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.9994 21H24.9994"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.9993 21H16.9993"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.99933 12.1064H28.9993"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Finance &amp; Accounting</h4>
                      <span>33,841 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-4">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M27 13H5V19H27V13Z"
                          fill="#E34444"
                        />
                        <path
                          d="M5 27V5"
                          stroke="#E34444"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 7H21V13"
                          stroke="#E34444"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27 13H5V19H27V13Z"
                          stroke="#E34444"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 19V25H5"
                          stroke="#E34444"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>IT &amp; Software</h4>
                      <span>22,649 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-2">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M25 6H7C6.86868 6 6.73864 6.02586 6.61732 6.07612C6.49599 6.12637 6.38575 6.20003 6.29289 6.29289C6.20003 6.38575 6.12637 6.49599 6.07612 6.61732C6.02586 6.73864 6 6.86868 6 7V25C6 25.1313 6.02586 25.2614 6.07612 25.3827C6.12637 25.504 6.20003 25.6143 6.29289 25.7071C6.38575 25.8 6.49599 25.8736 6.61732 25.9239C6.73864 25.9741 6.86868 26 7 26H25C25.1313 26 25.2614 25.9741 25.3827 25.9239C25.504 25.8736 25.6143 25.8 25.7071 25.7071C25.8 25.6143 25.8736 25.504 25.9239 25.3827C25.9741 25.2614 26 25.1313 26 25V7C26 6.86868 25.9741 6.73864 25.9239 6.61732C25.8736 6.49599 25.8 6.38575 25.7071 6.29289C25.6143 6.20003 25.504 6.12637 25.3827 6.07612C25.2614 6.02586 25.1313 6 25 6ZM19.5 19.5H12.5V12.5H19.5V19.5Z"
                          fill="#564FFD"
                        />
                        <path
                          d="M19.5 12.5H12.5V19.5H19.5V12.5Z"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25 6H7C6.44772 6 6 6.44772 6 7V25C6 25.5523 6.44772 26 7 26H25C25.5523 26 26 25.5523 26 25V7C26 6.44772 25.5523 6 25 6Z"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26 13H29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26 19H29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 13H6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 19H6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 26V29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 26V29"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 3V6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 3V6"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Personal Development</h4>
                      <span>63,476 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-6">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z"
                          fill="#1D2026"
                        />
                        <path
                          d="M9.5 13H22.5"
                          stroke="#1D2026"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 17H22.5"
                          stroke="#1D2026"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z"
                          stroke="#1D2026"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Office Productivity</h4>
                      <span>13,932 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-1">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M5.27933 5.37337C5.13029 5.32991 4.97318 5.32173 4.82044 5.3495C4.6677 5.37728 4.52352 5.44023 4.39933 5.53337C4.27513 5.62652 4.17433 5.74731 4.1049 5.88616C4.03547 6.02502 3.99933 6.17813 3.99933 6.33337V23.6667C3.99933 23.822 4.03547 23.9751 4.1049 24.1139C4.17433 24.2528 4.27513 24.3736 4.39933 24.4667C4.52352 24.5599 4.6677 24.6228 4.82044 24.6506C4.97318 24.6783 5.13029 24.6702 5.27933 24.6267L17.0001 21.2082V8.79192L5.27933 5.37337Z"
                          fill="#564FFD"
                        />
                        <path
                          d="M3.99933 6.33337V23.6667C3.99933 23.822 4.03547 23.9751 4.1049 24.1139C4.17433 24.2528 4.27513 24.3736 4.39933 24.4667C4.52352 24.5599 4.6677 24.6228 4.82044 24.6506C4.97318 24.6783 5.13029 24.6702 5.27933 24.6267L27.2793 18.21C27.487 18.1495 27.6695 18.0231 27.7993 17.85C27.9291 17.6769 27.9993 17.4664 27.9993 17.25V12.75C27.9993 12.5337 27.9291 12.3231 27.7993 12.15C27.6695 11.9769 27.487 11.8506 27.2793 11.79L5.27933 5.37337C5.13029 5.32991 4.97318 5.32173 4.82044 5.3495C4.6677 5.37728 4.52352 5.44023 4.39933 5.53337C4.27513 5.62652 4.17433 5.74731 4.1049 5.88616C4.03547 6.02502 3.99933 6.17813 3.99933 6.33337V6.33337Z"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23 19.4581V24C23 24.2652 22.8946 24.5196 22.7071 24.7071C22.5196 24.8946 22.2652 25 22 25H18C17.7348 25 17.4804 24.8946 17.2929 24.7071C17.1054 24.5196 17 24.2652 17 24V8.79187"
                          stroke="#564FFD"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Marketing</h4>
                      <span>12,068 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-6">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M26 8H21.9993L19.9993 5H11.9993L9.99927 8H6C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10V24C4 24.5304 4.21071 25.0391 4.58579 25.4142C4.96086 25.7893 5.46957 26 6 26H26C26.5304 26 27.0391 25.7893 27.4142 25.4142C27.7893 25.0391 28 24.5304 28 24V10C28 9.46957 27.7893 8.96086 27.4142 8.58579C27.0391 8.21071 26.5304 8 26 8V8ZM16 21C15.11 21 14.24 20.7361 13.4999 20.2416C12.7599 19.7471 12.1831 19.0443 11.8425 18.2221C11.5019 17.3998 11.4128 16.495 11.5865 15.6221C11.7601 14.7492 12.1887 13.9474 12.818 13.318C13.4474 12.6887 14.2492 12.2601 15.1221 12.0865C15.995 11.9128 16.8998 12.0019 17.7221 12.3425C18.5443 12.6831 19.2471 13.2599 19.7416 13.9999C20.2361 14.74 20.5 15.61 20.5 16.5C20.5 17.6935 20.0259 18.8381 19.182 19.682C18.3381 20.5259 17.1935 21 16 21V21Z"
                          fill="#1D2026"
                        />
                        <path
                          d="M26 26H6C5.46957 26 4.96086 25.7893 4.58579 25.4142C4.21071 25.0391 4 24.5304 4 24V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H9.99927L11.9993 5H19.9993L21.9993 8H26C26.5304 8 27.0391 8.21071 27.4142 8.58579C27.7893 8.96086 28 9.46957 28 10V24C28 24.5304 27.7893 25.0391 27.4142 25.4142C27.0391 25.7893 26.5304 26 26 26Z"
                          stroke="#1D2026"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 21C18.4853 21 20.5 18.9853 20.5 16.5C20.5 14.0147 18.4853 12 16 12C13.5147 12 11.5 14.0147 11.5 16.5C11.5 18.9853 13.5147 21 16 21Z"
                          stroke="#1D2026"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Photography &amp; Video</h4>
                      <span>6,196 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-3">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M4.13848 9.32715C4.04778 9.48098 3.99997 9.6563 4 9.83487V22.1652C4 22.3426 4.04721 22.5169 4.13679 22.67C4.22637 22.8232 4.35509 22.9498 4.50974 23.0368L15.5097 29.2243C15.6594 29.3085 15.8283 29.3527 16 29.3527L16.0013 29.3527L16.1186 16L4.1385 9.32717L4.13848 9.32715Z"
                          fill="#FD8E1F"
                        />
                        <path
                          d="M28 22.1651V9.83484C28 9.6574 27.9528 9.48316 27.8632 9.32999C27.7736 9.17683 27.6449 9.05025 27.4903 8.96326L16.4903 2.77576C16.3406 2.69157 16.1717 2.64734 16 2.64734C15.8283 2.64734 15.6594 2.69157 15.5097 2.77576L4.50974 8.96326C4.35509 9.05025 4.22637 9.17683 4.13679 9.32999C4.04721 9.48316 4 9.6574 4 9.83484V22.1651C4 22.3426 4.04721 22.5168 4.13679 22.67C4.22637 22.8232 4.35509 22.9497 4.50974 23.0367L15.5097 29.2242C15.6594 29.3084 15.8283 29.3526 16 29.3526C16.1717 29.3526 16.3406 29.3084 16.4903 29.2242L27.4903 23.0367C27.6449 22.9497 27.7736 22.8232 27.8632 22.67C27.9528 22.5168 28 22.3426 28 22.1651Z"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.1278 19.0639V12.5639L10 5.875"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.8621 9.3284L16.1186 16L4.13849 9.32715"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1186 16L16.0013 29.3527"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Lifestyle</h4>
                      <span>2,736 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-4">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M15.0008 7.00049L7.5412 9.79785C7.37689 9.85946 7.23168 9.96322 7.12017 10.0987C7.00866 10.2342 6.93476 10.3967 6.90592 10.5698L4.00079 28.0005L21.4315 25.0953C21.6046 25.0665 21.7671 24.9926 21.9026 24.8811C22.0381 24.7696 22.1418 24.6244 22.2034 24.4601L25.0008 17.0005L15.0008 7.00049ZM14.5001 20.0001C14.0056 20.0001 13.5223 19.8534 13.1111 19.5787C12.7 19.304 12.3796 18.9136 12.1904 18.4568C12.0011 18 11.9516 17.4973 12.0481 17.0123C12.1446 16.5274 12.3827 16.0819 12.7323 15.7323C13.0819 15.3827 13.5274 15.1446 14.0123 15.0481C14.4973 14.9516 15 15.0011 15.4568 15.1904C15.9136 15.3796 16.304 15.7 16.5787 16.1111C16.8534 16.5223 17.0001 17.0056 17.0001 17.5001C17.0001 17.8284 16.9354 18.1535 16.8098 18.4568C16.6841 18.7601 16.5 19.0357 16.2678 19.2678C16.0357 19.5 15.7601 19.6841 15.4568 19.8098C15.1535 19.9354 14.8284 20.0001 14.5001 20.0001Z"
                          fill="#FF6636"
                        />
                        <path
                          d="M14.5 20C15.8807 20 17 18.8807 17 17.5C17 16.1193 15.8807 15 14.5 15C13.1193 15 12 16.1193 12 17.5C12 18.8807 13.1193 20 14.5 20Z"
                          stroke="#FF6636"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.00067 28.0004L12.7322 19.2677"
                          stroke="#FF6636"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.00067 28.0005L21.4314 25.0954C21.6045 25.0665 21.7669 24.9926 21.9024 24.8811C22.0379 24.7696 22.1417 24.6244 22.2033 24.4601L25.0007 17.0005L15.0007 7.00049L7.54106 9.79785C7.37675 9.85946 7.23155 9.96323 7.12004 10.0987C7.00853 10.2342 6.93464 10.3967 6.90579 10.5698L4.00067 28.0005Z"
                          stroke="#FF6636"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.0007 17.0003L28.2936 13.7074C28.3864 13.6146 28.4601 13.5043 28.5103 13.383C28.5606 13.2617 28.5865 13.1317 28.5865 13.0003C28.5865 12.869 28.5606 12.739 28.5103 12.6177C28.4601 12.4963 28.3864 12.3861 28.2936 12.2932L19.7078 3.70744C19.5202 3.51991 19.2659 3.41455 19.0007 3.41455C18.7355 3.41455 18.4811 3.51991 18.2936 3.70744L15.0007 7.00034"
                          stroke="#FF6636"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Design</h4>
                      <span>2,600 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-2">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M27.001 9H5.00104C4.44875 9 4.00104 9.44772 4.00104 10V26C4.00104 26.5523 4.44875 27 5.00104 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z"
                          fill="#23BD33"
                        />
                        <path
                          d="M16 14.5V21.5"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 18H12.5"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.001 9H5.00104C4.44875 9 4.00104 9.44772 4.00104 10V26C4.00104 26.5523 4.44875 27 5.00104 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9"
                          stroke="#23BD33"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Health &amp; Fitness</h4>
                      <span>1,678 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a className="d-block" href="category.html">
                  <div className="category-content  badge-color-3">
                    <div className="category-content-left">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M4 17V24C4 24.5304 4.21071 25.0391 4.58579 25.4142C4.96086 25.7893 5.46957 26 6 26H8C8.53043 26 9.03914 25.7893 9.41421 25.4142C9.78929 25.0391 10 24.5304 10 24V19C10 18.4696 9.78929 17.9609 9.41421 17.5858C9.03914 17.2107 8.53043 17 8 17H4Z"
                          fill="#FD8E1F"
                        />
                        <path
                          opacity="0.2"
                          d="M24.1821 18H27.1821V24C27.1821 24.2652 27.0768 24.5196 26.8892 24.7071C26.7017 24.8946 26.4473 25 26.1821 25H24.1821C23.9169 25 23.6626 24.8946 23.475 24.7071C23.2875 24.5196 23.1821 24.2652 23.1821 24V19C23.1821 18.7348 23.2875 18.4804 23.475 18.2929C23.6626 18.1054 23.9169 18 24.1821 18Z"
                          fill="#FD8E1F"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                        />
                        <path
                          d="M28.182 17H24.182C23.6515 17 23.1428 17.2107 22.7678 17.5858C22.3927 17.9609 22.182 18.4696 22.182 19V24C22.182 24.5304 22.3927 25.0391 22.7678 25.4142C23.1428 25.7893 23.6515 26 24.182 26H26.182C26.7124 26 27.2211 25.7893 27.5962 25.4142C27.9713 25.0391 28.182 24.5304 28.182 24V17ZM28.182 17C28.182 15.4165 27.8686 13.8486 27.2598 12.3868C26.651 10.925 25.759 9.59808 24.635 8.48262C23.5111 7.36715 22.1775 6.48517 20.7111 5.88751C19.2447 5.28986 17.6745 4.98834 16.091 5.00034C14.5075 4.98834 12.9373 5.28986 11.4709 5.88751C10.0045 6.48517 8.6709 7.36715 7.54695 8.48262C6.423 9.59808 5.53093 10.925 4.92217 12.3868C4.31341 13.8486 4 15.4165 4 17V24C4 24.5304 4.21071 25.0391 4.58579 25.4142C4.96086 25.7893 5.46957 26 6 26H8C8.53043 26 9.03914 25.7893 9.41421 25.4142C9.78929 25.0391 10 24.5304 10 24V19C10 18.4696 9.78929 17.9609 9.41421 17.5858C9.03914 17.2107 8.53043 17 8 17H4"
                          stroke="#FD8E1F"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="category-content-right">
                      <h4>Music</h4>
                      <span>959 Courses</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="icon-bottom-btn mt-4">
              <p>
                We have more category &amp; subcategory.{" "}
                <a href="category.html">
                  Browse All
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="#FF6636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="#FF6636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/*End category-section */}
        <div className="course-section grid5">
          <div className="container">
            <div className="section-title">
              <h2>Explore our top courses</h2>
            </div>
            <div className="course-item-5-grid">
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course1.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag">
                      Design
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="course-single.html"
                    className="course-item-5-card-head"
                  >
                    Machine Learning A-Z™: Hands-On Python &amp; R In Data...
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course2.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag tag-color2">
                      Developments
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    The Complete 2021 Web Development Bootcamp
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course3.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag tag-color3">
                      Business
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    Learn Python Programming Masterclass
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course4.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag tag-color2">
                      Marketing
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    The Complete Digital Marketing Course - 12 Courses in 1
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course5.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag">
                      IT &amp; Software
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    Reiki Level I, II and Master/Teacher Program
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course6.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag">
                      Music
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    MThe Complete Foundation Stock Trading Course
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course7.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag tag-color2">
                      Marketing
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    Beginner to Pro in Excel: Financial Modeling and Valuati...
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course8.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag tag-color3">
                      Health &amp; Fitness
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    The Python Mega Course: Build 10 Real World Applications
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course1.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag tag-color2">
                      design
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    Copywriting - Become a Freelance Copywriter, your ow...
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-item-5">
                <div className="course-item-5-card">
                  <a
                    href="single-course.html"
                    className="course-item-5-card-img"
                  >
                    <img src="assets/images/course1.jpg" alt="" />
                  </a>
                  <div className="course-item-5-card-info">
                    <button className="course-item-5-card-info-tag">
                      Lifestyle
                    </button>
                    <p className="course-item-5-card-info-price">$57</p>
                  </div>
                  <a
                    href="single-course.html"
                    className="course-item-5-card-head"
                  >
                    Google Analytics Certification - Learn How To Pass The Exam
                  </a>
                  <div className="course-item-5-card-footer">
                    <p className="course-item-5-card-footer-review align-self-center">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                          fill="#FD8E1F"
                        />
                      </svg>
                      5.0
                    </p>
                    <p className="course-item-5-card-footer-student">
                      265.7K <span>students</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End course-section */}
        <div className="feature-course-section">
          <div className="container">
            <div className="feature-course-wrap">
              <div className="section-title section-title2">
                <h2>Our feature courses</h2>
                <p>
                  Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
                  <br /> Donec varius purus et eleifend porta.
                </p>
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="feature-course">
                    <div className="feature-course-left">
                      <a
                        href="single-course.html"
                        className="feature-course-img"
                      >
                        <img src="assets/images/course4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="feature-course-right">
                      <div className="feature-course-right-content">
                        <div className="feature-course-right-content-header">
                          <div className="feature-course-info">
                            <button className="feature-course-info-tag">
                              Health &amp; Fitness
                            </button>
                            <p className="feature-course-info-price">
                              $14.00 <span>$26.00</span>
                            </p>
                          </div>
                          <a
                            href="single-course.html"
                            className="feature-course-head"
                          >
                            Investing In Stocks The Complete Course! (13
                          </a>
                          <div className="feature-course-mid">
                            <a href="#">
                              <img src="assets/images/profile.png" alt="" />
                              <h5>Kevin Gilbert</h5>
                            </a>
                            <div>
                              <div>
                                <svg
                                  width={18}
                                  className="align-self-center"
                                  height={16}
                                  viewBox="0 0 18 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                <p>
                                  {" "}
                                  5.0 <span>(50000.0)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feature-course-footer">
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="p-color">
                              265.7K <span>Students</span>
                            </p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 17.1667V8.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 17.1667V3.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 17.1667V13.8333"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>Beginner</p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M10 6.125V10.5H14.375"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>6 hour</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-course">
                    <div className="feature-course-left">
                      <a
                        href="single-course.html"
                        className="feature-course-img"
                      >
                        <img src="assets/images/course9.jpg" alt="" />
                      </a>
                    </div>
                    <div className="feature-course-right">
                      <div className="feature-course-right-content">
                        <div className="feature-course-right-content-header">
                          <div className="feature-course-info">
                            <button className="feature-course-info-tag tag-color4">
                              Productivity
                            </button>
                            <p className="feature-course-info-price">
                              $14.00 <span>$26.00</span>
                            </p>
                          </div>
                          <a
                            href="single-course.html"
                            className="feature-course-head"
                          >
                            Adobe XD for Web Design: Essential Principles
                          </a>
                          <div className="feature-course-mid">
                            <a href="#">
                              <img src="assets/images/profile.png" alt="" />
                              <h5>Kevin Gilbert</h5>
                            </a>
                            <div>
                              <div>
                                <svg
                                  width={18}
                                  className="align-self-center"
                                  height={16}
                                  viewBox="0 0 18 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                <p>
                                  {" "}
                                  5.0 <span>(50000.0)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feature-course-footer">
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="p-color">
                              265.7K <span>Students</span>
                            </p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 17.1667V8.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 17.1667V3.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 17.1667V13.8333"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>Beginner</p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M10 6.125V10.5H14.375"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>6 hour</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="feature-course">
                    <div className="feature-course-left">
                      <a
                        href="single-course.html"
                        className="feature-course-img"
                      >
                        <img src="assets/images/course5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="feature-course-right">
                      <div className="feature-course-right-content">
                        <div className="feature-course-right-content-header">
                          <div className="feature-course-info">
                            <button className="feature-course-info-tag tag-color5">
                              Personal Development
                            </button>
                            <p className="feature-course-info-price">
                              $14.00 <span>$26.00</span>
                            </p>
                          </div>
                          <a
                            href="single-course.html"
                            className="feature-course-head"
                          >
                            Google Analytics Certification - Learn How{" "}
                          </a>
                          <div className="feature-course-mid">
                            <a href="#">
                              <img src="assets/images/profile.png" alt="" />
                              <h5>Kevin Gilbert</h5>
                            </a>
                            <div>
                              <div>
                                <svg
                                  width={18}
                                  className="align-self-center"
                                  height={16}
                                  viewBox="0 0 18 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                <p>
                                  {" "}
                                  5.0 <span>(50000.0)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feature-course-footer">
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="p-color">
                              265.7K <span>Students</span>
                            </p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 17.1667V8.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 17.1667V3.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 17.1667V13.8333"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>Beginner</p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M10 6.125V10.5H14.375"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>6 hour</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-course">
                    <div className="feature-course-left">
                      <a
                        href="single-course.html"
                        className="feature-course-img"
                      >
                        <img src="assets/images/course7.jpg" alt="" />
                      </a>
                    </div>
                    <div className="feature-course-right">
                      <div className="feature-course-right-content">
                        <div className="feature-course-right-content-header">
                          <div className="feature-course-info">
                            <button className="feature-course-info-tag tag-color6">
                              Music
                            </button>
                            <p className="feature-course-info-price">
                              $14.00 <span>$26.00</span>
                            </p>
                          </div>
                          <a
                            href="single-course.html"
                            className="feature-course-head"
                          >
                            The Python Mega Course: Build 10 Real World
                          </a>
                          <div className="feature-course-mid">
                            <a href="#">
                              <img src="assets/images/profile.png" alt="" />
                              <h5>Kevin Gilbert</h5>
                            </a>
                            <div>
                              <div>
                                <svg
                                  width={18}
                                  className="align-self-center"
                                  height={16}
                                  viewBox="0 0 18 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                                <p>
                                  {" "}
                                  5.0 <span>(50000.0)</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feature-course-footer">
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                stroke="#564FFD"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p className="p-color">
                              265.7K <span>Students</span>
                            </p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 17.1667V8.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 17.1667V3.83334"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 17.1667V13.8333"
                                stroke="#E34444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>Beginner</p>
                          </div>
                          <div className="feature-course-footer-item">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M10 6.125V10.5H14.375"
                                stroke="#23BD33"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <p>6 hour</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End feature-course-section */}
        <div className="course-section section-padding">
          <div className="container">
            <div className="section-title">
              <h2>Recently added courses</h2>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="course-item-4">
                  <div className="course-item-5-card">
                    <div className="course-item-5-card-img">
                      <img src="assets/images/course1.jpg" alt="" />
                    </div>
                    <div className="course-item-5-card-info">
                      <button className="course-item-5-card-info-tag">
                        Design
                      </button>
                      <p className="course-item-5-card-info-price">$57</p>
                    </div>
                    <a
                      href="single-course.html"
                      className="course-item-5-card-head"
                    >
                      The Python Mega Course: Build 10 Real World Applications
                    </a>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                  <div className="course-hover-detalis">
                    <div className="feature-course-right-content">
                      <div className="feature-course-right-content-header">
                        <div className="feature-course-info">
                          <button className="course-item-5-card-info-tag tag-color2">
                            Developments
                          </button>
                        </div>
                        <a href="#" className="feature-course-head">
                          2021 Complete Python Bootcamp From Zero to Hero in
                          Python
                        </a>
                        <div className="feature-course-mid">
                          <a href="#">
                            <div className="feature-course-user">
                              <div className="feature-course-user-thumb">
                                <img src="assets/images/profile.png" alt="" />
                              </div>
                              <div className="feature-course-user-data">
                                <p>Course by</p>
                                <h5>Kevin Gilbert</h5>
                              </div>
                            </div>
                          </a>
                          <div>
                            <div>
                              <svg
                                width={18}
                                className="align-self-center"
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                              <p>
                                {" "}
                                5.0 <span>(50000.0)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-course-footer">
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="p-color">
                            265.7K <span>Students</span>
                          </p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 17.1667V8.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 17.1667V3.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 17.1667V13.8333"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>Beginner</p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M10 6.125V10.5H14.375"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>6 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-discount">
                      <h5>
                        $14.00 <del>$26.00</del> <span>56% off</span>
                      </h5>
                      <div className="heart-icon">
                        <svg
                          width={22}
                          height={18}
                          viewBox="0 0 22 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="what-your-learn">
                      <h5>What you’ll learn</h5>
                      <ul>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Learn to use Python professionally, learning both
                          Python 2 and Python 3!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                      </ul>
                    </div>
                    <div className="hover-footesection">
                      <a
                        className="button button--md button-i--l mb-3"
                        href="#"
                      >
                        <span>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                              fill="white"
                            />
                            <path
                              d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Add to Cart
                      </a>
                      <a
                        className="button button--md button-p-s"
                        href="single-course.html"
                      >
                        Course Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="course-item-4">
                  <div className="course-item-5-card">
                    <div className="course-item-5-card-img">
                      <img src="assets/images/course2.jpg" alt="" />
                    </div>
                    <div className="course-item-5-card-info">
                      <button className="course-item-5-card-info-tag tag-color2">
                        Developments
                      </button>
                      <p className="course-item-5-card-info-price">$57</p>
                    </div>
                    <a
                      href="single-course.html"
                      className="course-item-5-card-head"
                    >
                      Facebook Ads &amp; Facebook Marketing MASTERY 2021
                      Cours...
                    </a>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                  <div className="course-hover-detalis">
                    <div className="feature-course-right-content">
                      <div className="feature-course-right-content-header">
                        <div className="feature-course-info">
                          <button className="course-item-5-card-info-tag tag-color2">
                            Developments
                          </button>
                        </div>
                        <a href="#" className="feature-course-head">
                          2021 Complete Python Bootcamp From Zero to Hero in
                          Python
                        </a>
                        <div className="feature-course-mid">
                          <a href="#">
                            <div className="feature-course-user">
                              <div className="feature-course-user-thumb">
                                <img src="assets/images/profile.png" alt="" />
                              </div>
                              <div className="feature-course-user-data">
                                <p>Course by</p>
                                <h5>Kevin Gilbert</h5>
                              </div>
                            </div>
                          </a>
                          <div>
                            <div>
                              <svg
                                width={18}
                                className="align-self-center"
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                              <p>
                                {" "}
                                5.0 <span>(50000.0)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-course-footer">
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="p-color">
                            265.7K <span>Students</span>
                          </p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 17.1667V8.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 17.1667V3.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 17.1667V13.8333"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>Beginner</p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M10 6.125V10.5H14.375"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>6 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-discount">
                      <h5>
                        $14.00 <del>$26.00</del> <span>56% off</span>
                      </h5>
                      <div className="heart-icon">
                        <svg
                          width={22}
                          height={18}
                          viewBox="0 0 22 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="what-your-learn">
                      <h5>What you’ll learn</h5>
                      <ul>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Learn to use Python professionally, learning both
                          Python 2 and Python 3!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                      </ul>
                    </div>
                    <div className="hover-footesection">
                      <a
                        className="button button--md button-i--l mb-3"
                        href="#"
                      >
                        <span>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                              fill="white"
                            />
                            <path
                              d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Add to Cart
                      </a>
                      <a
                        className="button button--md button-p-s"
                        href="single-course.html"
                      >
                        Course Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="course-item-4">
                  <div className="course-item-5-card">
                    <div className="course-item-5-card-img">
                      <img src="assets/images/course3.jpg" alt="" />
                    </div>
                    <div className="course-item-5-card-info">
                      <button className="course-item-5-card-info-tag tag-color3">
                        Business
                      </button>
                      <p className="course-item-5-card-info-price">$57</p>
                    </div>
                    <a
                      href="single-course.html"
                      className="course-item-5-card-head"
                    >
                      2021 Complete Python Bootcamp From Zero to Hero in Python
                    </a>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                  <div className="course-hover-detalis">
                    <div className="feature-course-right-content">
                      <div className="feature-course-right-content-header">
                        <div className="feature-course-info">
                          <button className="course-item-5-card-info-tag tag-color2">
                            Developments
                          </button>
                        </div>
                        <a href="#" className="feature-course-head">
                          2021 Complete Python Bootcamp From Zero to Hero in
                          Python
                        </a>
                        <div className="feature-course-mid">
                          <a href="#">
                            <div className="feature-course-user">
                              <div className="feature-course-user-thumb">
                                <img src="assets/images/profile.png" alt="" />
                              </div>
                              <div className="feature-course-user-data">
                                <p>Course by</p>
                                <h5>Kevin Gilbert</h5>
                              </div>
                            </div>
                          </a>
                          <div>
                            <div>
                              <svg
                                width={18}
                                className="align-self-center"
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                              <p>
                                {" "}
                                5.0 <span>(50000.0)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-course-footer">
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="p-color">
                            265.7K <span>Students</span>
                          </p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 17.1667V8.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 17.1667V3.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 17.1667V13.8333"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>Beginner</p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M10 6.125V10.5H14.375"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>6 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-discount">
                      <h5>
                        $14.00 <del>$26.00</del> <span>56% off</span>
                      </h5>
                      <div className="heart-icon">
                        <svg
                          width={22}
                          height={18}
                          viewBox="0 0 22 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="what-your-learn">
                      <h5>What you’ll learn</h5>
                      <ul>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Learn to use Python professionally, learning both
                          Python 2 and Python 3!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                      </ul>
                    </div>
                    <div className="hover-footesection">
                      <a
                        className="button button--md button-i--l mb-3"
                        href="#"
                      >
                        <span>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                              fill="white"
                            />
                            <path
                              d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Add to Cart
                      </a>
                      <a
                        className="button button--md button-p-s"
                        href="single-course.html"
                      >
                        Course Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="course-item-4">
                  <div className="course-item-5-card">
                    <div className="course-item-5-card-img">
                      <img src="assets/images/course4.jpg" alt="" />
                    </div>
                    <div className="course-item-5-card-info">
                      <button className="course-item-5-card-info-tag tag-color2">
                        Marketing
                      </button>
                      <p className="course-item-5-card-info-price">$57</p>
                    </div>
                    <a
                      href="single-course.html"
                      className="course-item-5-card-head"
                    >
                      The Complete Digital Marketing Course - 12 Courses in 1
                    </a>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                  <div className="course-hover-detalis">
                    <div className="feature-course-right-content">
                      <div className="feature-course-right-content-header">
                        <div className="feature-course-info">
                          <button className="course-item-5-card-info-tag tag-color2">
                            Developments
                          </button>
                        </div>
                        <a href="#" className="feature-course-head">
                          2021 Complete Python Bootcamp From Zero to Hero in
                          Python
                        </a>
                        <div className="feature-course-mid">
                          <a href="#">
                            <div className="feature-course-user">
                              <div className="feature-course-user-thumb">
                                <img src="assets/images/profile.png" alt="" />
                              </div>
                              <div className="feature-course-user-data">
                                <p>Course by</p>
                                <h5>Kevin Gilbert</h5>
                              </div>
                            </div>
                          </a>
                          <div>
                            <div>
                              <svg
                                width={18}
                                className="align-self-center"
                                height={16}
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.62631 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                                  fill="#FD8E1F"
                                />
                              </svg>
                              <p>
                                {" "}
                                5.0 <span>(50000.0)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-course-footer">
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                              stroke="#564FFD"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="p-color">
                            265.7K <span>Students</span>
                          </p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 17.1667V8.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 17.1667V3.83334"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 17.1667V13.8333"
                              stroke="#E34444"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>Beginner</p>
                        </div>
                        <div className="feature-course-footer-item">
                          <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M10 6.125V10.5H14.375"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>6 hour</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-discount">
                      <h5>
                        $14.00 <del>$26.00</del> <span>56% off</span>
                      </h5>
                      <div className="heart-icon">
                        <svg
                          width={22}
                          height={18}
                          viewBox="0 0 22 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="what-your-learn">
                      <h5>What you’ll learn</h5>
                      <ul>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Learn to use Python professionally, learning both
                          Python 2 and Python 3!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                        <li>
                          <svg
                            width={18}
                            height={12}
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.25 0.750488L6.75 11.25L1.5 6.00049"
                              stroke="#23BD33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Create games with Python, like Tic Tac Toe and
                          Blackjack!
                        </li>
                      </ul>
                    </div>
                    <div className="hover-footesection">
                      <a
                        className="button button--md button-i--l mb-3"
                        href="#"
                      >
                        <span>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                              fill="white"
                            />
                            <path
                              d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        Add to Cart
                      </a>
                      <a
                        className="button button--md button-p-s"
                        href="single-course.html"
                      >
                        Course Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-button text-center mt-3">
              <a
                className="button button--lg button-p-s button-i--r"
                href="course-list.html"
              >
                Browse all Course
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
                      stroke="#FF6636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="#FF6636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/*End course-section */}
        <div className="cat-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="cta-left">
                  <h4>Become an instructor</h4>
                  <p>
                    Instructors from around the world teach millions of students
                    on Udemy. We provide the tools and skills to teach what you
                    love.
                  </p>
                  <a
                    className="default-btn btn-large bg-white icon-btn"
                    href="#"
                  >
                    Browse all Course
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="#FF6636"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#FF6636"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="cat-thumb">
                    <img src="assets/images/cta.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="cta-right">
                  <h3>Your teaching &amp; earning steps</h3>
                  <ul>
                    <li>
                      <span className="color-1">1</span> Apply to become
                      instructor
                    </li>
                    <li>
                      <span className="color-2">2</span> Build &amp; edit your
                      profile
                    </li>
                    <li>
                      <span className="color-3">3</span> Create your new course
                    </li>
                    <li>
                      <span className="color-4">4</span> Start teaching &amp;
                      earning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End cat-section */}
        <div className="feature-course-section">
          <div className="container">
            <div className="feature-course-wrap">
              <div className="section-title">
                <h2>Our top instructor</h2>
              </div>
              <div className="course-item-5-grid">
                <div className="course-item-5">
                  <div className="course-item-5-card">
                    <a
                      href="instructor-profile.html"
                      className="course-item-5-card-img team-thumb"
                    >
                      <img src="assets/images/team1.png" alt="" />
                    </a>
                    <div className="course-item-data">
                      <h5>Devon Lane</h5>
                      <p>Senior Developer</p>
                    </div>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-item-5">
                  <div className="course-item-5-card">
                    <a
                      href="instructor-profile.html"
                      className="course-item-5-card-img team-thumb"
                    >
                      <img src="assets/images/team2.png" alt="" />
                    </a>
                    <div className="course-item-data">
                      <h5>Darrell Steward</h5>
                      <p>Digital Product Designer</p>
                    </div>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-item-5">
                  <div className="course-item-5-card">
                    <a
                      href="instructor-profile.html"
                      className="course-item-5-card-img team-thumb"
                    >
                      <img src="assets/images/team3.png" alt="" />
                    </a>
                    <div className="course-item-data">
                      <h5>Jane Cooper</h5>
                      <p>UI/UX Designer</p>
                    </div>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-item-5">
                  <div className="course-item-5-card">
                    <a
                      href="instructor-profile.html"
                      className="course-item-5-card-img team-thumb"
                    >
                      <img src="assets/images/team4.png" alt="" />
                    </a>
                    <div className="course-item-data">
                      <h5>Albert Flores</h5>
                      <p>Adobe Instructor</p>
                    </div>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-item-5">
                  <div className="course-item-5-card">
                    <a
                      href="instructor-profile.html"
                      className="course-item-5-card-img team-thumb"
                    >
                      <img src="assets/images/team5.png" alt="" />
                    </a>
                    <div className="course-item-data">
                      <h5>Kathryn Murphy</h5>
                      <p>Lead Developer</p>
                    </div>
                    <div className="course-item-5-card-footer">
                      <p className="course-item-5-card-footer-review align-self-center">
                        <svg
                          width={14}
                          height={13}
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        5.0
                      </p>
                      <p className="course-item-5-card-footer-student">
                        265.7K <span>students</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-bottom-btn mt-4">
                <p>
                  Thousands of students waiting for a instructor. Start teaching
                  &amp; earning now!.{" "}
                  <a href="become-instructor.html">
                    Become Instructor
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="#FF6636"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#FF6636"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End feature-course-section */}
        <div className="company-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center">
                <div className="company-content">
                  <h3>6.3k trusted companies</h3>
                  <p>
                    Nullam egestas tellus at enim ornare tristique. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo1.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo2.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo3.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo4.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo5.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo6.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo7.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                    <div className="company-logo-item">
                      <a href="#">
                        <img src="assets/images/logo8.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End company-section */}
        <div className="footer-section">
          <div className="footer-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-header-content">
                    <h3>
                      Start learning with 67.1k students around the world.
                    </h3>
                    <div className="footer-btn-wrap">
                      <a className="button button--md" href="#">
                        Join the Family
                      </a>
                      <a
                        className="footer-btn gray-btn"
                        href="course-list.html"
                      >
                        Browse all courses
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="footer-counter-wrap">
                    <div className="footer-counter-item">
                      <h3>6.3k</h3>
                      <p>Online courses</p>
                    </div>
                    <div className="footer-counter-item">
                      <h3>26k</h3>
                      <p>Certified Instructor</p>
                    </div>
                    <div className="footer-counter-item">
                      <h3>99.9%</h3>
                      <p>Sucess Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-xl-4">
                  <div className="footer-textarea">
                    <div className="footer-logo">
                      <svg
                        width={221}
                        height={46}
                        viewBox="0 0 221 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.4375 17.25L24 5.75L45.5625 17.25L24 28.75L2.4375 17.25Z"
                          stroke="#FF6636"
                          strokeWidth="3.45"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.7812 43.125V23L24 17.25"
                          stroke="#FF6636"
                          strokeWidth="3.45"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40.5313 19.9335V29.7302C40.5319 30.0403 40.4316 30.3422 40.2456 30.5904C39.0351 32.2012 33.9283 38.094 24 38.094C14.0717 38.094 8.96486 32.2012 7.75437 30.5904C7.5684 30.3422 7.46816 30.0403 7.46875 29.7302V19.9335"
                          stroke="#FF6636"
                          strokeWidth="3.45"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M58.84 36H76.3513V31.9358H63.6883V24.6307H75.3451V20.5665H63.6883V13.3006H76.2468V9.23636H58.84V36ZM87.3289 36.3528C90.7789 36.3528 92.334 34.3011 93.0789 32.8375H93.3664V36H98.0186V9.23636H93.2749V19.2466H93.0789C92.3601 17.796 90.8834 15.6659 87.3419 15.6659C82.7027 15.6659 79.0567 19.2989 79.0567 25.9898C79.0567 32.6023 82.5982 36.3528 87.3289 36.3528ZM88.6488 32.4716C85.5255 32.4716 83.8789 29.7273 83.8789 25.9636C83.8789 22.2261 85.4993 19.5472 88.6488 19.5472C91.6936 19.5472 93.3664 22.0693 93.3664 25.9636C93.3664 29.858 91.6675 32.4716 88.6488 32.4716ZM114.749 27.558C114.749 30.6159 112.567 32.1318 110.476 32.1318C108.202 32.1318 106.686 30.5244 106.686 27.9761V15.9273H101.956V28.708C101.956 33.5301 104.7 36.2614 108.647 36.2614C111.652 36.2614 113.769 34.6801 114.684 32.4324H114.893V36H119.48V15.9273H114.749V27.558ZM131.97 43.9455C137.394 43.9455 141.392 41.4625 141.392 36.3267V15.9273H136.727V19.2466H136.466C135.747 17.796 134.244 15.6659 130.703 15.6659C126.063 15.6659 122.417 19.2989 122.417 25.8983C122.417 32.4455 126.063 35.7125 130.69 35.7125C134.127 35.7125 135.734 33.8699 136.466 32.3932H136.701V36.196C136.701 39.1494 134.741 40.3648 132.049 40.3648C129.2 40.3648 127.945 39.0187 127.37 37.8426L123.11 38.875C123.973 41.6847 126.861 43.9455 131.97 43.9455ZM132.01 32.0011C128.886 32.0011 127.24 29.5705 127.24 25.8722C127.24 22.2261 128.86 19.5472 132.01 19.5472C135.054 19.5472 136.727 22.0693 136.727 25.8722C136.727 29.7011 135.028 32.0011 132.01 32.0011ZM157.931 27.558C157.931 30.6159 155.748 32.1318 153.657 32.1318C151.383 32.1318 149.867 30.5244 149.867 27.9761V15.9273H145.137V28.708C145.137 33.5301 147.881 36.2614 151.828 36.2614C154.833 36.2614 156.95 34.6801 157.865 32.4324H158.074V36H162.661V15.9273H157.931V27.558ZM172.198 36.4051C175.347 36.4051 177.229 34.9284 178.092 33.2426H178.249V36H182.796V22.5659C182.796 17.2602 178.471 15.6659 174.642 15.6659C170.421 15.6659 167.18 17.5477 166.134 21.2068L170.551 21.8341C171.022 20.4619 172.355 19.2858 174.668 19.2858C176.863 19.2858 178.066 20.4097 178.066 22.383V22.4614C178.066 23.8205 176.641 23.8858 173.1 24.2648C169.205 24.683 165.481 25.846 165.481 30.3676C165.481 34.3142 168.369 36.4051 172.198 36.4051ZM173.426 32.929C171.453 32.929 170.042 32.0273 170.042 30.2892C170.042 28.4727 171.623 27.7148 173.74 27.4142C174.981 27.2443 177.464 26.9307 178.079 26.4341V28.7994C178.079 31.0341 176.275 32.929 173.426 32.929ZM186.449 36H191.18V24.1994C191.18 21.6511 193.101 19.8477 195.701 19.8477C196.499 19.8477 197.492 19.9915 197.897 20.1222V15.7705C197.466 15.692 196.721 15.6398 196.198 15.6398C193.898 15.6398 191.977 16.9466 191.245 19.2727H191.036V15.9273H186.449V36ZM206.558 36.3528C210.008 36.3528 211.563 34.3011 212.308 32.8375H212.595V36H217.248V9.23636H212.504V19.2466H212.308C211.589 17.796 210.113 15.6659 206.571 15.6659C201.932 15.6659 198.286 19.2989 198.286 25.9898C198.286 32.6023 201.827 36.3528 206.558 36.3528ZM207.878 32.4716C204.755 32.4716 203.108 29.7273 203.108 25.9636C203.108 22.2261 204.728 19.5472 207.878 19.5472C210.923 19.5472 212.595 22.0693 212.595 25.9636C212.595 29.858 210.897 32.4716 207.878 32.4716Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p>
                      Aliquam rhoncus ligula est, non pulvinar elit convallis
                      nec. Donec mattis odio at.
                    </p>
                    <div className="social-icon footer-social">
                      <ul>
                        <li>
                          <a href="#">
                            <svg
                              width={9}
                              height={18}
                              viewBox="0 0 9 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.3575 2.98875H9.00075V0.12675C8.71725 0.08775 7.74225 0 6.60675 0C4.2375 0 2.6145 1.49025 2.6145 4.22925V6.75H0V9.9495H2.6145V18H5.82V9.95025H8.32875L8.727 6.75075H5.81925V4.5465C5.82 3.62175 6.069 2.98875 7.3575 2.98875Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.9507 5.29205C17.9086 4.33564 17.7539 3.67812 17.5324 3.10836C17.3038 2.50359 16.9522 1.96213 16.4915 1.51201C16.0414 1.05489 15.4963 0.699691 14.8986 0.474702C14.3255 0.253147 13.6714 0.0984842 12.715 0.0563159C11.7515 0.0105764 11.4456 0 9.00174 0C6.55791 0 6.25202 0.0105764 5.29204 0.0527447C4.33563 0.0949129 3.67811 0.249713 3.1085 0.471131C2.50358 0.699691 1.96213 1.05132 1.51201 1.51201C1.05489 1.96213 0.699827 2.50716 0.474701 3.10493C0.253147 3.67812 0.098484 4.33207 0.0563158 5.28848C0.0105764 6.25203 0 6.55792 0 9.00176C0 11.4456 0.0105764 11.7515 0.0527446 12.7115C0.0949128 13.6679 0.249713 14.3254 0.471267 14.8952C0.699827 15.4999 1.05489 16.0414 1.51201 16.4915C1.96213 16.9486 2.50715 17.3038 3.10493 17.5288C3.67811 17.7504 4.33206 17.905 5.28861 17.9472C6.24845 17.9895 6.55448 17.9999 8.99831 17.9999C11.4421 17.9999 11.748 17.9895 12.708 17.9472C13.6644 17.905 14.3219 17.7504 14.8916 17.5288C16.1012 17.0611 17.0577 16.1047 17.5254 14.8952C17.7468 14.322 17.9016 13.6679 17.9437 12.7115C17.9859 11.7515 17.9965 11.4456 17.9965 9.00176C17.9965 6.55792 17.9929 6.25203 17.9507 5.29205ZM16.3298 12.6411C16.2911 13.5202 16.1434 13.9949 16.0203 14.3114C15.7179 15.0956 15.0955 15.7179 14.3114 16.0204C13.9949 16.1434 13.5168 16.2911 12.6411 16.3297C11.6917 16.372 11.407 16.3824 9.00531 16.3824C6.60365 16.3824 6.31534 16.372 5.36937 16.3297C4.4903 16.2911 4.01559 16.1434 3.69913 16.0204C3.3089 15.8761 2.9537 15.6476 2.66539 15.3487C2.3665 15.0568 2.13794 14.7052 1.99372 14.315C1.87065 13.9985 1.72299 13.5202 1.68439 12.6447C1.64209 11.6953 1.63165 11.4104 1.63165 9.00876C1.63165 6.60709 1.64209 6.31878 1.68439 5.37295C1.72299 4.49387 1.87065 4.01917 1.99372 3.7027C2.13794 3.31234 2.3665 2.95727 2.66896 2.66883C2.9607 2.36994 3.31233 2.14138 3.7027 1.99729C4.01917 1.87422 4.49744 1.72656 5.37294 1.68783C6.32235 1.64566 6.60722 1.63508 9.00875 1.63508C11.414 1.63508 11.6987 1.64566 12.6447 1.68783C13.5238 1.72656 13.9985 1.87422 14.3149 1.99729C14.7052 2.14138 15.0604 2.36994 15.3487 2.66883C15.6476 2.96071 15.8761 3.31234 16.0203 3.7027C16.1434 4.01917 16.2911 4.49731 16.3298 5.37295C16.372 6.32236 16.3826 6.60709 16.3826 9.00876C16.3826 11.4104 16.372 11.6917 16.3298 12.6411Z"
                                fill="white"
                              />
                              <path
                                d="M9.00188 4.37744C6.44912 4.37744 4.37793 6.44849 4.37793 9.00139C4.37793 11.5543 6.44912 13.6253 9.00188 13.6253C11.5548 13.6253 13.6258 11.5543 13.6258 9.00139C13.6258 6.44849 11.5548 4.37744 9.00188 4.37744ZM9.00188 12.0008C7.34578 12.0008 6.00244 10.6576 6.00244 9.00139C6.00244 7.34515 7.34578 6.00195 9.00188 6.00195C10.6581 6.00195 12.0013 7.34515 12.0013 9.00139C12.0013 10.6576 10.6581 12.0008 9.00188 12.0008Z"
                                fill="white"
                              />
                              <path
                                d="M14.8876 4.19521C14.8876 4.79133 14.4043 5.27469 13.808 5.27469C13.2119 5.27469 12.7285 4.79133 12.7285 4.19521C12.7285 3.59894 13.2119 3.11572 13.808 3.11572C14.4043 3.11572 14.8876 3.59894 14.8876 4.19521Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={19}
                              height={18}
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.9921 18.0002V17.9994H18.9966V11.3979C18.9966 8.16841 18.3013 5.68066 14.5258 5.68066C12.7108 5.68066 11.4928 6.67666 10.9955 7.62091H10.943V5.98216H7.36328V17.9994H11.0908V12.0489C11.0908 10.4822 11.3878 8.96716 13.328 8.96716C15.2398 8.96716 15.2683 10.7552 15.2683 12.1494V18.0002H18.9921Z"
                                fill="white"
                              />
                              <path
                                d="M1.29297 5.98291H5.02497V18.0002H1.29297V5.98291Z"
                                fill="white"
                              />
                              <path
                                d="M3.15759 0C1.96434 0 0.996094 0.96825 0.996094 2.1615C0.996094 3.35475 1.96434 4.34325 3.15759 4.34325C4.35084 4.34325 5.31909 3.35475 5.31909 2.1615C5.31834 0.96825 4.35009 0 3.15759 0V0Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={19}
                              height={15}
                              viewBox="0 0 19 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.9961 1.73137C18.3267 2.025 17.6135 2.21962 16.8698 2.31412C17.6348 1.85737 18.2187 1.13962 18.4932 0.2745C17.78 0.69975 16.9925 1.00013 16.1532 1.16775C15.476 0.446625 14.5107 0 13.4577 0C11.4147 0 9.76997 1.65825 9.76997 3.69113C9.76997 3.98363 9.79472 4.26487 9.85547 4.53262C6.78759 4.383 4.07297 2.91263 2.24934 0.67275C1.93097 1.22513 1.74422 1.85738 1.74422 2.538C1.74422 3.816 2.40234 4.94887 3.38334 5.60475C2.79047 5.5935 2.20884 5.42138 1.71609 5.15025C1.71609 5.1615 1.71609 5.17613 1.71609 5.19075C1.71609 6.984 2.99522 8.4735 4.67259 8.81662C4.37222 8.89875 4.04484 8.93812 3.70509 8.93812C3.46884 8.93812 3.23034 8.92463 3.00647 8.87512C3.48459 10.3365 4.84134 11.4109 6.45459 11.4457C5.19909 12.4279 3.60497 13.0196 1.87922 13.0196C1.57659 13.0196 1.28634 13.0061 0.996094 12.969C2.63072 14.0231 4.56797 14.625 6.65709 14.625C13.4476 14.625 17.1601 9 17.1601 4.12425C17.1601 3.96112 17.1545 3.80363 17.1466 3.64725C17.879 3.1275 18.4943 2.47837 18.9961 1.73137Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              width={19}
                              height={13}
                              viewBox="0 0 19 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.0388 0.385481C17.8098 0.593122 18.4177 1.20094 18.6252 1.97204C19.0109 3.38048 18.996 6.31629 18.996 6.31629C18.996 6.31629 18.996 9.23713 18.6254 10.6457C18.4177 11.4167 17.8099 12.0246 17.0388 12.2321C15.6302 12.6029 9.99606 12.6029 9.99606 12.6029C9.99606 12.6029 4.37657 12.6029 2.9533 12.2174C2.1822 12.0098 1.57438 11.4018 1.36674 10.6309C0.996094 9.23713 0.996094 6.30146 0.996094 6.30146C0.996094 6.30146 0.996094 3.38048 1.36674 1.97204C1.57425 1.20108 2.19703 0.57829 2.95316 0.370787C4.36174 0 9.99592 0 9.99592 0C9.99592 0 15.6302 0 17.0388 0.385481ZM12.8874 6.30154L8.20215 9.00006V3.60303L12.8874 6.30154Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                  <div className="footer-widget">
                    <div className="footer-menu-title">
                      <h4>Explore our</h4>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">
                            Labal
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Events
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            News &amp; Articles
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Sitemap
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                  <div className="footer-widget">
                    <div className="footer-menu-title">
                      <h4>Quick Links</h4>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">
                            About
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Become Instructor
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Contact
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Career
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="footer-menu-title">
                      <h4>Support</h4>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">
                            Help Center
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            FAQs
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Terms &amp; Condition
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Privacy Policy
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 8H13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 3.5L13.5 8L9 12.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3  col-md-3">
                  <div className="footer-widget">
                    <div className="footer-menu-title dowmload-app">
                      <h4>Downlaod our app</h4>
                    </div>
                    <div className="app-btn-column">
                      <a className="app-btn" href="#">
                        <div className="app-btn-wrap">
                          <div className="app-icon">
                            <img src="assets/images/apple2.svg" alt="" />
                          </div>
                          <div className="app-data">
                            <p>Download now</p>
                            <h5>App Store</h5>
                          </div>
                        </div>
                      </a>
                      <a className="app-btn" href="#">
                        <div className="app-btn-wrap">
                          <div className="app-icon">
                            <img src="assets/images/google-play.png" alt="" />
                          </div>
                          <div className="app-data">
                            <p>Download now</p>
                            <h5>Play Store</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-sm-6  d-flex align-items-center">
                  <div className="copywright-text">
                    <p>
                      © 2021 - Etutor. Designed by{" "}
                      <a href="#">Templatecookie.</a> All rights reserved
                    </p>
                  </div>
                </div>
                <div className="col-sm-6  d-flex justify-content-end">
                  <div className="select-box">
                    <select className="custom-select sources" title="English">
                      <option>English</option>
                      <option>Germany</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End footer-section */}
        {"{"}% endblock %{"}"}
      </>
    </>
  );
};

export default HomePage;
