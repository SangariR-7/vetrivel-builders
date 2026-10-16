import { Link } from 'react-router-dom'
import { links } from './nav'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>&copy; {new Date().getFullYear()} Vetrivel Builders. All rights reserved.</span>
        <span>{links.map(([name, path]) => <Link key={path} to={path}>{name}</Link>)}</span>
      </div>
    </footer>
  )
}
