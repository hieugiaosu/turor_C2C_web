# Folder Structure:
├── controllers/             # Request handlers for functionality
├── models/                  # Data models specific to service
├── routes/                  # Route definitions for endpoints
├── services/                # Business logic for service

# Requirement

Xử lý về account tương ứng với gia sư (xác thực, đăng nhập, đăng kí)
Các tính năng gia sư cần có:

- Đăng tải cv lên hệ thống
- Đọc, tìm, nhận các job từ các bài post của phụ huynh
- Đăng kí xác nhận làm gia sư (admin duyệt thì account gia sư mới có thể nhận job)
- Gửi tin nhắn cho admin, cho phụ huynh
- Thanh toán (phí nhận lớp) và yêu cầu hoàn tiền

# Process (Những thứ cần làm rõ)

Process nhận lớp của gia sư:
- Gia sư kiếm lớp -> thấy lớp này ưng -> bấm ứng tuyển -> kiểm tra điều kiện gia sư (các ràng buộc như giới tính, tuổi, khoảng cách về địa chỉ) -> yêu cầu thanh toán -> thanh toán -> Gia sư nhận được thông tin về account phụ huynh để nhắn tin gọi điện (hệ thống cũng khóa post đó lại sinh viên khác ko được thực hiện thanh toán)