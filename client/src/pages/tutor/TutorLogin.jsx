// login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Giả sử bạn có một API để xác thực đăng nhập
    try {
      const response = await fetch("http://localhost:8080/api/tutor/getTutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Đăng nhập thất bại");
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("userEmail", email);
        navigate("/tutors"); // Chuyển hướng đến trang "Các lớp" sau khi đăng nhập thành công
      } else {
        setError("Sai email hoặc mật khẩu");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoHome = () => {
    navigate("/tutors"); // Chuyển hướng đến trang chủ
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>
            <span className="required"></span> Email 
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <span className="required"></span> Mật khẩu 
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <p>
        Chưa có tài khoản?{" "}
        <a
          className="back_register"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/tutors/register")}
        >
          Đăng ký
        </a>
      </p>
      <button onClick={handleGoHome} className="home-button">
        Trở về trang chủ
      </button>
    </div>
  );
};

export default Login;
