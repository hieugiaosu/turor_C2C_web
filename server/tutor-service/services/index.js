const db = require("../../parents-service/configs/database.js");

const GetClassService = async () => {
    const selectAllTutor = `SELECT * FROM lophoc`;
    const [result] = await db.promise().query(selectAllTutor);
    return result;
  };

const Authenticate = async (email, password) => {
  try {
    const query = `SELECT * FROM tutor WHERE email = ? AND password = ?`;
    const [result] = await db.promise().query(query, [email, password]);
    return result;
  } catch (error) {
    return error;
  }
};

const Register = async (email, name, username, password) => {
  console.log(email, name, username, password)
  try {
    const INSERT_USER_QUERY = `INSERT INTO tutor (email, name, username, password) VALUES ('${email}', '${name}', '${username}', '${password}')`;

    db.query(INSERT_USER_QUERY, (err, result) => {
      if (err) {
        console.error("Đăng kí thất bại:", err);
        // Xử lý lỗi nếu cần
      } else {
        console.log("Người dùng mới đã được thêm vào bảng Tutor");
        // Xử lý thành công nếu cần
      }
    });
    return "OK";
  } catch (error) {
    console.error("Đăng kí thất bại:", error);
    // Xử lý lỗi nếu cần
  }
};

module.exports = {
  GetClassService,
  Authenticate,
  Register
};