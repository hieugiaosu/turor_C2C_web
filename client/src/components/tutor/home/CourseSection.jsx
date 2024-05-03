import React from "react";
import { FaStar } from "react-icons/fa";

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      imgSrc:
        "https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/620f15a21a1b856310fde8de/content_toan-tu-duy-la-gi.jpg",
      tag: "Toán Học",
      price: "1.200.000 VND",
      title: "Khám phá Toán tư duy Sodoban cơ bản cho học sinh tiểu học",
      rating: "5.0",
      students: "102K",
      category: "Toán Học",
    },
    {
      id: 2,
      imgSrc:
        "https://aptechsaigon.edu.vn/gw-content/images/1601081603-UXZGhxr.jpg",
      tag: "Lập Trình",
      price: "1.100.000 VND",
      title: "Lập trình căn bản với Python cho học sinh THCS",
      rating: "5.0",
      students: "98K",
      category: "Lập Trình",
    },
    {
      id: 3,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNQLqsbE7Hnaq4XU9bXxc7i6-Fum5Ncb-XTgcLlLm2bbTmgGo7sMCoP5g4mmozA9CTEU&usqp=CAU",
      tag: "ĐGNL",
      price: "1.150.000 VND",
      title: "Luyện thi Đánh giá năng lực ĐHQG TP.HCM năm 2025",
      rating: "5.0",
      students: "95K",
      category: "ĐGNL",
    },
    {
      id: 4,
      imgSrc:
        "https://giasuongmattroi.com/wp-content/uploads/2019/08/giao-vien-day-piano-tai-nha.png",
      tag: "Âm Nhạc",
      price: "1.250.000 VND",
      title: "Hướng dẫn Piano và nhạc lý cơ bản cho người mới bắt đầu",
      rating: "5.0",
      students: "88K",
      category: "Âm Nhạc",
    },
    {
      id: 5,
      imgSrc:
        "https://giasucovua.com/wp-content/uploads/2023/06/z4414054992487_82cb4c8b35eecf313e74dd445268ae5d-900x900.jpg",
      tag: "Thể Thao",
      price: "1.100.000 VND",
      title: "Hướng dẫn các thế chơi cờ vua nâng cao dành cho học sinh thi đấu",
      rating: "5.0",
      students: "97K",
      category: "Thể Thao",
    },
    {
      id: 6,
      imgSrc:
        "https://ila.edu.vn/wp-content/uploads/2023/03/tieng-anh-giao-tiep-cho-be-4.jpg",
      tag: "Ngoại ngữ",
      price: "1.180.000 VND",
      title: "Chinh phục khả năng giao tiếp tiếng Anh với phương pháp đặc biệt",
      rating: "5.0",
      students: "90K",
      category: "Ngoại ngữ",
    },
    {
      id: 7,
      imgSrc:
        "https://binggo.edu.vn/storage/images/2022/11/30/mach-me-3-thi-nghiem-vat-ly-cho-be-cuc-hay-va-thu-vi.webp",
      tag: "Vật Lý",
      price: "1.220.000 VND",
      title:
        "Thí nghiệm Vật lý thú vị về các hiện tượng tự nhiên dành cho học sinh THCS",
      rating: "5.0",
      students: "94K",
      category: "Vật Lý",
    },
    {
      id: 8,
      imgSrc: "https://giasuhanoigioi.edu.vn/wp-content/uploads/2d.jpg",
      tag: "Hóa Học",
      price: "1.210.000 VND",
      title: "Luyện thi kỳ thi Trung học phổ thông Quốc gia môn Hóa học",
      rating: "5.0",
      students: "93K",
      category: "Hóa Học",
    },
    {
      id: 9,
      imgSrc:
        "https://vcdn-vnexpress.vnecdn.net/2020/06/10/science-kid-1589360785-7228-15-9631-1998-1591772369.jpg",
      tag: "KHTN",
      price: "1.220.000 VND",
      title: "Bé khám phá khoa học tự nhiên, xã hội về môi trường xung quanh",
      rating: "4.9",
      students: "94K",
      category: "KHTN",
    },
    {
      id: 10,
      imgSrc:
        "https://toplist.vn/images/800px/sach-on-thi-vat-ly-cho-ky-thi-thpt-quoc-gia-2020-ban-phai-co-435408.jpg",
      tag: "Vật Lý",
      price: "1.210.000 VND",
      title: "Luyện thi kỳ thi Trung học phổ thông Quốc gia môn Vật Lý",
      rating: "5.0",
      students: "93K",
      category: "Vật Lý",
    },
  ];

  return (
    <>
      <div className="course-section grid5">
        <div className="container">
          <div className="section-title">
            <h2>Khám phá khóa học có sẵn</h2>
          </div>
          <div className="course-item-5-grid">
            {courses &&
              courses.length > 0 &&
              courses.map((item, index) => {
                return (
                  <div className="course-item-5">
                    <div className="course-item-5-card">
                      <a
                        href="single-course.html"
                        className="course-item-5-card-img"
                      >
                        <img src={item.imgSrc} alt="" />
                      </a>
                      <div className="course-item-5-card-info">
                        <button className="course-item-5-card-info-tag">
                          {item.tag}
                        </button>
                        <p className="course-item-5-card-info-price">
                          {item.price}
                        </p>
                      </div>
                      <a
                        href="course-single.html"
                        className="course-item-5-card-head"
                      >
                        {item.title}
                      </a>
                      <div className="course-item-5-card-footer">
                        <p className="course-item-5-card-footer-review align-self-center">
                          <FaStar color="#d3d62f" />
                          5.0
                        </p>
                        <p className="course-item-5-card-footer-student">
                          {item.students} <span>students</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSection;
