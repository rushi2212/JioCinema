import styles from './shows.module.css'
import Show from '../Show/Show'

const Shows = (props) => {
  return (
    
    <section className={styles.shows}>
        <h1>{props.title}</h1>
        <div className={styles.showsparent}>
            {
              props.movies.map((movie,id)=>{
                return <Show key={id} movie={movie}></Show>
              })
            }
        </div>
    </section>
  )
}

export default Shows