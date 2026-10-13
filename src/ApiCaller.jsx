import { useState } from 'react'
import { useApi } from './useApi.js'

// Khu vực nhập địa chỉ API và hiển thị kết quả trả về
export default function ApiCaller({ defaultUrl }) {
  const [url, setUrl] = useState(defaultUrl)
  const { loading, url: calledLine, status, ok, body, call } = useApi()

  const handleSubmit = (e) => {
    e.preventDefault()
    call(url.trim())
  }

  return (
    <>
      <form className="api-form" onSubmit={handleSubmit}>
        <label htmlFor="api-url">Địa chỉ API</label>
        <input
          id="api-url"
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Đang gọi...' : 'Gọi API'}
        </button>
      </form>

      <div className="response api-output" aria-live="polite">
        <div className="response-head">
          <span>{calledLine || 'Chưa gọi'}</span>
          <span className={ok ? 'status' : 'status error'}>{status || '-'}</span>
        </div>
        <pre>{body || 'Kết quả sẽ hiển thị tại đây.'}</pre>
      </div>
    </>
  )
}
