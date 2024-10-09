import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour, index) => {
          return <Tour {...tour} key={index} />
        })}
      </div>
    </section>
  )
}
export default Tours
