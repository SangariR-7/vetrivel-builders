import { Link, NavLink } from 'react-router-dom'
import { links } from './nav'

export default function Header() {
  return (
    <header>
      <div className="wrap bar">
        <Link to="/" className="logo" aria-label="Vetrivel Builders home">
          <img src="/logo.png" alt="Vetrivel Builders" />
        </Link>
        <nav>
          {links.map(([name, path]) => (
            <NavLink key={path} to={path} end className={({ isActive }) => (isActive ? 'on' : '')}>
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
