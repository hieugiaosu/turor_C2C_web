import React from "react";
const TutorSection = () => {
  const instructors = [
    {
      name: "Phạm Thế Hiểu",
      role: "Luyện thi Đại học",
      imgSrc:
        "https://media.licdn.com/dms/image/D5603AQHrkBt0FZTR3w/profile-displayphoto-shrink_800_800/0/1683948337409?e=2147483647&v=beta&t=LnHIOp5P29MrmdCMgKqBHf5mURxlBoGfa232zy5bn7I",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Đặng Quang Vinh",
      role: "Báo bài Tiểu học",
      imgSrc:
        "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/276141419_1609475789409616_3802600220044426159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PFq_vwPxNgwQ7kNvgFGyQvs&_nc_ht=scontent.fsgn21-1.fna&oh=00_AYBdBqerLu-7eC_rk2ILBUjTeaEjWz9WtZRfv9Rp3R6zQw&oe=6665C523",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Nguyễn Phan Hoàng Phúc",
      role: "Văn Anh THCS",
      imgSrc:
        "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/355167881_1385377535340453_9167848635188842104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I7JOf2U-qR0Q7kNvgEzw5du&_nc_ht=scontent.fsgn21-1.fna&oh=00_AYAEVL2aYA2FfDAlCxymULQW8o7pxyWBH161veFiiXwVPg&oe=6665B0FB",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Huỳnh Thái Học",
      role: "Toán Lý Hóa THPT",
      imgSrc:
        "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/267327312_314178423901054_2956773516621505518_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tt54Hi-ubmMQ7kNvgEnaFhR&_nc_ht=scontent.fsgn21-1.fna&oh=00_AYA44__3qUQG-mt6Qjbjs-PunQc_GqhTPhf360wreboGRA&oe=6665BA2D",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Nguyễn Châu Long",
      role: "ĐGNL ĐHQG TP.HCM",
      imgSrc:
        "https://scontent.fsgn21-1.fna.fbcdn.net/v/t1.6435-9/199515876_1147737032374233_1592432419717420768_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=32qdDL2QSRMQ7kNvgHbDV9a&_nc_ht=scontent.fsgn21-1.fna&oh=00_AYCA2OAbDmH5mUQGxBQEuJ72D4j-JQ0Zp01cKsmImV3uDw&oe=66876540",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Phạm Phú Khang",
      role: "Văn Sử Địa THPT",
      imgSrc:
        "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/266478371_1097661247640971_8382659127129678629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ovDzDKURlvAQ7kNvgFK4Pla&_nc_ht=scontent.fsgn21-1.fna&oh=00_AYDLYyB6V_MWgci8gVOmpvg7kuThsoRv7CF_MaAnf01YbQ&oe=6665DC2A",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Hoàng Đức Nguyên",
      role: "Ôn HSG THCS",
      imgSrc:
        "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/277354963_678836309986422_7620062949241528348_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JHgdImEKqTMQ7kNvgHtOGym&_nc_ht=scontent.fsgn21-1.fna&oh=00_AYDPPDDHCBMPgA9--udAHrdN9z_Ztd2JM2AVqNvbrpuzWw&oe=6665BA07",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Thái Bảo Long",
      role: "KHTN THCS",
      imgSrc: "https://i.postimg.cc/dVmDgvCD/image.png",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Lê Anh Huy",
      role: "IELTS TOEIC",
      imgSrc:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      rating: "5.0",
      students: "265.7K",
    },
    {
      name: "Lã Nguyễn Gia Hy",
      role: "Luyện thi HSGQG",
      imgSrc:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      rating: "5.0",
      students: "265.7K",
    },
  ];

  return (
    <>
      <div className="feature-course-section">
        <div className="container">
          <div className="feature-course-wrap">
            <div className="section-title">
              <h2>Gia sư hàng đầu của chúng tôi</h2>
            </div>
            <div className="d-flex justify-content-center course-item-5-grid">
              {instructors &&
                instructors.length > 0 &&
                instructors.map((item, index) => {
                  return (
                    <>
                      <div className="course-item-5">
                        <div className="course-item-5-card">
                          <a
                            href="/parents/tutor-profile"
                            className="course-item-5-card-img team-thumb"
                          >
                            <img src={item.imgSrc} alt="" />
                          </a>
                          <div className="course-item-data">
                            <h5>{item.name}</h5>
                            <p>{item.role}</p>
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
                              <span>Bách Khoa</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="icon-bottom-btn mt-4">
              <p>
                Hãy lựa chọn giảng viên phù hợp để con bạn có một hành trình học
                tập thành công!
                <a href="parents/tutors">
                  Tìm kiếm gia sư ngay!
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
    </>
  );
};

export default TutorSection;
