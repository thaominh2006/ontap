// Dữ liệu nội dung của trang: sửa tại đây để đổi thông tin hiển thị

export const profile = {
  github: 'thaominh2006',
  email: 'email@example.com',
}

// Địa chỉ máy chủ VPS: đổi cổng hoặc đường dẫn tại đây cho khớp API của bạn
export const API_BASE_URL = 'http://165.101.46.72:8080'
export const API_DEFAULT_PATH = '/api'

export const projects = [
  {
    title: 'Hệ thống quản lý sinh viên',
    description: 'Xác thực, phân quyền theo vai trò và quản lý thông tin sinh viên.',
    tech: 'Spring Boot, MySQL',
  },
  {
    title: 'MediCare',
    description: 'Năm dịch vụ độc lập cho bệnh viện: bệnh nhân, bác sĩ, lịch hẹn, hồ sơ bệnh án, nhà thuốc.',
    tech: 'Microservices, Gradle',
  },
  {
    title: 'StoreX Order-Service',
    description: 'Chuyển dịch vụ đơn hàng từ Spring MVC sang WebFlux và gửi sự kiện qua Kafka.',
    tech: 'WebFlux, Kafka',
  },
  {
    title: 'AI Logistics Incident Reporter',
    description: 'Cấu hình nhiều profile để chuyển đổi giữa mô hình chạy cục bộ và mô hình đám mây.',
    tech: 'Ollama, OpenRouter',
  },
]

export const skills = [
  { group: 'Ngôn ngữ và framework', items: 'Java, Spring Boot, Spring Data JPA, Spring WebFlux' },
  { group: 'Dữ liệu và hệ thống', items: 'MySQL, Kafka, Gradle, Maven' },
  {
    group: 'Cách làm việc',
    items: 'Phân tầng Controller - Service - Repository - DTO, kiểm tra dữ liệu đầu vào, viết tài liệu bằng tiếng Việt',
  },
]

// Các dòng của khung phản hồi API ở phần mở đầu
export const heroJson = [
  ['truong', '"PTIT"'],
  ['huongHocTap', '"Java Spring Boot"'],
  ['kienTruc', '["Controller", "Service", "Repository", "DTO"]'],
  ['coSoDuLieu', '"MySQL"'],
]
