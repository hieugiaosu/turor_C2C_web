// register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Giả sử bạn có một API để đăng kí tài khoản
    try {
      const response = await fetch("http://localhost:8080/api/tutor/createTutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, username, password }),
      });

      if (!response.ok) {
        throw new Error("Đăng kí thất bại");
      }

      const data = await response.json();

      console.log(data)

      if (data.success) {
        localStorage.setItem("userEmail", email);
        navigate("/tutors"); // Chuyển hướng đến trang "Các lớp" sau khi đăng kí thành công
      } else {
        setError("Đăng kí thất bại, vui lòng thử lại");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Đăng kí tài khoản</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label className="required">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="required">Họ và tên</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="required">Tên đăng nhập</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="required">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng kí</button>
      </form>
      <p>
        Đã có tài khoản?{" "}
        <a className="back_login" style={{ cursor: "pointer" }} onClick={() => navigate("/tutors/login")}>
          Đăng nhập
        </a>
      </p>
      <button onClick={() => navigate("/tutors")}>Quay lại trang chủ</button>
    </div>
  );
};

export default Register;
