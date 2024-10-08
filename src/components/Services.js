import { servicesText } from '../data'
import Title from './Title'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesText.map(({ icon, title, paragraph }, index) => {
          return (
            <article className="service" key={index}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{paragraph}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
