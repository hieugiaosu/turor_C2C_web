DROP DATABASE IF EXISTS BKTUTOR;
CREATE DATABASE BKTUTOR;
USE BKTUTOR;
CREATE TABLE NguoiDung(
	CCCD CHAR(10) PRIMARY KEY,
    HoVaTen VARCHAR(50) NOT NULL,
    GioiTinh BOOLEAN,
    NgaySinh DATE NOT NULL,
    SDT VARCHAR(10),
    Email CHAR(50)
);

CREATE TABLE PhuHuynh(
	CCCD VARCHAR(10) PRIMARY KEY
);

CREATE TABLE GiaSu(
	CCCD CHAR(10) PRIMARY KEY,
    NoiLamViec VARCHAR(255)
);

CREATE TABLE DonTuyenGiaSu(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    CCCD CHAR(10) NOT NULL,
    GioiTinh BOOLEAN,
    ID_MonHoc INT,
    DiaChi VARCHAR(255),
    TieuDe VARCHAR(255),
    SoLuong INT,
    HocPhi INT,
    Lop INT,
    ThoiGian VARCHAR(255),
    TinhTrangDuyet VARCHAR(20)
);

CREATE TABLE DonDangKyLamGiaSu(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    CCCD CHAR(10) NOT NULL,
    ThoiGianTao DATETIME NOT NULL,
    TrangThaiDuyet VARCHAR(10) NOT NULL
);

CREATE TABLE CV(
	CV_ID INT AUTO_INCREMENT PRIMARY KEY,
    CCCD CHAR(10) NOT NULL,
    HinhAnh VARCHAR(255),
    TrinhDoHocVan VARCHAR(50)
);

CREATE TABLE CV_BangCap(
	CV_ID INT AUTO_INCREMENT NOT NULL,
    BangCap VARCHAR(50) NOT NULL,
    CONSTRAINT PK_CV_BangCap PRIMARY KEY (CV_ID, BANGCAP)
);

CREATE TABLE CV_KinhNghiem(
	CV_ID INT AUTO_INCREMENT NOT NULL,
    KinhNghiem VARCHAR(255) NOT NULL,
    CONSTRAINT PK_CV_KinhNghiem PRIMARY KEY (CV_ID, KinhNghiem)
);

CREATE TABLE LopHoc(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_MonHoc INT NOT NULL,
    Lop INT NOT NULL,
    TieuDe VARCHAR(255),
    HocPhi DECIMAL(10,2),
    ThoiGian VARCHAR(255),
    DiaDiem VARCHAR(255)
);

CREATE TABLE MonHoc(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    Ten VARCHAR(50) NOT NULL,
    HinhAnh VARCHAR(255)
);

CREATE TABLE TaiKhoan(
	TenDangNhap VARCHAR(50) PRIMARY KEY
);

CREATE TABLE TaiKhoanAdmin(
	TenDangNhap VARCHAR(50) PRIMARY KEY,
    MatKhau VARCHAR(255) NOT NULL
);

CREATE TABLE TaiKhoanNguoiDung(
	TenDangNhap VARCHAR(50) PRIMARY KEY,
    MatKhau VARCHAR(255) NOT NULL,
    NgayTao DATETIME,
    SoTien DECIMAL(10,2)
);

CREATE TABLE TaiKhoanPhuHuynh(
	TenDangNhap VARCHAR(50) PRIMARY KEY,
    CCCD CHAR(10) NOT NULL
);

CREATE TABLE TaiKhoanGiaSu(
	TenDangNhap VARCHAR(50) PRIMARY KEY,
    CCCD CHAR(10) NOT NULL,
    TrangThaiCapPhep VARCHAR(10) NOT NULL,
    DiemDanhGia FLOAT
);

CREATE TABLE DanhGia(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    TenDangNhap VARCHAR(50) NOT NULL,
    NguoiDanhGia VARCHAR(50),
    NoiDung VARCHAR(255)
);

CREATE TABLE TinNhan(
	ID INT AUTO_INCREMENT PRIMARY KEY,
	ThoiGian DATETIME,
    NoiDung VARCHAR(255),
    NguoiGui VARCHAR(50),
    NguoiNhan VARCHAR(50)
);

CREATE TABLE GiaSu_CO_LopHoc(
	ID_Lophoc INT AUTO_INCREMENT PRIMARY KEY,
    CCCD CHAR(10) NOT NULL
);

CREATE TABLE PhuHuynh_CO_LopHoc(
	ID_Lophoc INT AUTO_INCREMENT PRIMARY KEY,
    CCCD CHAR(10) NOT NULL
);