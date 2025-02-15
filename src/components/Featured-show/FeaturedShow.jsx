import styles from './featuredShow.module.css'

const FeaturedShow = (props) => {
  return (
    <div className={styles.showFeatured}>
                <img src={props.movie.imageUrl} alt="" />
                <div className={styles.movieTitle}>
                  {props.movie.name}
                </div>
            </div>
  )
}

export default FeaturedShow