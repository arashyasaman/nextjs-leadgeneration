import Layout from 'components/layout'

import Main from 'section/main'
import Services from 'section/services'
import About from 'section/about'
import Testimonial from 'section/testimonial'
import Contact from 'section/contact'

export default function Home() {
  return (
    <Layout>
      <Main/>
      <Services/>
      <About/>
      <Testimonial/>
      <Contact/>
    </Layout>
  )
}
