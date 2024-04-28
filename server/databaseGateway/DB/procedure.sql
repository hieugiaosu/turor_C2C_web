# Add new parent
DELIMITER //
CREATE PROCEDURE add_new_parent(
  IN username VARCHAR(50),
  IN password VARCHAR(255),
  IN id CHAR(10),
  IN name VARCHAR(20),
  IN gender BOOLEAN,
  IN birthday DATE,
  IN phone VARCHAR(10),
  IN email CHAR(30)
)
BEGIN
  INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
  VALUES (id, name, gender, birthday, phone, email);

  INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES (username, password);

  INSERT INTO TaiKhoanPhuHuynh (TenDangNhap, CCCD) VALUES (username, id);

  INSERT INTO PhuHuynh (CCCD) VALUES (id);
END //
DELIMITER ;


# Add new tutor
DELIMITER //
CREATE PROCEDURE add_new_tutor(
  IN username VARCHAR(50),
  IN password VARCHAR(255),
  IN id CHAR(10),
  IN name VARCHAR(20),
  IN gender BOOLEAN,
  IN birthday DATE,
  IN phone VARCHAR(10),
  IN email CHAR(30),
  IN workplace VARCHAR(255)
)
BEGIN
  INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
  VALUES (id, name, gender, birthday, phone, email);

  INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES (username, password);

  INSERT INTO TaiKhoanGiaSu (TenDangNhap, CCCD, TrangThaiCapPhep) VALUES (username, id, 'Chưa duyệt');

  INSERT INTO GiaSu (CCCD, NoiLamViec) VALUES (id, workplace);
END //
DELIMITER ;


# Add class by parent
DELIMITER //
CREATE PROCEDURE add_class_by_parent(
  IN parentID VARCHAR(10),
  IN idMonHoc INT,
  IN price INT,
  IN time VARCHAR(255),
  IN place VARCHAR(255),
  IN grade INT,
  IN title VARCHAR(255)
)
BEGIN
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (idMonHoc, price, time, place, grade, title);

INSERT INTO PhuHuynh_CO_LopHoc (ID_Lophoc, CCCD) VALUES (LAST_INSERT_ID(), parentID);

END //
DELIMITER ;


# 