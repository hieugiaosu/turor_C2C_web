import React from "react";
import "../sass/main.scss";

const FilterSection = () => {
  return (
    <>
      <div className="course-sidebar-wrap shop-content">
        <div className="colurse-sidebar-item">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item main-item">
              <h2 className="accordion-header" id="headingOne01">
                <button
                  className="accordion-button header-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne01"
                  aria-expanded="true"
                  aria-controls="collapseOne01"
                >
                  FILTER
                </button>
              </h2>
              <div
                id="collapseOne01"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne01"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body body-top">
                  <div className="accordion" id="accordionExample2">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.625 9.375H9.375V14.625H14.625V9.375Z"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5Z"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.5 9.75H21.75"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.5 14.25H21.75"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.25 9.75H4.5"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.25 14.25H4.5"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.25 19.5V21.75"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.75 19.5V21.75"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.25 2.25V4.5"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.75 2.25V4.5"
                              stroke="#FF6636"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Cấp độ
                        </button>
                      </h2>
                      <div
                        id="collapseOne1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne1"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <form action="#">
                            <div className="check-field-wrap">
                              <div className="form-group">
                                <input type="checkbox" id={1} />
                                <label htmlFor={1}>
                                  Tiểu học <span>57</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={2} />
                                <label htmlFor={2}>
                                  THCS <span>68</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={3} />
                                <label htmlFor={3}>
                                  THPT <span>45</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={4} />
                                <label htmlFor={4}>
                                  ĐH / CĐ <span>17</span>
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.5673 11.4172L20.25 12.5759L17.25 6.83067L19.5909 5.66024C19.7667 5.5723 19.9701 5.55695 20.1572 5.61749C20.3443 5.67802 20.5001 5.80961 20.5911 5.9839L22.8967 10.3992C22.9428 10.4875 22.9708 10.5841 22.9792 10.6834C22.9876 10.7826 22.9761 10.8825 22.9454 10.9773C22.9148 11.0721 22.8655 11.1598 22.8006 11.2353C22.7357 11.3108 22.6564 11.3727 22.5673 11.4172V11.4172Z"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.74994 12.4753L1.43266 11.3166C1.34357 11.2721 1.26425 11.2103 1.19932 11.1347C1.13439 11.0592 1.08516 10.9715 1.0545 10.8767C1.02383 10.782 1.01235 10.682 1.02072 10.5828C1.02909 10.4835 1.05714 10.387 1.10325 10.2987L3.40883 5.88332C3.49985 5.70902 3.65567 5.57744 3.84275 5.5169C4.02982 5.45636 4.23319 5.47171 4.40906 5.55965L6.74994 6.73008L3.74994 12.4753Z"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.25 12.5761L18.75 14.3309L15.3003 17.7806C15.2087 17.8722 15.095 17.9385 14.9701 17.9731C14.8453 18.0076 14.7137 18.0093 14.588 17.9779L9.15458 16.6195C9.05266 16.594 8.95724 16.5474 8.87448 16.4827L3.75 12.4756"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.75 14.3311L14.625 11.3311L13.425 12.2311C12.9058 12.6205 12.2742 12.8311 11.625 12.8311C10.9759 12.8311 10.3443 12.6205 9.82504 12.2311L9.31685 11.8499C9.23088 11.7854 9.15978 11.7032 9.10834 11.6089C9.05691 11.5146 9.02635 11.4103 9.01873 11.3031C9.01112 11.1959 9.02662 11.0883 9.06419 10.9877C9.10177 10.887 9.16053 10.7956 9.23652 10.7196L12.9054 7.05072C12.975 6.98108 13.0577 6.92584 13.1487 6.88814C13.2397 6.85045 13.3372 6.83105 13.4357 6.83105H17.25"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.80396 6.73047L11.6152 5.32783C11.7871 5.27772 11.9712 5.29075 12.1343 5.36455L15.3751 6.83095"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.5 19.9558L7.67443 19.2494C7.55977 19.2207 7.4535 19.1654 7.3643 19.0878L5.25 17.25"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Khu vực
                        </button>
                      </h2>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <form action="#">
                            <div className="check-field-wrap">
                              <div className="form-group">
                                <input type="checkbox" id={7} />
                                <label htmlFor={7}>
                                  Quận 1 <span>57</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={8} />
                                <label htmlFor={8}>
                                  Quận 2 <span>68</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={9} />
                                <label htmlFor={9}>
                                  Quận 3 <span>45</span>
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne3"
                          aria-expanded="true"
                          aria-controls="collapseOne3"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.7495 15.75H18.7495"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.2495 15.75H12.7495"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.24951 9.08008H21.7495"
                              stroke="#8C94A3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Môn học
                        </button>
                      </h2>
                      <div
                        id="collapseOne3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne3"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <form action="#">
                            <div className="check-field-wrap">
                              <div className="form-group">
                                <input type="checkbox" id={13} />
                                <label htmlFor={13}>
                                  Toán học <span>574</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={14} />
                                <label htmlFor={14}>
                                  Vật lý <span>568</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={15} />
                                <label htmlFor={15}>
                                  Hóa học <span>1345</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={16} />
                                <label htmlFor={16}>
                                  Ngữ văn <span>317</span>
                                </label>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" id={17} />
                                <label htmlFor={17}>
                                  Tiếng Anh <span>574</span>
                                </label>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
