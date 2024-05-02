import React from "react";
import Header from "../header/Header";
const TutorProfile = (props) => {
  const sampleData = {
    name: "Phạm Thế Hiểu",
    intro:
      "My name is Phạm Thế Hiểu, and I am a junior at Ho Chi Minh City University of Technology (HCMUT), studying computer science in the honor program. My interests primarily lie in the fields of Artificial Intelligence, Software Engineering, and Web Development. I am eager to expand my knowledge in these areas.",
    image:
      "https://media.licdn.com/dms/image/D5635AQFRuIvtJaIQcg/profile-framedphoto-shrink_800_800/0/1712910607514?e=1715108400&v=beta&t=F_mixyfCrfwfhN9F-VEyL2dhdc_swZkN3njO18sXZLI",
    courses: "Luyện thi Đại học - Môn Toán Lý Hóa",
    link: "https://www.linkedin.com/in/thehieu1402",

    feedback: [
      {
        name: "Nguyển Văn An ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltYLVwTw1kABjUAdyoTJC6jXOWLGqrSOFNAZI9vug8Q&s",
        rating: 4,
        date: "1 tuần trước",
        comment:
          "Tôi đánh giá cao các video ngắn gọn và chính xác (mỗi video dưới 10 phút) vì video quá dài thường làm tôi mất tập trung. Giảng viên rất am hiểu về Thiết kế Web và điều đó hiển thị qua cách ông chia sẻ kiến thức của mình. Đây là 6 tháng học tốt nhất của tôi. Cảm ơn, Vako.",
      },
      {
        name: "Trần Văn Bình",
        image:
          "https://cdn2.vectorstock.com/i/1000x1000/91/36/young-people-male-cartoon-design-vector-5989136.jpg",
        rating: 4,
        date: "2 ngày trước",
        comment:
          "Khóa học TUYỆT VỜI! Giảng viên mô tả rất chi tiết và chuyên nghiệp. Tôi học được RẤT NHIỀU điều sẽ áp dụng ngay vào công việc thực tế. Cảm ơn rất nhiều, không thể đợi để tham gia khóa học tiếp theo!",
      },
      {
        name: "Thảo Thi",
        rating: 4,
        image:
          "https://i.pinimg.com/736x/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg",
        date: "1 tuần trước",
        comment:
          "Đây nên là một trong những khóa học tốt nhất mà tôi từng tham gia. Rất khuyến nghị cho những người mới bắt đầu !",
      },
    ],
  };
  return (
    <>
      <Header />
      <>
        <div className="student-breadcrumb" />
        <div className="student-profile-section">
          <div className="container">
            <div className="profile-wrap">
              <div className="profile-left">
                <div className="profile-thumb">
                  <img src={sampleData.image} alt="" />
                </div>
                <div className="profile-data">
                  <h3>
                    {sampleData.name}
                    <span>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.52546 15.3138C3.54495 15.396 3.58085 15.4733 3.63101 15.5412C3.68117 15.6092 3.74456 15.6662 3.81735 15.709C3.89014 15.7518 3.97084 15.7794 4.05458 15.7902C4.13833 15.801 4.22339 15.7947 4.30465 15.7718C8.03036 14.7431 11.9651 14.7427 15.6911 15.7707C15.7723 15.7936 15.8573 15.7999 15.941 15.7891C16.0247 15.7783 16.1054 15.7507 16.1782 15.7079C16.2509 15.6652 16.3143 15.6082 16.3645 15.5403C16.4146 15.4724 16.4506 15.3951 16.4701 15.3129L18.4614 6.85069C18.488 6.7374 18.4825 6.61892 18.4455 6.5086C18.4084 6.39827 18.3413 6.30047 18.2517 6.22623C18.1621 6.15198 18.0535 6.10424 17.9382 6.08836C17.8229 6.07249 17.7055 6.08913 17.5991 6.13639L13.6473 7.89277C13.5046 7.9562 13.3433 7.9639 13.1952 7.91437C13.0471 7.86485 12.9229 7.76167 12.8471 7.62517L10.5461 3.48342C10.492 3.38599 10.4128 3.3048 10.3167 3.24828C10.2207 3.19176 10.1112 3.16195 9.99979 3.16195C9.88833 3.16195 9.7789 3.19176 9.68283 3.24828C9.58677 3.3048 9.50757 3.38599 9.45344 3.48342L7.15247 7.62517C7.07664 7.76167 6.95245 7.86484 6.80435 7.91437C6.65626 7.9639 6.49499 7.95619 6.35229 7.89277L2.39983 6.13613C2.2935 6.08887 2.17609 6.07223 2.06082 6.08809C1.94555 6.10395 1.83699 6.15167 1.74737 6.22588C1.65775 6.30009 1.59063 6.39785 1.55356 6.50814C1.51649 6.61844 1.51095 6.73689 1.53755 6.85017L3.52546 15.3138Z"
                          stroke="#FF6636"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 12.6311C9.16208 12.4563 10.8379 12.4563 12.5 12.6311"
                          stroke="#FF6636"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Top Rated
                    </span>
                  </h3>
                  <p> {sampleData.courses}</p>
                  <div className="profile-review">
                    <ul>
                      <li>
                        <svg
                          width={20}
                          height={19}
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                            fill="#FD8E1F"
                          />
                        </svg>
                        <span>4.8</span>
                        (134,633 review)
                      </li>
                      <li>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
                            stroke="#564FFD"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M14.5698 5.43158C15.2403 5.24266 15.9436 5.19962 16.6321 5.30537C17.3207 5.41111 17.9786 5.66318 18.5615 6.04459C19.1444 6.42601 19.6389 6.92791 20.0115 7.5165C20.3841 8.10509 20.6263 8.7667 20.7217 9.45676C20.8171 10.1468 20.7635 10.8493 20.5645 11.5169C20.3655 12.1845 20.0258 12.8018 19.5682 13.327C19.1107 13.8523 18.5458 14.2734 17.9118 14.562C17.2777 14.8505 16.5892 14.9999 15.8926 15"
                            stroke="#564FFD"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.49951 18.5059C2.26089 17.4229 3.27166 16.539 4.4465 15.9288C5.62133 15.3186 6.92574 15.0001 8.24959 15C9.57344 14.9999 10.8779 15.3184 12.0528 15.9285C13.2276 16.5386 14.2385 17.4225 14.9999 18.5054"
                            stroke="#564FFD"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
                            stroke="#564FFD"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>430,117</span>
                        students
                      </li>
                      <li>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            fill="#FF6636"
                            stroke="#FF6636"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M15 12L10.5 9V15L15 12Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>7</span>
                        courses
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="profile-right">
                <a className="website-link" href="#">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#564FFD"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M3 12H21"
                      stroke="#564FFD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20.7584C14.0711 20.7584 15.75 16.8371 15.75 12C15.75 7.16287 14.0711 3.2416 12 3.2416C9.92893 3.2416 8.25 7.16287 8.25 12C8.25 16.8371 9.92893 20.7584 12 20.7584Z"
                      stroke="#564FFD"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                  </svg>
                  {sampleData.link}
                </a>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <svg
                          width={11}
                          height={20}
                          viewBox="0 0 11 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33076 3.32083H10.1566V0.140833C9.84159 0.0975 8.75826 0 7.49659 0C4.86409 0 3.06076 1.65583 3.06076 4.69917V7.5H0.155762V11.055H3.06076V20H6.62243V11.0558H9.40993L9.85243 7.50083H6.62159V5.05167C6.62243 4.02417 6.89909 3.32083 8.33076 3.32083Z"
                            fill="#4E5566"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width={20}
                          height={18}
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z"
                            fill="#4E5566"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              d="M19.9799 5.88005C19.9331 4.81738 19.7612 4.0868 19.5151 3.45374C19.2611 2.78176 18.8704 2.18014 18.3585 1.68002C17.8584 1.1721 17.2528 0.777435 16.5886 0.527447C15.9519 0.281274 15.2251 0.109427 14.1625 0.0625732C13.0919 0.0117516 12.752 0 10.0366 0C7.32124 0 6.98136 0.0117516 5.91472 0.0586052C4.85204 0.105459 4.12146 0.277459 3.48855 0.523479C2.81643 0.777435 2.21481 1.16814 1.71468 1.68002C1.20677 2.18014 0.812254 2.78573 0.562114 3.44992C0.315942 4.0868 0.144095 4.81341 0.0972411 5.87609C0.0464195 6.9467 0.034668 7.28658 0.034668 10.002C0.034668 12.7173 0.0464195 13.0572 0.0932731 14.1239C0.140127 15.1865 0.312127 15.9171 0.558299 16.5502C0.812254 17.2221 1.20677 17.8238 1.71468 18.3239C2.21481 18.8318 2.8204 19.2265 3.48459 19.4765C4.12146 19.7226 4.84807 19.8945 5.9109 19.9413C6.97739 19.9883 7.31742 19.9999 10.0328 19.9999C12.7482 19.9999 13.088 19.9883 14.1547 19.9413C15.2174 19.8945 15.9479 19.7226 16.5808 19.4765C17.925 18.9568 18.9876 17.8941 19.5073 16.5502C19.7533 15.9133 19.9253 15.1865 19.9722 14.1239C20.019 13.0572 20.0308 12.7173 20.0308 10.002C20.0308 7.28658 20.0268 6.9467 19.9799 5.88005ZM18.1789 14.0457C18.1359 15.0225 17.9718 15.5499 17.8351 15.9015C17.499 16.7728 16.8075 17.4643 15.9362 17.8004C15.5846 17.9372 15.0533 18.1012 14.0804 18.1441C13.0255 18.1911 12.7091 18.2027 10.0406 18.2027C7.37206 18.2027 7.05172 18.1911 6.00064 18.1441C5.02389 18.1012 4.49644 17.9372 4.14481 17.8004C3.71122 17.6402 3.31656 17.3862 2.99621 17.0541C2.66412 16.7298 2.41016 16.3391 2.24991 15.9055C2.11317 15.5539 1.9491 15.0225 1.90622 14.0497C1.85921 12.9948 1.84761 12.6783 1.84761 10.0097C1.84761 7.34122 1.85921 7.02087 1.90622 5.96995C1.9491 4.99319 2.11317 4.46575 2.24991 4.11412C2.41016 3.68038 2.66412 3.28586 3.00018 2.96536C3.32434 2.63327 3.71504 2.37931 4.14878 2.21921C4.50041 2.08247 5.03182 1.9184 6.00461 1.87537C7.0595 1.82851 7.37603 1.81676 10.0444 1.81676C12.7169 1.81676 13.0333 1.82851 14.0843 1.87537C15.0611 1.9184 15.5885 2.08247 15.9402 2.21921C16.3737 2.37931 16.7684 2.63327 17.0888 2.96536C17.4209 3.28967 17.6748 3.68038 17.8351 4.11412C17.9718 4.46575 18.1359 4.99701 18.1789 5.96995C18.2258 7.02484 18.2375 7.34122 18.2375 10.0097C18.2375 12.6783 18.2258 12.9908 18.1789 14.0457Z"
                              fill="#4E5566"
                            />
                            <path
                              d="M10.0362 4.86423C7.19976 4.86423 4.89844 7.1654 4.89844 10.002C4.89844 12.8385 7.19976 15.1397 10.0362 15.1397C12.8727 15.1397 15.1739 12.8385 15.1739 10.002C15.1739 7.1654 12.8727 4.86423 10.0362 4.86423ZM10.0362 13.3347C8.19605 13.3347 6.70345 11.8422 6.70345 10.002C6.70345 8.16169 8.19605 6.66924 10.0362 6.66924C11.8764 6.66924 13.3689 8.16169 13.3689 10.002C13.3689 11.8422 11.8764 13.3347 10.0362 13.3347Z"
                              fill="#4E5566"
                            />
                            <path
                              d="M16.5772 4.6611C16.5772 5.32346 16.0402 5.86052 15.3777 5.86052C14.7153 5.86052 14.1782 5.32346 14.1782 4.6611C14.1782 3.99858 14.7153 3.46167 15.3777 3.46167C16.0402 3.46167 16.5772 3.99858 16.5772 4.6611Z"
                              fill="#4E5566"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              d="M19.5879 5.19899C19.3574 4.34222 18.6819 3.66687 17.8252 3.43616C16.2602 3.00784 9.99981 3.00784 9.99981 3.00784C9.99981 3.00784 3.73961 3.00784 2.17452 3.41983C1.33438 3.65039 0.642392 4.34237 0.411833 5.19899C0 6.76393 0 10.0095 0 10.0095C0 10.0095 0 13.2713 0.411833 14.8199C0.642545 15.6765 1.3179 16.352 2.17467 16.5828C3.75609 17.0111 9.99996 17.0111 9.99996 17.0111C9.99996 17.0111 16.2602 17.0111 17.8252 16.5991C18.682 16.3685 19.3574 15.693 19.5881 14.8364C19.9999 13.2713 19.9999 10.0259 19.9999 10.0259C19.9999 10.0259 20.0164 6.76393 19.5879 5.19899Z"
                              fill="#4E5566"
                            />
                            <path
                              className="youtube"
                              d="M8.00586 13.0078L13.2117 10.0095L8.00586 7.01112V13.0078Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6324 3.34007C14.8783 1.58386 12.5454 0.616264 10.0601 0.615234C4.93885 0.615234 0.770912 4.78306 0.768852 9.90566C0.768166 11.5432 1.19595 13.1417 2.00905 14.5507L0.690918 19.3652L5.61634 18.0732C6.97349 18.8135 8.5014 19.2036 10.0563 19.2041H10.0602C15.1809 19.2041 19.3492 15.0359 19.3512 9.9131C19.3522 7.43042 18.3867 5.09617 16.6324 3.34007ZM10.0601 17.635H10.0569C8.67123 17.6344 7.31224 17.262 6.1264 16.5586L5.84454 16.3911L2.92171 17.1579L3.70186 14.3082L3.51818 14.016C2.74513 12.7865 2.33692 11.3654 2.33761 9.90623C2.33921 5.64846 5.80357 2.18445 10.0632 2.18445C12.1259 2.18513 14.0648 2.98943 15.5228 4.44912C16.9808 5.90881 17.7832 7.84904 17.7826 9.91253C17.7807 14.1706 14.3166 17.635 10.0601 17.635ZM14.296 11.8513C14.0639 11.735 12.9225 11.1736 12.7096 11.096C12.497 11.0185 12.342 10.9799 12.1874 11.2122C12.0326 11.4445 11.5878 11.9675 11.4523 12.1224C11.3168 12.2773 11.1815 12.2968 10.9493 12.1805C10.7171 12.0644 9.9691 11.8191 9.0823 11.0282C8.39222 10.4126 7.92633 9.6524 7.79083 9.42009C7.65556 9.18754 7.78969 9.07402 7.89268 8.9463C8.144 8.63422 8.39565 8.30704 8.47301 8.1522C8.55049 7.99724 8.51169 7.86163 8.45356 7.74547C8.39565 7.62932 7.93137 6.48662 7.73796 6.02165C7.54936 5.56915 7.35813 5.63026 7.21554 5.62317C7.08027 5.61642 6.92543 5.61504 6.77059 5.61504C6.61587 5.61504 6.36433 5.67306 6.15147 5.90561C5.93872 6.13804 5.33905 6.6996 5.33905 7.84229C5.33905 8.98498 6.17092 10.0889 6.28696 10.2438C6.40301 10.3988 7.92404 12.7437 10.2528 13.7492C10.8067 13.9886 11.2391 14.1313 11.5763 14.2383C12.1325 14.415 12.6384 14.39 13.0385 14.3303C13.4846 14.2636 14.4119 13.7686 14.6056 13.2264C14.799 12.6841 14.799 12.2193 14.7408 12.1224C14.6829 12.0256 14.5281 11.9675 14.296 11.8513Z"
                            fill="#4E5566"
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
        {/*End student-profile-section */}
        <div className="instructor-profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="instructor-about-content">
                  <h4>About Me</h4>
                  {sampleData.intro}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="student-tabs-wrap instructor-tabs-wrap">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="tabs1"
                        data-bs-toggle="pill"
                        data-bs-target="#tabs01"
                        type="button"
                        role="tab"
                        aria-controls="tabs01"
                        aria-selected="true"
                      >
                        Feedback
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="tabs2"
                        data-bs-toggle="pill"
                        data-bs-target="#tabs02"
                        type="button"
                        role="tab"
                        aria-controls="tabs02"
                        aria-selected="false"
                      >
                        Review
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="tabs01"
                      role="tabpanel"
                      aria-labelledby="tabs1"
                    >
                      {/* <div className="course-section">
                        <div className="student-title">
                          <h2>Vako Courses (02)</h2>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/course8.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color2">
                                    Developments
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Machine Learning A-Z™: Hands-On Python &amp; R
                                  In Data Science
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/slider3.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color3">
                                    Business
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Selenium WebDriver with Java -Basics to
                                  Advanced+Frameworks
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/course1.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color2">
                                    Developments
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Data Structures &amp; Algorithms Essentials
                                  (2021)
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/course9.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color2">
                                    Developments
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Complete Adobe Lightroom Megacourse: Beginner
                                  to Expert
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/course2.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color2">
                                    Developments
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Graphic Design Masterclass - Learn GREAT
                                  Design
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/course3.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color2">
                                    Developments
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Digital Marketing Masterclass - 23 Courses in
                                  1
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course-item-4 instructor-profile">
                              <div className="course-item-5-card">
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-img"
                                >
                                  <img src="assets/images/course7.jpg" alt="" />
                                </a>
                                <div className="course-item-5-card-info">
                                  <button className="course-item-5-card-info-tag tag-color2">
                                    Developments
                                  </button>
                                  <p className="course-item-5-card-info-price">
                                    $57
                                  </p>
                                </div>
                                <a
                                  href="single-course.html"
                                  className="course-item-5-card-head"
                                >
                                  Mega Digital Marketing Course A-Z: 12 Courses
                                  in 1 + Updates
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
                                  <div className="feature-course-footer">
                                    <div className="feature-course-footer-item">
                                      <svg
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                        />
                                        <path
                                          d="M2.42102 17.3743C3.18943 16.0442 4.29431 14.9398 5.62468 14.172C6.95505 13.4042 8.46405 13 10.0001 13C11.5361 13 13.0451 13.4043 14.3755 14.1721C15.7058 14.94 16.8107 16.0444 17.5791 17.3744"
                                          stroke="#564FFD"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <p className="p-color">
                                        265.7K <span>Students</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/*End course-section */}
                      <div className="student-feedback-section">
                        <div className="course-single-title">
                          <h3>Students Feedback</h3>
                          <div className="select-box ratting">
                            <select
                              className="custom-select sources"
                              title="5 Star Rating"
                            >
                              <option>4 Star Rating</option>
                              <option>3 Star Rating</option>
                              <option>2 Star Rating</option>
                              <option>1 Star Rating</option>
                            </select>
                          </div>
                        </div>
                        <div className="review-wrap">
                          {sampleData &&
                            sampleData.feedback &&
                            sampleData.feedback.length > 0 &&
                            sampleData.feedback.map((item, index) => {
                              return (
                                <div className="review-item">
                                  <div className="review-thumb">
                                    <img src={item.image} alt="" />
                                  </div>
                                  <div className="review-data">
                                    <h5>
                                      {item.name} <span> {item.date}</span>
                                    </h5>
                                    <div className="review">
                                      <ul>
                                        <li>
                                          <svg
                                            width={14}
                                            height={13}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                              fill="#FD8E1F"
                                            />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            width={14}
                                            height={13}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                              fill="#FD8E1F"
                                            />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            width={14}
                                            height={13}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                              fill="#FD8E1F"
                                            />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            width={14}
                                            height={13}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                              fill="#FD8E1F"
                                            />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            width={14}
                                            height={13}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64074 10.2782 8.53574 10.3096 8.43761C10.3409 8.33947 10.3994 8.25218 10.4781 8.18578L13.3049 5.83307C13.6763 5.52393 13.4846 4.90752 13.0074 4.87655L9.31588 4.63697C9.21645 4.62986 9.12109 4.59466 9.04089 4.53546C8.96069 4.47625 8.89896 4.39548 8.86289 4.30256L7.48612 0.835494C7.44869 0.736859 7.38215 0.651943 7.29532 0.592021C7.2085 0.532099 7.1055 0.500008 7 0.500008C6.89451 0.500008 6.79151 0.532099 6.70468 0.592021C6.61786 0.651943 6.55131 0.736859 6.51389 0.835494L5.13712 4.30256C5.10104 4.39548 5.03932 4.47625 4.95912 4.53546C4.87892 4.59466 4.78355 4.62986 4.68412 4.63697L0.992627 4.87655C0.515435 4.90752 0.323731 5.52393 0.695149 5.83307L3.52186 8.18578C3.60063 8.25218 3.65907 8.33947 3.69044 8.43761C3.72181 8.53574 3.72485 8.64074 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.0831 3.79495 12.7767L6.72431 10.9208C6.8067 10.8684 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8684 7.27569 10.9208Z"
                                              fill="#FD8E1F"
                                            />
                                          </svg>
                                        </li>
                                      </ul>
                                    </div>
                                    <p>{item.comment}</p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                        <a
                          className="button button--md button-p-s button-i--r"
                          href="#"
                        >
                          Load more
                          <span>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3V6"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.9"
                                d="M18.364 5.63574L16.2427 7.75706"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.8"
                                d="M21 12H18"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.7"
                                d="M18.364 18.3635L16.2427 16.2422"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.6"
                                d="M12 21V18"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.5"
                                d="M5.63623 18.3635L7.75755 16.2422"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M3 12H6"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                opacity="0.3"
                                d="M5.63623 5.63574L7.75755 7.75706"
                                stroke="#FF6636"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tabs02"
                      role="tabpanel"
                      aria-labelledby="tabs2"
                    >
                      <div className="course-ratting-section">
                        <div className="course-single-title">
                          <h3>Course Reting</h3>
                        </div>
                        <div className="rating-area">
                          <div className="rating-box">
                            <h4>4.8</h4>
                            <ul className="total-star list-inline">
                              <li className="list-inline-item">
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                              </li>
                              <li className="list-inline-item">
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                              </li>
                              <li className="list-inline-item">
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                              </li>
                              <li className="list-inline-item">
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                              </li>
                              <li className="list-inline-item">
                                <svg
                                  width={20}
                                  height={19}
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                    fill="#FD8E1F"
                                  />
                                </svg>
                              </li>
                              <li className="list-inline-item">
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34568L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34568C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901V14.901Z"
                                    stroke="#FD8E1F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <mask
                                    id="mask0_2450:72399"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={10}
                                    height={21}
                                  >
                                    <path
                                      d="M10 0.5H0V20.5H10V0.5Z"
                                      fill="white"
                                    />
                                  </mask>
                                  <g mask="url(#mask0_2450:72399)">
                                    <path
                                      d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34567L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34567C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901Z"
                                      fill="#FD8E1F"
                                    />
                                  </g>
                                </svg>
                              </li>
                            </ul>
                            <p>Course Rating</p>
                          </div>
                          <div className="rating-percentage">
                            <div className="percentage-line">
                              <ul className="total-star total-star-sm list-inline">
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                              </ul>
                              <div className="rating">5 Star Rating</div>
                              <div className="rating-area-percentage">
                                <div className="main-percentage-bg" />
                                <div className="main-percentage four" />
                              </div>
                              <div className="percentage-text">
                                <span>75%</span>
                              </div>
                            </div>
                            <div className="percentage-line">
                              <ul className="total-star total-star-sm list-inline">
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                              </ul>
                              <div className="rating">4 Star Rating</div>
                              <div className="rating-area-percentage">
                                <div className="main-percentage-bg" />
                                <div className="main-percentage four" />
                              </div>
                              <div className="percentage-text">
                                <span>21%</span>
                              </div>
                            </div>
                            <div className="percentage-line">
                              <ul className="total-star total-star-sm list-inline">
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                              </ul>
                              <div className="rating">3 Star Rating</div>
                              <div className="rating-area-percentage">
                                <div className="main-percentage-bg" />
                                <div className="main-percentage three" />
                              </div>
                              <div className="percentage-text">
                                <span>3%</span>
                              </div>
                            </div>
                            <div className="percentage-line">
                              <ul className="total-star total-star-sm list-inline">
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                              </ul>
                              <div className="rating">2 Star Rating</div>
                              <div className="rating-area-percentage">
                                <div className="main-percentage-bg" />
                                <div className="main-percentage four" />
                              </div>
                              <div className="percentage-text">
                                <span>2%</span>
                              </div>
                            </div>
                            <div className="percentage-line">
                              <ul className="total-star total-star-sm list-inline">
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4135 15.8812L15.1419 18.8769C15.7463 19.2598 16.4967 18.6903 16.3173 17.9847L14.9512 12.6108C14.9127 12.4611 14.9173 12.3036 14.9643 12.1564C15.0114 12.0092 15.0991 11.8783 15.2172 11.7787L19.4573 8.24959C20.0144 7.78588 19.7269 6.86126 19.0111 6.81481L13.4738 6.45544C13.3247 6.44479 13.1816 6.39198 13.0613 6.30317C12.941 6.21437 12.8484 6.09321 12.7943 5.95382L10.7292 0.753229C10.673 0.605277 10.5732 0.477903 10.443 0.38802C10.3127 0.298137 10.1582 0.25 10 0.25C9.84176 0.25 9.68726 0.298137 9.55702 0.38802C9.42678 0.477903 9.32697 0.605277 9.27083 0.753229L7.20568 5.95382C7.15157 6.09321 7.05897 6.21437 6.93868 6.30317C6.81838 6.39198 6.67533 6.44479 6.52618 6.45544L0.98894 6.81481C0.273153 6.86126 -0.0144031 7.78588 0.542723 8.24959L4.78278 11.7787C4.90095 11.8783 4.9886 12.0092 5.03566 12.1564C5.08272 12.3036 5.08727 12.4611 5.0488 12.6108L3.78188 17.5945C3.56667 18.4412 4.46715 19.1246 5.19243 18.6651L9.58647 15.8812C9.71005 15.8025 9.85351 15.7607 10 15.7607C10.1465 15.7607 10.29 15.8025 10.4135 15.8812Z"
                                      fill="#FD8E1F"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                                <li className="list-inline-item">
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.33319 14.3948C9.33345 14.3947 9.3337 14.3945 9.33396 14.3943L9.33319 14.3948ZM9.33319 14.3948L5.67258 16.714C5.62982 16.7411 5.59669 16.7454 5.57129 16.7437C5.54212 16.7417 5.50769 16.73 5.47479 16.7051C5.41054 16.6563 5.37411 16.5775 5.39974 16.4766L6.45512 12.325C6.45521 12.3246 6.45531 12.3243 6.4554 12.3239C6.51527 12.0901 6.50804 11.8442 6.43455 11.6143C6.36094 11.384 6.22384 11.1792 6.03902 11.0235L6.03615 11.0211L2.50277 8.08016C2.48505 8.06541 2.48001 8.05363 2.4775 8.04408C2.47407 8.03108 2.47353 8.0121 2.48001 7.99129C2.48649 7.97044 2.49674 7.95807 2.50296 7.95281L2.50299 7.95279C2.50614 7.95013 2.51151 7.94559 2.52964 7.94442L7.14401 7.64494L7.14401 7.64495L7.14791 7.64468C7.38558 7.6277 7.61354 7.54355 7.80525 7.40203C7.99621 7.26105 8.14337 7.06893 8.22973 6.84788L9.95 2.5158L9.95007 2.51582L9.95334 2.50721C9.95693 2.49774 9.96332 2.48959 9.97165 2.48383C9.97999 2.47808 9.98988 2.475 10 2.475C10.0101 2.475 10.02 2.47808 10.0284 2.48383C10.0367 2.48958 10.0431 2.49774 10.0467 2.50721L10.0466 2.50723L10.05 2.5158L11.7702 6.84774C11.8566 7.06885 12.0038 7.26102 12.1948 7.40203C12.3865 7.54355 12.6144 7.6277 12.8521 7.64468L12.8521 7.64469L12.856 7.64494L17.4704 7.94442C17.4885 7.94559 17.4939 7.95013 17.497 7.95279L17.497 7.95281C17.5033 7.95807 17.5135 7.97044 17.52 7.99129C17.5265 8.0121 17.5259 8.03108 17.5225 8.04408C17.52 8.05363 17.515 8.06541 17.4972 8.08016L13.9639 11.0211L13.9638 11.021L13.961 11.0235C13.7762 11.1792 13.6391 11.384 13.5655 11.6143C13.4919 11.8443 13.4847 12.0904 13.5447 12.3243C13.5448 12.3246 13.5448 12.3248 13.5449 12.325L14.6829 16.8018C14.69 16.8295 14.6863 16.8448 14.6829 16.8537C14.6785 16.8656 14.6697 16.8781 14.6568 16.8879C14.644 16.8976 14.6337 16.8997 14.63 16.9C14.6284 16.9001 14.6268 16.9 14.6246 16.8994C14.6225 16.8989 14.6163 16.8971 14.606 16.8905L10.6668 14.3948C10.6666 14.3947 10.6663 14.3945 10.666 14.3943L9.33319 14.3948Z"
                                      stroke="#FD8E1F"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </li>
                              </ul>
                              <div className="rating">1 Star Rating</div>
                              <div className="rating-area-percentage">
                                <div className="main-percentage-bg" />
                                <div className="main-percentage one" />
                              </div>
                              <div className="percentage-text">
                                <span>2%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TutorProfile;
