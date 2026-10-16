import { images } from '../images'

export default function Photo() {
  return (
    <div className="photo" role="img" aria-label="Vetrivel Builders project">
      {images.about ? <img src={images.about} alt="Vetrivel Builders project" /> : <span>Replace with your project photo</span>}
    </div>
  )
}
