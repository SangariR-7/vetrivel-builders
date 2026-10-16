import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import { images } from '../images'

// img: optional photo path, e.g. '/photos/villa1.jpg'
const items = [
  { name: 'Modern Villa Front View', type: 'ext', style: '', img: '' },
  { name: 'Living Room Interior', type: 'int', style: 'in', img: '' },
  { name: 'Office Block Construction', type: 'ongoing', style: 'og', img: '' },
  { name: 'Duplex Exterior', type: 'ext', style: 'v2', img: '' },
  { name: 'Modular Kitchen', type: 'int', style: 'in', img: '' },
  { name: 'Residential Site Progress', type: 'ongoing', style: 'og', img: '' },
  { name: 'Compound & Landscaping', type: 'ext', style: '', img: '' },
  { name: 'Master Bedroom', type: 'int', style: 'in', img: '' },
  { name: 'Retail Showroom Frame', type: 'ongoing', style: 'v2', img: '' },
]
const filters = [['all', 'All'], ['ext', 'Exterior'], ['int', 'Interior'], ['ongoing', 'Ongoing']]

const Pic = ({ item }) => (
  <div className={`gimg ${item.style}`}>{images.gallery[items.indexOf(item)] && <img src={images.gallery[items.indexOf(item)]} alt={item.name} />}</div>
)

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const shown = items.filter(i => filter === 'all' || i.type === filter)

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Banner tag="GALLERY" title={<>A Look at Our<br /><span>Finished Spaces</span></>}
        text="Photos from our completed and ongoing sites, inside and out." page="Gallery" />
      <section>
        <div className="wrap">
          <div className="head"><small>OUR GALLERY</small><h2>Project Photos</h2></div>
          <div className="tabs">
            {filters.map(([key, label]) => (
              <button key={key} className={filter === key ? 'on' : ''} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
          <div className="gal">
            {shown.map(item => (
              <button className="gi" key={item.name} onClick={() => setOpen(item)} aria-label={`View ${item.name}`}>
                <Pic item={item} />
                <span className="gcap">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {open && (
        <div className="lb open" role="dialog" aria-modal="true" onClick={e => e.target === e.currentTarget && setOpen(null)}>
          <button onClick={() => setOpen(null)}>Close</button>
          <div><Pic item={open} /><p>{open.name}</p></div>
        </div>
      )}
      <Cta />
    </>
  )
}
