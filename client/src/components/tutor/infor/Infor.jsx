// Infor.js
import React, { useState } from "react";
import "./Infor.scss";

const Infor = () => {
    const [userInfo, setUserInfo] = useState({
      fullName: "John Doe",
      username: "johndoe123",
      email: "john.doe@example.com",
      password: "********",
      avatar: "https://via.placeholder.com/150", 
      cv: null 
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Xử lý submit form ở đây (nếu cần)
    };
  
    return (
      <div className="personal-info">
        <h1 className="title">Thông tin cá nhân</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="label">Họ và tên:</label>
              <input
                type="text"
                className="form-control"
                value={userInfo.fullName}
                onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="label">Tên đăng nhập:</label>
              <input
                type="text"
                className="form-control"
                value={userInfo.username}
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={userInfo.email}
                disabled
              />
            </div>
            <div className="form-group col-md-6">
              <label className="label">Mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                value={userInfo.password}
                onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
              <label className="label">Địa chỉ:</label>
              <input
                type="text"
                className="form-control"
                value={"123 đường Tân Lập, Dĩ An"}
                onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="label">Số điện thoại liên lạc:</label>
              <input
                type="text"
                className="form-control"
                value={"0123456789"}
                onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col-md-6">
                <label className="label">Môn học tự tin:</label>
                <textarea
                    className="form-control"
                    value={""}
                    onChange={(e) => setUserInfo({ ...userInfo, confidentSubjects: e.target.value })}
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label className="label">Thành tích học tập:</label>
                <textarea
                    className="form-control"
                    value={""}
                    onChange={(e) => setUserInfo({ ...userInfo, academicAchievements: e.target.value })}
                    required
                />
                </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="label">Ảnh đại diện:</label>
              <img className="avatar img-fluid" src={userInfo.avatar} alt="Avatar" />
            </div>
            <div className="form-group col-md-6">
              <label className="label">Tải CV:</label>
              <input
                type="file"
                className="form-control-file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setUserInfo({ ...userInfo, cv: e.target.files[0] })}
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    );
  };
  

export default Infor;
