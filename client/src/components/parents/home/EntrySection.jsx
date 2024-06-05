import React from "react";
import tutorPic from "../../../assets/parents/images/cta.png";
const EntrySection = () => {
  return (
    <>
      <div className="cat-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="cta-left">
                <h4>Tuyển gia sư?</h4>
                <p>
                  Bạn đang tìm kiếm một gia sư giỏi và đáng tin cậy cho con của
                  mình? Hãy khám phá cùng chúng tôi! Chúng tôi sẽ kết nối bạn
                  với những gia sư có kinh nghiệm, đầy đủ kiến thức và đam mê
                  giảng dạy.
                </p>
                <a
                  className="default-btn btn-large bg-white icon-btn"
                  href="/parents/contact"
                >
                  Đăng ký ngay
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
                  <img src={tutorPic} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cta-right">
                <h3>Từng bước để tìm gia sư</h3>
                <ul>
                  <li>
                    <span className="color-1">1</span> Đăng ký tài khoản phụ
                    huynh
                  </li>
                  <li>
                    <span className="color-2">2</span> Tìm kiếm và lựa chọn gia
                    sư phù hợp
                  </li>
                  <li>
                    <span className="color-3">3</span> Liên hệ và thảo luận yêu
                    cầu học với gia sư
                  </li>
                  <li>
                    <span className="color-4">4</span> Bắt đầu buổi học và theo
                    dõi tiến trình
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntrySection;
