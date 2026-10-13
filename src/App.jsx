import ApiCaller from './ApiCaller.jsx'
import { API_BASE_URL, API_DEFAULT_PATH, heroJson, profile, projects, skills } from './data.js'

export default function App() {
  const githubUrl = `https://github.com/${profile.github}`

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <a className="brand" href="#">{profile.github}</a>
          <nav className="nav" aria-label="Điều hướng chính">
            <a href="#du-an">Dự án</a>
            <a href="#ky-nang">Kỹ năng</a>
            <a href="#goi-api">Gọi API</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Phần mở đầu */}
        <div className="hero">
          <div className="wrap">
            <div>
              <h1>Xây dựng dịch vụ backend gọn gàng, dễ kiểm thử.</h1>
              <p className="lead">
                Sinh viên Học viện Công nghệ Bưu chính Viễn thông (PTIT), đang học và thực hành
                Java Spring Boot: thiết kế API, phân tầng mã nguồn và kết nối cơ sở dữ liệu.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#du-an">Xem dự án</a>
                <a className="btn btn-ghost" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="response" role="img" aria-label="Ví dụ phản hồi API mô tả hồ sơ lập trình viên">
              <div className="response-head">
                <span>GET /api/profile</span>
                <span className="status">200 OK</span>
              </div>
              <pre>
                {'{\n'}
                {heroJson.map(([key, value], i) => (
                  <span key={key}>
                    {'  '}
                    <span className="k">"{key}"</span>: <span className="s">{value}</span>
                    {i < heroJson.length - 1 ? ',' : ''}
                    {'\n'}
                  </span>
                ))}
                {'}'}
              </pre>
            </div>
          </div>
        </div>

        {/* Dự án */}
        <section id="du-an" aria-labelledby="tieu-de-du-an">
          <div className="wrap">
            <h2 id="tieu-de-du-an">Dự án</h2>
            <p className="section-note">
              Các bài tập và dự án thực hành trong quá trình học. Sửa nội dung trong file src/data.js.
            </p>
            <ul className="projects">
              {projects.map((p) => (
                <li className="project" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="tech">{p.tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Kỹ năng */}
        <section id="ky-nang" aria-labelledby="tieu-de-ky-nang">
          <div className="wrap">
            <h2 id="tieu-de-ky-nang">Kỹ năng</h2>
            <p className="section-note">Những công nghệ tôi dùng thường xuyên trong các bài thực hành.</p>
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Gọi API */}
        <section id="goi-api" aria-labelledby="tieu-de-goi-api">
          <div className="wrap">
            <h2 id="tieu-de-goi-api">Gọi API</h2>
            <p className="section-note">
              Nhập địa chỉ API (phương thức GET) rồi bấm gọi. Mặc định trỏ tới máy chủ VPS của bạn,
              có thể đổi sang địa chỉ khác ngay trong ô nhập.
            </p>
            <ApiCaller defaultUrl={`${API_BASE_URL}${API_DEFAULT_PATH}`} />
          </div>
        </section>

        {/* Liên hệ */}
        <section id="lien-he" className="contact" aria-labelledby="tieu-de-lien-he">
          <div className="wrap">
            <h2 id="tieu-de-lien-he">Liên hệ</h2>
            <p className="section-note">
              Nếu bạn muốn trao đổi về dự án hoặc cơ hội thực tập, hãy liên hệ qua các kênh sau.
            </p>
            <ul className="contact-list">
              <li>
                <span>GitHub</span>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">github.com/{profile.github}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">Học viện Công nghệ Bưu chính Viễn thông (PTIT)</div>
      </footer>
    </>
  )
}
