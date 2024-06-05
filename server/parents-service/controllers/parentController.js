const {
  createParent,
  Authenticate,
  PaymentPostService,
  GetTutorService,
} = require("../services/index.js");
const jwt = require("jsonwebtoken");
const Login = async (req, res) => {
  const { TenDangNhap, MatKhau } = req.body;
  const result = await Authenticate(TenDangNhap, MatKhau);
  if (result.length === 0) {
    res
      .status(400)
      .json({ message: "Tên đăng nhập hoặc mật khẩu không đúng", EC: -1 });
  } else {
    const token = jwt.sign(
      { username: result[0].TenDangNhap, id: result },
      "secretkey123",
      { expiresIn: "10h" }
    );
    res.status(200).json({ token, message: "Đăng nhập thành công!", EC: 0 });
  }
};
const SignUp = async (req, res) => {
  const parent = req.body;
  const result = await createParent(parent);
  if (result === "Tên đăng nhập đã tồn tại") {
    res.status(400).json({ message: "Tên đăng nhập đã tồn tại", EC: -1 });
  } else if (result === "Mật khẩu phải có ít nhất 3 kí tự") {
    res
      .status(400)
      .json({ message: "Mật khẩu phải có ít nhất 3 kí tự", EC: -2 });
  } else if (result === "Tên đăng nhập không được để trống") {
    res
      .status(400)
      .json({ message: "Tên đăng nhập không được để trống", EC: -3 });
  } else {
    res
      .status(200)
      .json({ data: result, message: "Tạo người dùng thành công!", EC: 0 });
  }
};
const PaymentForPost = async (req, res) => {
  const money = req.body.money;
  const result = await PaymentPostService(money);
  if (result) {
    res.status(200).json({ data: result, EC: 0 });
  } else {
    res.status(400).json({ message: "Thanh toán thất bại", EC: -1 });
  }
};
const GetTutor = async (req, res) => {
  const result = await GetTutorService();
  if (result) {
    if (result.length === 0) {
      res.status(400).json({ message: "Không tìm thấy gia sư nào", EC: -1 });
    } else {
      res.status(200).json({ data: result, EC: 0 });
    }
  } else {
    res.status(400).json({ message: "Không thể lấy danh sách", EC: -2 });
  }
};
module.exports = { Login, SignUp, PaymentForPost, GetTutor };
