import styles from './featured.module.css'
import FeaturedShow from '../Featured-show/FeaturedShow'

const Featured = (props) => {
  return (
    <section className={styles.featured}>
        <h1 className={styles.sectionHeading}>Hot Right Now 🔥</h1>
        <div className={styles.shows}>
            {
              props.movies.map((movie,id)=>{
                return <FeaturedShow key={id} movie={movie}></FeaturedShow>
              })
            }
        </div>
    </section>
  )
}

export default Featured