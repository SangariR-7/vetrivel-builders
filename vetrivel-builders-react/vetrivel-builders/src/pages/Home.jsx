import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import Photo from '../components/Photo'
import { images } from '../images'

const services = [
  { name: 'Residential Construction', text: 'We build comfortable and beautiful homes designed for your lifestyle.',
    icon: <><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></> },
  { name: 'Commercial Construction', text: 'We create functional and modern spaces for your business growth.',
    icon: <><rect x="5" y="3" width="14" height="18" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></> },
  { name: 'Renovation', text: 'We bring new life to your existing spaces with expert renovation services.',
    icon: <path d="M14 6l4 4M4 20l4-1L19 8l-3-3L5 16z" /> },
]
const works = [
  { name: 'Completed Projects', style: '' },
  { name: 'Ongoing Projects', style: 'og' },
  { name: 'Residential Projects', style: 'v2' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <div className="tag">STRONG FOUNDATIONS &nbsp;|&nbsp; LASTING SPACES</div>
            <h1>Building Your Dream<br />With <span>Trust &amp; Quality</span></h1>
            <p>We build homes and spaces that stand the test of time. Combining modern designs with quality construction, we turn your vision into reality.</p>
            <Link to="/projects" className="btn">View Projects</Link>
            <Link to="/contact" className="btn o">Contact Us</Link>
          </div>
          <div className="art" role="img" aria-label="Vetrivel Builders project">
            {images.hero && <img src={images.hero} alt="Vetrivel Builders project" />}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head"><small>OUR SERVICES</small><h2>What We Do</h2></div>
          <div className="sv">
            {services.map(s => (
              <div className="card" key={s.name}>
                <div className="ic"><svg viewBox="0 0 24 24">{s.icon}</svg></div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="head"><small>OUR PROJECTS</small><h2>Featured Works</h2></div>
          <div className="gal">
            {works.map((w, i) => (
              <Link to="/projects" className="gi" key={w.name}>
                <div className={`gimg ${w.style}`}>{images.featured[i] && <img src={images.featured[i]} alt={w.name} />}</div>
                <span className="gcap">{w.name} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="story">
            <Photo />
            <div>
              <small>ABOUT US</small>
              <h2>Vetrivel Builders</h2>
              <p>We are a construction company focused on delivering high-quality residential and commercial spaces. With a passion for design and a commitment to excellence, we work closely with our clients to bring their ideas to life.</p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
