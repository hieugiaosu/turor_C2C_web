import React from "react";
import HeroThumb from "../../../assets/parents/images/giasu3.jpeg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container" style={{margin: 0}}>
        <div className="row st_screenfix">
          <div className="col-xl-7 col-lg-6">
            <div className="hero-thumb" style={{ clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
              <img src={HeroThumb} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 d-flex align-items-center justify-content-end">
            <div className="hero-content text-right">
              <h1>Gia sư tìm lớp?</h1>
              <p>
                Bạn là gia sư tiềm năng muốn kiếm thêm thu nhập? Hãy đến với BK Tutor.
                Nguồn lớp uy tín và quy trình làm việc cẩn thận, đây chính là môi trường 
                phát triển và gắn bó lâu dài cho gia sư.
              </p>
              <a className="button button--lg" href="/parents/register">
                Trở thành gia sư tại BK Tutor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
