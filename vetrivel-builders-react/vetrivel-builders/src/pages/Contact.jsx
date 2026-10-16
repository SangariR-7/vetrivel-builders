import Banner from '../components/Banner'
import ContactSection from '../components/ContactSection'

export default function Contact() {
  return (
    <>
      <Banner tag="CONTACT" title={<>Let's Build Your<br /><span>Dream Together</span></>}
        text="Send us your enquiry and our team will get back to you shortly." page="Contact" />
      <ContactSection />
    </>
  )
}
