# Tai khoan admin / Tai khoan nguoi dung added -> Auto add to TaiKhoan
DELIMITER $$
CREATE TRIGGER before_insert_taikhoanadmin
BEFORE INSERT ON TaiKhoanAdmin
FOR EACH ROW
BEGIN
	INSERT INTO TaiKhoan(TenDangNhap)
	VALUES (NEW.TenDangNhap);
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER before_insert_taikhoannguoidung
BEFORE INSERT ON TaiKhoanAdmin
FOR EACH ROW
BEGIN
	INSERT INTO TaiKhoan(TenDangNhap)
	VALUES (NEW.TenDangNhap);
END$$
DELIMITER ;

#Something sync between TaiKhoanNguoiDung and TaiKhoanPhuHuynh/Giasu