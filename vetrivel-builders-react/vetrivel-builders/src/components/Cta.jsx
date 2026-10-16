import { Link } from 'react-router-dom'

export default function Cta() {
  return (
    <div className="cta">
 <div className="wrap">
  <div><h2>Have a project in mind?</h2><p>Talk to us for more information or a free quote.</p></div>
  <div><Link to="/contact" className="btn">Contact Us</Link><Link to="/projects" className="btn o">View Projects</Link></div>
 </div>
</div>
  )
}
