# Them cac mon hoc co ban:
INSERT INTO MonHoc (Ten) VALUES ('Toán');
INSERT INTO MonHoc (Ten) VALUES ('Vật lý');
INSERT INTO MonHoc (Ten) VALUES ('Hóa học');
INSERT INTO MonHoc (Ten) VALUES ('Sinh học');
INSERT INTO MonHoc (Ten) VALUES ('Anh văn');
INSERT INTO MonHoc (Ten) VALUES ('Ngữ văn');

# Them cac lop hoc:
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (1, 80000, '18h-20h Thứ 2, 4, 6', 'Dĩ An, Bình Dương', 12, 'Ôn thi THPTQG môn toán');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (1, 60000, '18h-20h Thứ 3, 5, 7', 'Biên Hòa, Đồng Nai', 9, 'Ôn thi đầu vào cấp 3 môn toán');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (2, 100000, '17h-20h Thứ 3, 7', 'Quận 1, Thành phố Hồ Chí Minh', 12, 'Ôn thi THPTQG môn vật lý');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (2, 120000, '16h-20h Thứ 2, 4', 'Quận 7, Thành phố Hồ Chí Minh', 10, 'Kèm học sinh mất gốc môn vật lý');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (3, 110000, '18h-20h Thứ 3, 5, CN', 'Thành phố Thủ Đức, Thành phố Hồ Chí Minh', 12, 'Ôn thi THPTQG môn hóa học');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (3, 120000, '17h-20h Thứ 3, 4', 'Trảng Bom, Đồng Nai', 10, 'Lấy gốc môn hóa học');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (4, 120000, '17h-18h30 Thứ 2, 3, 7', 'Quận 8, Thành phố Hồ Chí Minh', 12, 'Ôn thi THPTQG môn tiếng anh');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (4, 200000, '18h-19h30 Thứ 2, 3, 5', 'Biên Hòa, Đồng Nai', 11, 'Ôn tập bài trên lớp, luyện thi IELTS');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (5, 100000, '19h-20h30 Thứ 6, CN', 'Quận 2, Thành phố Hồ Chí Minh', 12, 'Ôn thi THPTQG môn ngữ văn');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (5, 80000, '19h-20h30 Thứ 5, CN', 'Quận 5, Thành phố Hồ Chí Minh', 6, 'Ôn tập phần làm văn');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (6, 100000, '17h-19h Thứ 3, 7', 'Thành phố Thủ Đức, Thành phố Hồ Chí Minh', 12, 'Ôn thi THPTQG môn sinh học cho học sinh thi khối B');
INSERT INTO LopHoc (ID_MonHoc, HocPhi, ThoiGian, DiaDiem, Lop, TieuDe)
VALUES (6, 80000, '17h-18h30 Thứ 5, CN', 'Quận 10, Thành phố Hồ Chí Minh', 11, 'Dạy sớm chương trình thi THPTQG');

# Them nguoi dung
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0123456789', 'Nguyễn Châu Long', TRUE, '2003-06-05', '0901234567', 'nclong@gmail.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0987654321', 'Phạm Phú Khang', TRUE, '2003-02-15', '0917890123', 'ppkhang@hotmail.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0564732180', 'Lê Thu Hà', FALSE, '2000-12-31', '0983456789', 'lethuha@yahoo.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0321987654', 'Đào Thị Mai', FALSE, '1996-05-20', '0976543210', 'daothimai@gmail.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0789563210', 'Phạm Bá Hùng', TRUE, '1999-09-09', '0381234567', 'phambahung@gmail.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0456123789', 'Hoàng Mai Phương', FALSE, '2003-07-14', '0868901234', 'hoangmaiphuong@gmail.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0213459876', 'Nguyễn Văn Giang', TRUE, '1995-03-28', '0945678901', 'nguyenvangiang@gmail.com');
INSERT INTO NguoiDung (CCCD, HoVaTen, GioiTinh, NgaySinh, SDT, Email)
VALUES ('0678321905', 'Trần Thị Hồng', FALSE, '1992-11-21', '0921345678', 'tranthihong@gmail.com');

# Them phu huynh
INSERT INTO PhuHuynh VALUES('0678321905');
INSERT INTO PhuHuynh VALUES('0213459876');
INSERT INTO PhuHuynh VALUES('0321987654');
INSERT INTO PhuHuynh VALUES('0789563210');

# Them gia su
INSERT INTO GiaSu VALUES('0123456789', 'Thành phố Hồ Chí Minh');
INSERT INTO GiaSu VALUES('0987654321', 'Thành phố Hồ Chí Minh');
INSERT INTO GiaSu VALUES('0564732180', 'Bình Dương');
INSERT INTO GiaSu VALUES('0456123789', 'Đồng Nai');

# Them don dang ky lam gia su
INSERT INTO DonDangKyLamGiaSu (CCCD, ThoiGianTao, TrangThaiDuyet)
VALUES ('0123456789', '2024-04-25 10:00:00', 'Chưa duyệt');
INSERT INTO DonDangKyLamGiaSu (CCCD, ThoiGianTao, TrangThaiDuyet)
VALUES ('0987654321', '2024-04-24 12:55:37', 'Đã duyệt');
INSERT INTO DonDangKyLamGiaSu (CCCD, ThoiGianTao, TrangThaiDuyet)
VALUES ('0564732180', '2024-04-25 21:00:00', 'Đã duyệt');
INSERT INTO DonDangKyLamGiaSu (CCCD, ThoiGianTao, TrangThaiDuyet)
VALUES ('0456123789', '2024-04-20 18:00:00', 'Đã duyệt');

# Them CV gia su
INSERT INTO CV (CCCD, HinhAnh, TrinhDoHocVan)
VALUES ('0123456789', 'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg', 'Dai hoc');
INSERT INTO CV (CCCD, HinhAnh, TrinhDoHocVan)
VALUES ('0987654321', 'https://th.bing.com/th/id/R.e38767b2d4005b865e1854c265e9ab7e?rik=26FggQ9EhPrG7Q&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fCute-Cat-Images-07756.jpg&ehk=BwZvi%2fA6o4aHac3M%2f%2bTD36S9IrJ6kmWhXYOsPzuV%2bzc%3d&risl=&pid=ImgRaw&r=0', 'Dai hoc');
INSERT INTO CV (CCCD, HinhAnh, TrinhDoHocVan)
VALUES ('0564732180', 'https://th.bing.com/th/id/R.5a909370329042e53d2e7ecccff50add?rik=UbXv1RfGjPNfkQ&pid=ImgRaw&r=0', 'Dai hoc');
INSERT INTO CV (CCCD, HinhAnh, TrinhDoHocVan)
VALUES ('0456123789', 'https://th.bing.com/th/id/R.57ef46a395460eefff6cb4a3de988645?rik=b8YelFbCAtrzng&riu=http%3a%2f%2fhdwallpapers2013.com%2fwp-content%2fuploads%2f2012%2f09%2fcute-girl-hd-wallpaper.jpg&ehk=0vG3I543PmOAz5x4%2fzruvqF5cmJ1kipXPwWc76XShmI%3d&risl=&pid=ImgRaw&r=0', 'Dai hoc');

# Them bang cap cho CV
INSERT INTO CV_BangCap VALUES (1, 'Toeic 800');
INSERT INTO CV_BangCap VALUES (1, 'Tốt nghiệp ĐHBK');
INSERT INTO CV_BangCap VALUES (2, 'Toeic 730');
INSERT INTO CV_BangCap VALUES (2, 'Tốt nghiệp ĐHBK');
INSERT INTO CV_BangCap VALUES (3, 'IELTS 7.0');
INSERT INTO CV_BangCap VALUES (3, 'Tốt nghiệp ĐHKHTN');
INSERT INTO CV_BangCap VALUES (4, 'IELTS 6.0');
INSERT INTO CV_BangCap VALUES (4, 'Tốt nghiệp ĐHKHXHNV');

# Them kinh nghiem cho CV
INSERT INTO CV_KinhNghiem VALUES (1, 'Đã từng dạy gia sư môn toán lớp 12');
INSERT INTO CV_KinhNghiem VALUES (1, 'Điểm thi toán THPTQG 9.4');
INSERT INTO CV_KinhNghiem VALUES (2, 'Có kinh nghiệm dạy lớp 12');
INSERT INTO CV_KinhNghiem VALUES (2, 'Điểm thi hóa học THPTQG 9.25');
INSERT INTO CV_KinhNghiem VALUES (3, 'Điểm thi vật lý THPTQG 9.25');
INSERT INTO CV_KinhNghiem VALUES (3, 'Giải ba môn ngữ văn HSG tỉnh');
INSERT INTO CV_KinhNghiem VALUES (4, 'Giải nhì môn sinh học HSG tỉnh');
INSERT INTO CV_KinhNghiem VALUES (4, 'Điểm thi môn sinh học 9.5 THPTQG');

# Them lop hoc cho gia su da duoc chap nhan
INSERT INTO GiaSu_CO_LopHoc VALUES (1, '0987654321');
INSERT INTO GiaSu_CO_LopHoc VALUES (4, '0987654321');
INSERT INTO GiaSu_CO_LopHoc VALUES (2, '0564732180');
INSERT INTO GiaSu_CO_LopHoc VALUES (6, '0564732180');

# Them tai khoan admin 
INSERT INTO TaiKhoanAdmin VALUES('adminbktutor', '123456');

# Them tai khoan nguoi dung
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('nclong', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('ppkhang', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('lethuha', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('daothimai', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('phambahung', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('hoangmaiphuong', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('nguyenvangiang', '123456');
INSERT INTO TaiKhoanNguoiDung (TenDangNhap, MatKhau) VALUES ('tranthihong', '123456');

# Phan loai tai khoan phu huynh
INSERT INTO TaiKhoanPhuHuynh VALUES ('daothimai', '0321987654');
INSERT INTO TaiKhoanPhuHuynh VALUES ('phambahung', '0789563210');
INSERT INTO TaiKhoanPhuHuynh VALUES ('nguyenvangiang', '0213459876');
INSERT INTO TaiKhoanPhuHuynh VALUES ('tranthihong', '0678321905');

# Phan loai tai khoan gia su
INSERT INTO TaiKhoanGiaSu (TenDangNhap, CCCD, TrangThaiCapPhep) VALUES ('nclong', '0123456789', 'Chưa duyệt');
INSERT INTO TaiKhoanGiaSu (TenDangNhap, CCCD, TrangThaiCapPhep) VALUES ('ppkhang', '0987654321', 'Chấp nhận');
INSERT INTO TaiKhoanGiaSu (TenDangNhap, CCCD, TrangThaiCapPhep) VALUES ('lethuha', '0564732180', 'Chấp nhận');
INSERT INTO TaiKhoanGiaSu (TenDangNhap, CCCD, TrangThaiCapPhep) VALUES ('hoangmaiphuong', '0456123789', 'Chấp nhận');