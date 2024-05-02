import React from "react";
import { postPayment } from "../../../services/apiParents";
import { redirect, useNavigate } from "react-router-dom";
const CartSection = () => {
  let navigate = useNavigate();
  const handleClickPayment = async () => {
    let data = await postPayment();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    if (data && data.EC === 0) {
      window.location.href = data.data;
    }
  };

  const info = {
    name: "Khám phá toán tư duy Soroban cho học sinh tiểu học",
    title:
      "Học cách áp dụng phương pháp Soroban trong giải quyết bài toán, phát triển kỹ năng toán học và rèn luyện tư duy logic cho học sinh tiểu học.",
    teacher: "Phạm Thế Hiểu",
    price: "1.200.000 VND",
    priceBefore: "2.000.000 VND",
    discount: "40%",
    imgTeacher1:
      "https://media.licdn.com/dms/image/D5603AQHrkBt0FZTR3w/profile-displayphoto-shrink_800_800/0/1683948337409?e=2147483647&v=beta&t=LnHIOp5P29MrmdCMgKqBHf5mURxlBoGfa232zy5bn7I",
    imgTeacher2:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/277354963_678836309986422_7620062949241528348_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KE8a6gHmr04Q7kNvgERbTjU&_nc_ht=scontent-hkg1-2.xx&oh=00_AfD-fv8-hzKmd-On4Lsm4AccqCs1tJlq7psMNrtJtlZu7Q&oe=66380607",
    second_teacher: "Hoàng Đức Nguyên",
    desc: ` Khóa học 'Khám phá toán tư duy Soroban cho học sinh tiểu học' là một chương trình học hấp dẫn và thú vị giúp các em học sinh tiểu học khám phá và phát triển kỹ năng toán tư duy thông qua phương pháp Soroban - một phương pháp giáo dục toán học phổ biến được áp dụng rộng rãi trên thế giới.

        Trong khóa học này, các em sẽ được học cách tiếp cận toán học một cách sáng tạo và thú vị thông qua các bài tập và trò chơi dựa trên Soroban. Chương trình giảng dạy được thiết kế một cách đơn giản và dễ hiểu, phù hợp với độ tuổi và trình độ của học sinh tiểu học.

        Các em sẽ được hướng dẫn cách áp dụng toán học vào cuộc sống hàng ngày thông qua các bài toán thực tế và các tình huống giải quyết vấn đề. Không chỉ giúp các em nắm vững kiến thức toán học cơ bản mà còn phát triển kỹ năng tư duy logic, khả năng tư duy linh hoạt và sáng tạo.

        Với khóa học này, mục tiêu không chỉ là giúp học sinh tiểu học có kiến thức toán học vững chắc mà còn là tạo ra một môi trường học tập tích cực và thú vị, khơi dậy niềm đam mê và sự hứng thú trong việc học toán.`,
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
      <div className="public-shopping-cart-section section-padding">
        <div className="container">
          <div className="student-title">
            <h2>Giỏ hàng của tôi (1)</h2>
          </div>
          <div className="row">
            <div className="col-xl-9">
              <div className="shopping-body-text">
                <div className="shopping-body-bottom">
                  <div className="student-wishist-header student-shopping-header">
                    <p className="one">Khóa học</p>
                    <p className="mx-4 two"> Giá</p>
                    <p className="three">Tùy chọn</p>
                  </div>
                  <div className="faq-review-wrap">
                    <div className="faq-review-item">
                      <div className="faq-review-item-content">
                        <button className="cross-btn-shopping">
                          <svg
                            className="align-self-center"
                            width={25}
                            height={24}
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                            />
                            <path
                              d="M15.5 9L9.5 15"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.5 15L9.5 9"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <a
                          className="faq-review-thumb"
                          href="/parents/course-profile"
                        >
                          {" "}
                          <img
                            src="https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/620f15a21a1b856310fde8de/content_toan-tu-duy-la-gi.jpg"
                            alt=""
                          />
                        </a>
                        <div className="faq-review-data">
                          <div className="faq-review-data-top">
                            <h5>
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
                              4.7 <span> (451 Review)</span>
                            </h5>
                            <a href="/parents/course-profile">{info.name}</a>
                          </div>
                          <div className="faq-review-data-bottom">
                            <p>
                              Course by:<span>{info.teacher}</span>{" "}
                              <span>{info.second_teacher}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="amount">{info.price}</div>
                      <div className="move-to-wishlist">
                        <a href="#"> Move to Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="amount-sidebar public-shopping-cart">
                <div className="about-sidebar-wrap">
                  <div className="amunt-detalis">
                    <ul>
                      <li>
                        Tổng đơn hàng<span>1.200.000 VND</span>
                      </li>
                      <li>
                        Mã giảm giá<span>10%</span>
                      </li>
                      <li>
                        Thuế<span>60.000 VND</span>
                      </li>
                    </ul>
                    <h3>
                      Tổng:
                      <span />
                      1.140.000 VND
                    </h3>
                  </div>
                  <div className="amaunt-confirm-button">
                    <a
                      className="button button--lg button-i--r d-block"
                      href="#"
                      onClick={() => {
                        handleClickPayment();
                      }}
                    >
                      Xác nhận thanh toán
                      <span>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 12H20.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 5.25L20.25 12L13.5 18.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="coupon-code">
                    <h4>Mã giảm giá</h4>
                    <form action="#">
                      <div className="form-field">
                        <div className="field-wrapper">
                          <input type="text" placeholder="Coupon code" />
                          <button id="coupon-apply">Áp dụng</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
