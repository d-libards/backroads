import { servicesText } from '../data'
import Service from './Service'
import Title from './Title'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesText.map((service, index) => (
          <Service {...service} key={index} />
        ))}
      </div>
    </section>
  )
}
export default Services
