import { Link } from 'react-router-dom'

export default function Banner({ tag, title, text, page }) {
  return (
    <div className="banner">
      <div className="wrap">
        <div className="tag">{tag}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="crumb"><Link to="/">Home</Link> &nbsp;/&nbsp; {page}</div>
      </div>
    </div>
  )
}
