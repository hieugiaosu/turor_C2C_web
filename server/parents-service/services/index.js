const db = require("../configs/database.js");
const PAYOS = require("@payos/node");
const createParent = async (parent) => {
  try {
    if (parent.MatKhau.length < 3) {
      return "Mật khẩu phải có ít nhất 3 kí tự";
    }
    if (!parent.TenDangNhap) {
      return "Tên đăng nhập không được để trống";
    }
    const insertUser = `INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau, NgayTao, SoTien) VALUES (?, ?, ?, ?)`;
    const insertParent = `INSERT INTO NguoiDung (CCCD, HoVaTen, NgaySinh) VALUES (?, ?, ?)`;
    const insertForeignParent = `INSERT INTO PhuHuynh (CCCD) VALUES (?)`;
    const insertAccountParent = `INSERT INTO TaiKhoanPhuHuynh (TenDangNhap, CCCD) VALUES (?, ?)`;
    const checkQuery = `SELECT * FROM TaiKhoanNguoiDung WHERE TenDangNhap = ?`;
    const [check] = await db.promise().query(checkQuery, [parent.TenDangNhap]);
    if (check.length > 0) {
      return "Tên đăng nhập đã tồn tại";
    }
    const date = new Date(Date.now());
    console.log(parent.MatKhau);
    const [result] = await db
      .promise()
      .query(insertUser, [parent.TenDangNhap, parent.MatKhau, date, 0]);
    const [result2] = await db
      .promise()
      .query(insertParent, [parent.CCCD, parent.HoVaTen, parent.NgaySinh]);
    const [result3] = await db
      .promise()
      .query(insertForeignParent, [parent.CCCD]);
    const [result4] = await db
      .promise()
      .query(insertAccountParent, [parent.TenDangNhap, parent.CCCD]);
    return result;
  } catch (error) {
    return error;
  }
};
const Authenticate = async (TenDangNhap, MatKhau) => {
  try {
    const query = `SELECT * FROM TaiKhoanNguoiDung WHERE TenDangNhap = ? AND MatKhau = ?`;
    const [result] = await db.promise().query(query, [TenDangNhap, MatKhau]);
    return result;
  } catch (error) {
    return error;
  }
};
const PaymentPostService = async () => {
  const payos = new PAYOS(
    "76f689ee-34c1-41fb-a55a-851301c9bf8a",
    "a17ba6c2-e0a9-4c61-8eb4-d089c94104d1",
    "cc6588a50aa03dc242d292791a0f2ea7199ce905cd72e2e8ecb7d40533601087"
  );
  const payment = await payos.createPaymentLink({
    amount: 10000,
    currency: "VND",
    description: "Thanh toán cho bài viết",
    orderCode: Number(String(Date.now()).slice(-6)),
    returnUrl: "http://localhost:8080/api/parent/payment",
    cancelUrl: "http://localhost:8080/api/parent/payment",
  });
  const url = payment.checkoutUrl;
  return url;
};
module.exports = { createParent, Authenticate, PaymentPostService };
