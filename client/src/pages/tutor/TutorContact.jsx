import React from "react";
import Header from "../../components/tutor/header/Header";
import Footer from "../../components/parents/footer/Footer";

const TutorContact = () => {
  return (
    <>
      <Header activeLink="contact" />
      <div class="contact-section section-padding">
        <div class="container">
          <div class="section-title">
            <h2>Liên hệ đăng ký với chúng tôi</h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="contact-info-wrap">
                <div class="contact-title mb-2">
                  <h5>
                    Bạn có thể ghé lại bất kỳ chi nhánh nào của chúng tôi
                    <br />
                    để có thể trao đổi trực tiếp. Chúng tôi luôn sẵn lòng đón
                    tiếp!
                  </h5>
                </div>
                <div class="contact-info-item">
                  <h5>Địa chỉ</h5>
                  <p>
                    Trường ĐH Bách Khoa - ĐHQG TP.HCM
                    <br />
                    CS1: 268 Lý Thường Kiệt, Q.10, TP.HCM
                    <br />
                    CS2: Đông Hòa, Dĩ An, Bình Dương
                  </p>
                </div>
                <div class="contact-info-item">
                  <h5>Số điện thoại</h5>
                  <p>
                    <a href="#">(+84) 013-555-0103</a>
                    <br />
                    <a href="#">(+028) 555-0114</a>
                  </p>
                </div>
                <div class="contact-info-item">
                  <h5>Địa chỉ email</h5>
                  <p>
                    <a href="mailto:someone@yoursite.com">
                      help.BKtutor@gmail.com
                    </a>{" "}
                    <br />
                    <a href="mailto:someone@yoursite.com">
                      career.BKtutor@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-wrap">
                <div class="contact-title">
                  <h5>Get In touch</h5>
                  <p>
                    Feel free contact with us, we love to make new partners &
                    friends
                  </p>
                </div>
                <form action="#">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-field mb-3">
                        <label>Full name</label>
                        <div class="field-wrapper">
                          <input type="text" placeholder="Full name" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-field mb-3">
                        <label>Last name</label>
                        <div class="field-wrapper">
                          <input type="text" placeholder="Last name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-field mb-3">
                    <label>Email</label>
                    <div class="field-wrapper">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div class="form-field mb-3">
                    <label>Subject</label>
                    <div class="field-wrapper">
                      <input type="email" placeholder="Message Subject" />
                    </div>
                  </div>
                  <div class="default-input-field">
                    <label>Message</label>
                    <textarea
                      name="textarea"
                      placeholder="Message Subject"
                    ></textarea>
                  </div>
                  <button class="button button--md button-i--r">
                    Send Message
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.5816 11.3465L4.74585 2.47843C4.61262 2.40383 4.4598 2.37166 4.30781 2.38624C4.15582 2.40081 4.0119 2.46143 3.89528 2.55999C3.77866 2.65855 3.6949 2.79035 3.65519 2.93779C3.61549 3.08523 3.62173 3.24127 3.67309 3.38506L6.66006 11.7486C6.71832 11.9117 6.71832 12.09 6.66006 12.2531L3.67309 20.6166C3.62173 20.7604 3.61549 20.9165 3.65519 21.0639C3.6949 21.2113 3.77866 21.3431 3.89528 21.4417C4.0119 21.5403 4.15582 21.6009 4.30781 21.6155C4.45981 21.63 4.61263 21.5979 4.74585 21.5233L20.5816 12.6552C20.6979 12.5901 20.7948 12.4951 20.8622 12.3801C20.9296 12.2651 20.9652 12.1342 20.9652 12.0008C20.9652 11.8675 20.9296 11.7366 20.8622 11.6216C20.7948 11.5066 20.6979 11.4116 20.5816 11.3465V11.3465Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.75 12H12.75"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default TutorContact;
