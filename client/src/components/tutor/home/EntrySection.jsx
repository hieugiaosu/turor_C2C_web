import React from "react";
import tutorPic from "../../../assets/parents/images/cta.png";
const EntrySection = () => {
  return (
    <>
      <div className="cat-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="cta-right">
                <h3>Quy trình đăng ký dễ dàng</h3>
                <ul>
                  <li>
                    <span className="color-1">1</span> Đăng ký tài khoản gia sư
                  </li>
                  <li>
                    <span className="color-2">2</span> Tìm kiếm và lựa chọn lớp
                  </li>
                  <li>
                    <span className="color-3">3</span> Liên hệ và thảo luận yêu
                    cầu học với phụ huynh
                  </li>
                  <li>
                    <span className="color-4">4</span> Bắt đầu buổi dạy tại nhà
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cta-left">
                <h4>Tuyển gia sư</h4>
                <p>
                  Bạn là một gia sư giỏi đang cần tìm nguồn lớp để gắn bó lâu dài?
                  BK Tutor chính là môi trường tuyệt vời cho gia sư có thể hoạt động
                  và phát triển. Với nguồn lớp phong phú, đa dạng, thông tin chính xác và uy tín,
                  đây sẽ là nơi gia sư tìm thêm thu nhập và thõa đam mê giảng dạy.
                </p>
                <a className="default-btn btn-large bg-white icon-btn" href="#">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EntrySection;
