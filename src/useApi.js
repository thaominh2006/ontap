import { useCallback, useState } from 'react'

// Hook gọi API: quản lý trạng thái đang tải, mã trạng thái, dữ liệu và lỗi
export function useApi() {
  const [state, setState] = useState({
    loading: false,
    url: '',
    status: null, // ví dụ "200 OK"
    ok: true,
    body: '',
  })

  const call = useCallback(async (url, options = {}) => {
    const method = options.method || 'GET'
    setState({ loading: true, url: `${method} ${url}`, status: '...', ok: true, body: '' })

    try {
      const res = await fetch(url, {
        method,
        headers: { Accept: 'application/json', ...(options.headers || {}) },
        body: options.body,
      })
      const text = await res.text()

      let body = text
      try {
        body = JSON.stringify(JSON.parse(text), null, 2)
      } catch {
        // Không phải JSON: giữ nguyên nội dung
      }

      setState({
        loading: false,
        url: `${method} ${url}`,
        status: `${res.status} ${res.statusText || (res.ok ? 'OK' : 'Lỗi')}`,
        ok: res.ok,
        body: body || '(Phản hồi rỗng)',
      })
    } catch (err) {
      setState({
        loading: false,
        url: `${method} ${url}`,
        status: 'Lỗi',
        ok: false,
        body:
          'Không gọi được API. Hãy kiểm tra địa chỉ, kết nối mạng, ' +
          'hoặc cấu hình CORS trên máy chủ (với API Spring Boot cục bộ, thêm @CrossOrigin).\n\n' +
          'Chi tiết: ' + err.message,
      })
    }
  }, [])

  return { ...state, call }
}
