import React from "react";
import HeroThumb from "../../../assets/parents/images/gia_su2.jpg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row st_screenfix">
          <div className="col-xl-5 col-lg-6 d-flex align-items-center">
            <div className="hero-content">
              <h1>Học tập mọi lúc mọi nơi</h1>
              <p>
                Tìm kiếm giáo viên gia sư chất lượng, phù hợp với nhu cầu riêng
                của con bạn. Giải pháp giáo dục cá nhân hóa để hướng dẫn con trẻ
                của bạn tiến bước mạnh mẽ vào tương lai.
              </p>
              <a className="button button--lg" href="/parents/register">
                Tạo tài khoản
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="hero-thumb">
              <img src={HeroThumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
