import { useState } from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import { images } from '../images'

const projects = [
  { name: 'Modern Family Villa', loc: 'Chennai', tags: ['completed', 'res'], year: '2025', area: '4,200 sq ft', img: '' },
  { name: 'Skyline Office Block', loc: 'Coimbatore', tags: ['ongoing'], year: '2026', area: '18,000 sq ft', img: 'og' },
  { name: 'Green Park Residence', loc: 'Madurai', tags: ['completed', 'res'], year: '2024', area: '3,100 sq ft', img: 'v2' },
  { name: 'Lakeview Duplex', loc: 'Trichy', tags: ['ongoing', 'res'], year: '2026', area: '2,800 sq ft', img: 'v3' },
  { name: 'Metro Retail Showroom', loc: 'Salem', tags: ['completed'], year: '2025', area: '6,500 sq ft', img: 'og' },
  { name: 'Heritage Home Renovation', loc: 'Pondicherry', tags: ['completed', 'res'], year: '2024', area: '2,400 sq ft', img: 'v2' },
]
const filters = [['all', 'All'], ['completed', 'Completed'], ['ongoing', 'Ongoing'], ['res', 'Residential']]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = projects.filter(p => filter === 'all' || p.tags.includes(filter))

  return (
    <>
      <Banner tag="OUR PROJECTS" title={<>Our Work Speaks<br /><span>for Itself</span></>}
        text="Browse our completed and ongoing residential and commercial projects." page="Projects" />
      <section>
        <div className="wrap">
          <div className="head"><small>OUR PROJECTS</small><h2>Featured Works</h2></div>
          <div className="tabs">
            {filters.map(([key, label]) => (
              <button key={key} className={filter === key ? 'on' : ''} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
          <div className="pj">
            {shown.map(p => (
              <article className="pc" key={p.name}>
                <div className={`pimg ${p.img}`}>
                  {images.projects[projects.indexOf(p)] && <img src={images.projects[projects.indexOf(p)]} alt={p.name} />}
                  <span className="badge">{p.tags.includes('ongoing') ? 'Ongoing' : 'Completed'}</span>
                </div>
                <div className="pb">
                  <h3>{p.name}</h3>
                  <p>{p.loc}</p>
                  <dl>
                    <div><dt>Year</dt><dd>{p.year}</dd></div>
                    <div><dt>Area</dt><dd>{p.area}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
