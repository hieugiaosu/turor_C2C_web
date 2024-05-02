import React from "react";
import "../sass/main.scss";

const TutorsSection = () => {
  const instructors = [
    {
      name: "Phạm Thế Hiểu",
      role: "Luyện thi Đại học",
      imgSrc:
        "https://media.licdn.com/dms/image/D5603AQHrkBt0FZTR3w/profile-displayphoto-shrink_800_800/0/1683948337409?e=2147483647&v=beta&t=LnHIOp5P29MrmdCMgKqBHf5mURxlBoGfa232zy5bn7I",
      rating: "5.0",
      students: "25",
    },
    {
      name: "Đặng Quang Vinh",
      role: "Báo bài Tiểu học",
      imgSrc:
        "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/276141419_1609475789409616_3802600220044426159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7cJv8HHsjMoQ7kNvgEiVtX_&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBqIfYK_rfbKmEgScozyuAdxPt6MNYWGryOSMTd8tfu0Q&oe=66381123",
      rating: "5.0",
      students: "26",
    },
    {
      name: "Nguyễn Phan Hoàng Phúc",
      role: "Văn Anh THCS",
      imgSrc:
        "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/355167881_1385377535340453_9167848635188842104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qec81lo3-AgQ7kNvgGwtX95&_nc_ht=scontent-hkg4-1.xx&oh=00_AfACeDETs_kwPkFzRPayl49UtY8Z4_1qlU9FUjPOzy5dcA&oe=6638353B",
      rating: "5.0",
      students: "45",
    },
    {
      name: "Huỳnh Thái Học",
      role: "Toán Lý Hóa THPT",
      imgSrc:
        "https://scontent-hkg1-2.xx.fbcdn.net/v/t1.6435-9/129964326_103233228328909_2416127940009701180_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g9eMhlF2qiMAb5SIxB6&_nc_oc=AdiiJYCa6z7KI6-DynVYg_RkDJikedIw9tbcTw0T9pN1Rsckq6KBTofndw-KxtenDcBxnuCMA2tbeQy_DriCqfXx&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAHalTPiZ3f0OLWg5TvWmvzVhkA2s-li-j7d5i-IAACpA&oe=66501176",
      rating: "5.0",
      students: "23",
    },
    {
      name: "Nguyễn Châu Long",
      role: "ĐGNL ĐHQG TP.HCM",
      imgSrc:
        "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/199515876_1147737032374233_1592432419717420768_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nb6R67GLKxsAb7MPjtj&_nc_ht=scontent-hkg4-2.xx&oh=00_AfAwg4UB9xPgJJsSwjmTaDcWncXWMoXRZAl59wKmRcmfjQ&oe=66500640",
      rating: "5.0",
      students: "23",
    },
    {
      name: "Phạm Phú Khang",
      role: "Văn Sử Địa THPT",
      imgSrc:
        "https://scontent-hkg1-2.xx.fbcdn.net/v/t1.6435-9/56420942_447009999372769_4934487368028651520_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lp9ZqIC3BhYQ7kNvgHxT-RO&_nc_ht=scontent-hkg1-2.xx&oh=00_AfATSVfK6Ctf34sha62ijJmIvTPDfFUGgDVikxH6Cs8eiw&oe=6659A053",
      rating: "5.0",
      students: "34",
    },
    {
      name: "Hoàng Đức Nguyên",
      role: "Ôn HSG THCS",
      imgSrc:
        "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/277354963_678836309986422_7620062949241528348_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KE8a6gHmr04Q7kNvgERbTjU&_nc_ht=scontent-hkg1-2.xx&oh=00_AfD-fv8-hzKmd-On4Lsm4AccqCs1tJlq7psMNrtJtlZu7Q&oe=66380607",
      rating: "5.0",
      students: "45",
    },
    {
      name: "Thái Bảo Long",
      role: "KHTN THCS",
      imgSrc: "https://i.postimg.cc/dVmDgvCD/image.png",
      rating: "5.0",
      students: "34",
    },
    {
      name: "Lê Anh Huy",
      role: "IELTS TOEIC",
      imgSrc:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      rating: "5.0",
      students: "32",
    },
    {
      name: "Lã Nguyễn Gia Hy",
      role: "Luyện thi HSGQG",
      imgSrc:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      rating: "5.0",
      students: "56",
    },
  ];
  return (
    <>
      <div className="row shop__product-items">
        {instructors &&
          instructors.length > 0 &&
          instructors.slice(0, 9).map((item, index) => {
            return (
              <div className="col-md-6 col-xl-4">
                <div className="course-item-4">
                  <div className="course-item-5-card">
                    <a
                      href="/parents/tutor-profile"
                      className="course-item-5-card-img"
                    >
                      <img src={item.imgSrc} alt="" />
                    </a>
                    <div className="course-item-5-card-info">
                      <button className="course-item-5-card-info-tag">
                        {item.role}
                      </button>
                      <p className="course-item-5-card-info-price"></p>
                    </div>
                    <a
                      href="single-course.html"
                      className="course-item-5-card-head"
                    >
                      {item.name}
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
              <a href="single-course.html" className="course-item-5-card-img">
                <img src="assets/images/course2.jpg" alt="" />
              </a>
              <div className="course-item-5-card-info">
                <button className="course-item-5-card-info-tag tag-color2">
                  Developments
                </button>
                <p className="course-item-5-card-info-price">$57</p>
              </div>
              <a href="single-course.html" className="course-item-5-card-head">
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
              <a href="single-course.html" className="course-item-5-card-img">
                <img src="assets/images/course3.jpg" alt="" />
              </a>
              <div className="course-item-5-card-info">
                <button className="course-item-5-card-info-tag tag-color3">
                  Business
                </button>
                <p className="course-item-5-card-info-price">$57</p>
              </div>
              <a href="single-course.html" className="course-item-5-card-head">
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
              <a href="single-course.html" className="course-item-5-card-img">
                <img src="assets/images/course4.jpg" alt="" />
              </a>
              <div className="course-item-5-card-info">
                <button className="course-item-5-card-info-tag tag-color2">
                  Marketing
                </button>
                <p className="course-item-5-card-info-price">$57</p>
              </div>
              <a href="single-course.html" className="course-item-5-card-head">
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
              <a href="single-course.html" className="course-item-5-card-img">
                <img src="assets/images/course1.jpg" alt="" />
              </a>
              <div className="course-item-5-card-info">
                <button className="course-item-5-card-info-tag">Design</button>
                <p className="course-item-5-card-info-price">$57</p>
              </div>
              <a href="single-course.html" className="course-item-5-card-head">
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
              <a href="single-course.html" className="course-item-5-card-img">
                <img src="assets/images/course2.jpg" alt="" />
              </a>
              <div className="course-item-5-card-info">
                <button className="course-item-5-card-info-tag tag-color2">
                  Developments
                </button>
                <p className="course-item-5-card-info-price">$57</p>
              </div>
              <a href="single-course.html" className="course-item-5-card-head">
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

export default TutorsSection;
