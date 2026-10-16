import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Cta from '../components/Cta'

export default function Services() {
  return (
    <>
      <Banner tag="OUR SERVICES" title={<>Building Spaces That<br /><span>Stand the Test of Time</span></>} text="Residential, commercial and renovation services delivered with quality and trust." page="Services" />
      <section><div className="wrap"><div className="head"><small>OUR SERVICES</small><h2>What We Do</h2></div>
<div className="sv">
<div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg></div><h3>Residential Construction</h3><p>We build comfortable and beautiful homes designed for your lifestyle.</p><ul><li>Independent houses &amp; villas</li><li>Apartments &amp; duplexes</li><li>Compound walls &amp; landscaping</li></ul></div>
<div className="card"><div className="ic"><svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg></div><h3>Commercial Construction</h3><p>We create functional and modern spaces for your business growth.</p><ul><li>Offices &amp; showrooms</li><li>Shops &amp; retail spaces</li><li>Warehouses &amp; industrial sheds</li></ul></div>
<div className="card"><div className="ic"><svg viewBox="0 0 24 24"><path d="M14 6l4 4M4 20l4-1L19 8l-3-3L5 16z"/></svg></div><h3>Renovation</h3><p>We bring new life to your existing spaces with expert renovation services.</p><ul><li>Interior &amp; exterior makeovers</li><li>Structural repairs</li><li>Extensions &amp; remodeling</li></ul></div>
</div></div></section>
<section className="alt"><div className="wrap"><div className="head"><small>HOW WE WORK</small><h2>Our Process</h2></div>
<div className="steps">
<div><h4>Consultation</h4><p>We understand your needs, budget and timeline.</p></div>
<div><h4>Design &amp; Quote</h4><p>Plans and a detailed, transparent estimate.</p></div>
<div><h4>Construction</h4><p>Quality work with regular site updates.</p></div>
<div><h4>Handover</h4><p>Final checks and on-time delivery of your keys.</p></div>
</div></div></section>
      <Cta />
    </>
  )
}
