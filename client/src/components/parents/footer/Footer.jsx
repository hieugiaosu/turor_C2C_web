import React from "react";
import Logo from "../../../assets/parents/LogoFooter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-4">
                <div className="footer-textarea">
                  <div className="footer-logo">
                    <img src={Logo} alt="" />
                  </div>
                  <p>
                    Khu phố 6, phường Linh Trung, Thành phố Thủ Đức, Thành phố
                    Hồ Chí Minh
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
                    <h4>Khám phá thêm</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">
                          Sự kiện
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
                          Tin tức
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
                          Tuyển dụng
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
                          Đăng ký
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
                          Khóa học
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
                          Liên hệ đăng ký
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
                          Gia sư
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
                    <h4>Hỗ trợ</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">
                          Trung tâm trợ giúp
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
                          Điều khoản dịch vụ
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
                          Chính sách bảo mật
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
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex align-items-center">
                <div className="copywright-text">
                  <p>
                    © 2024 - BKtutor. Designed by <a href="#">Nhóm 2 - TMĐT</a>{" "}
                    . All rights reserved
                  </p>
                </div>
              </div>
              <div className="col-sm-6  d-flex justify-content-end">
                <div className="select-box">
                  <select className="custom-select sources" title="Tiếng Việt">
                    <option>Tiếng Việt</option>
                    <option>Tiếng Anh</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
