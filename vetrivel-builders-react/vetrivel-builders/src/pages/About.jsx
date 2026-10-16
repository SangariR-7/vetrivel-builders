import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Photo from '../components/Photo'

export default function About() {
  return (
    <>
      <Banner tag="ABOUT US" title={<>Strong Foundations,<br /><span>Lasting Spaces</span></>} text="Learn who we are, what we believe in, and how we turn your vision into a home or workplace built to last." page="About Us" />
      <section>
 <div className="wrap">
  <div className="story">
   <Photo />
   <div>
    <small>WHO WE ARE</small>
    <h2>Vetrivel Builders</h2>
    <p>We are a construction company focused on delivering high-quality residential and commercial spaces. With a passion for design and a commitment to excellence, we work closely with our clients to bring their ideas to life.</p>
    <p>From the first sketch to the final handover, our team handles planning, construction and finishing with clear communication, honest pricing and on-time delivery.</p>
    <Link to="/contact" className="btn">Get a Quote</Link>
   </div>
  </div>
  <div className="stats">
   <div><b>10+</b><span>Years of experience</span></div>
   <div><b>150+</b><span>Projects completed</span></div>
   <div><b>120+</b><span>Happy clients</span></div>
   <div><b>25+</b><span>Skilled team members</span></div>
  </div>
 </div>
</section>

<section className="alt">
 <div className="wrap">
  <div className="head"><small>WHAT DRIVES US</small><h2>Our Mission, Vision &amp; Values</h2></div>
  <div className="cards">
   <div className="card"><div className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg></div><h3>Our Mission</h3><p>To build comfortable, durable and beautifully designed spaces that give our clients lasting value.</p></div>
   <div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg></div><h3>Our Vision</h3><p>To be the most trusted name in construction by combining modern design with quality workmanship.</p></div>
   <div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/></svg></div><h3>Our Values</h3><p>Integrity, quality, transparency and commitment to every promise we make to our clients.</p></div>
  </div>
 </div>
</section>

<section>
 <div className="wrap">
  <div className="head"><small>WHY CHOOSE US</small><h2>Built on Trust &amp; Quality</h2></div>
  <div className="why">
   <div><i><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></i><span><h4>Quality materials</h4><p>We use tested, reliable materials so your structure stays strong for decades.</p></span></div>
   <div><i><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></i><span><h4>Experienced team</h4><p>Engineers, architects and site supervisors who have delivered projects of every size.</p></span></div>
   <div><i><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></i><span><h4>On-time delivery</h4><p>Clear schedules and regular updates, so you always know where your project stands.</p></span></div>
   <div><i><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></i><span><h4>Transparent pricing</h4><p>Detailed quotes with no hidden costs, and a free estimate before you commit.</p></span></div>
  </div>
 </div>
</section>
      <Cta />
    </>
  )
}
