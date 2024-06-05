import React from "react";
const CoursesSection = () => {
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
      <div className="row shop__product-items">
        {courses &&
          courses.length > 0 &&
          courses.slice(0, 9).map((item, index) => {
            return (
              <div className="col-md-6 col-xl-4">
                <div className="course-item-4">
                  <div className="course-item-5-card">
                    <a
                      href="/parents/course-profile"
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
                      href="/parents/course-profile"
                      className="course-item-5-card-head"
                    >
                      {item.title}
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
                        {item.students} <span>students</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div className="col-md-6 col-xl-4">
      <div className="course-item-4">
        <div className="course-item-5-card">
          <a href="/parents/course-profile" className="course-item-5-card-img">
            <img src="assets/images/course2.jpg" alt="" />
          </a>
          <div className="course-item-5-card-info">
            <button className="course-item-5-card-info-tag tag-color2">
              Developments
            </button>
            <p className="course-item-5-card-info-price">$57</p>
          </div>
          <a href="/parents/course-profile" className="course-item-5-card-head">
            Facebook Ads &amp; Facebook Marketing MASTERY 2021 Cours...
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
    <div className="col-md-6 col-xl-4">
      <div className="course-item-4">
        <div className="course-item-5-card">
          <a href="/parents/course-profile" className="course-item-5-card-img">
            <img src="assets/images/course3.jpg" alt="" />
          </a>
          <div className="course-item-5-card-info">
            <button className="course-item-5-card-info-tag tag-color3">
              Business
            </button>
            <p className="course-item-5-card-info-price">$57</p>
          </div>
          <a href="/parents/course-profile" className="course-item-5-card-head">
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
      </div>
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="course-item-4">
        <div className="course-item-5-card">
          <a href="/parents/course-profile" className="course-item-5-card-img">
            <img src="assets/images/course4.jpg" alt="" />
          </a>
          <div className="course-item-5-card-info">
            <button className="course-item-5-card-info-tag tag-color2">
              Marketing
            </button>
            <p className="course-item-5-card-info-price">$57</p>
          </div>
          <a href="/parents/course-profile" className="course-item-5-card-head">
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
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="course-item-4">
        <div className="course-item-5-card">
          <a href="/parents/course-profile" className="course-item-5-card-img">
            <img src="assets/images/course1.jpg" alt="" />
          </a>
          <div className="course-item-5-card-info">
            <button className="course-item-5-card-info-tag">Design</button>
            <p className="course-item-5-card-info-price">$57</p>
          </div>
          <a href="/parents/course-profile" className="course-item-5-card-head">
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
    </div>
    <div className="col-md-6 col-xl-4">
      <div className="course-item-4">
        <div className="course-item-5-card">
          <a href="/parents/course-profile" className="course-item-5-card-img">
            <img src="assets/images/course2.jpg" alt="" />
          </a>
          <div className="course-item-5-card-info">
            <button className="course-item-5-card-info-tag tag-color2">
              Developments
            </button>
            <p className="course-item-5-card-info-price">$57</p>
          </div>
          <a href="/parents/course-profile" className="course-item-5-card-head">
            Facebook Ads &amp; Facebook Marketing MASTERY 2021 Cours...
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
    </div> */}
      </div>
      <div className="pag text-center mt-2">
        <div className="pag-arrow pag-arrow-left">
          <a href="#">
            <svg
              className="align-self-center"
              width={18}
              height={16}
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8H0.75"
                stroke="#FF6636"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 1.25L0.75 8L7.5 14.75"
                stroke="#FF6636"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="pag-content">
          <ul>
            <li className="active">
              <a href="#">01</a>
            </li>
            <li>
              <a href="#">02</a>
            </li>
            <li>
              <a href="#">03</a>
            </li>
            <li>
              <a href="#">04</a>
            </li>
            <li>
              <a href="#">05</a>
            </li>
          </ul>
        </div>
        <div className="pag-arrow pag-arrow-right">
          <a href="#">
            <svg
              className="align-self-center"
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
        </div>
      </div>
    </>
  );
};

export default CoursesSection;
