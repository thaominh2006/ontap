# Portfolio React

Trang giới thiệu cá nhân viết bằng React (Vite), có khu vực gọi API.

## Chạy dự án

    npm install
    npm run dev

Mở địa chỉ hiển thị trong terminal (thường là http://localhost:5173).

## Đóng gói

    npm run build

Kết quả nằm trong thư mục dist.

## Cấu trúc

- src/data.js: nội dung hiển thị (dự án, kỹ năng, liên hệ)
- src/App.jsx: bố cục trang
- src/ApiCaller.jsx: giao diện gọi API
- src/useApi.js: hook gọi API bằng fetch
- src/index.css: giao diện

## Gọi API Spring Boot chạy cục bộ

Thêm @CrossOrigin vào controller (hoặc cấu hình CORS toàn cục) để trình duyệt cho phép gọi từ localhost:5173.

## Địa chỉ API mặc định

Trang gọi tới http://165.101.46.72:8080/api (khai báo trong src/data.js).
Cần mở cổng 8080 trên VPS và bật CORS cho API Spring Boot.
Nếu chạy trang bằng HTTPS thì API cũng phải là HTTPS, vì trình duyệt chặn gọi HTTP từ trang HTTPS.
