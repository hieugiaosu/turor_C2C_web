const {
    GetClassService,
    Register
} = require("../services/index.js");

const GetClass = async (req, res) => {
    const result = await GetClassService();
    if (result) {
      if (result.length === 0) {
        res.status(400).json({ message: "Không tìm thấy lớp học nào", EC: -1 });
      } else {
        res.status(200).json({ data: result, EC: 0 });
      }
    } else {
      res.status(400).json({ message: "Không thể lấy danh sách", EC: -2 });
    }
};

const getTutor = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const result = await Register(email, password);
    if (result) {
        res.status(200).json({
            success: true,
            "EC": 0
          });
    } else {
      res.status(400).json({ message: "Không tìm thấy gia sư", EC: -1 });
    }
};


const CreateTutor = async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const result = await Register(email, name, username, password);
    if (result) {
        res.status(201).json({
            success: true,
            "EC": 0
          });
    } else {
      res.status(400).json({ message: "Không thể tạo", EC: -2 });
    }
};

module.exports = { GetClass, CreateTutor, getTutor };