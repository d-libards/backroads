import { tours } from '../data'
import Title from './Title'

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map(
          ({ img, date, title, parapgraph, country, days, fee }, index) => {
            return (
              <article className="tour-card" key={index}>
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{parapgraph}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {country}
                    </p>
                    <p>{days}</p>
                    <p>{fee}</p>
                  </div>
                </div>
              </article>
            )
          }
        )}
      </div>
    </section>
  )
}
export default Tours
