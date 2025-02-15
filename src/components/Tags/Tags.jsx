import styles from "./tags.module.css";
import { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([
    "Action",
    "Drama",
    "SciFi",
    "Thriller",
    "Comedy",
    "Horror",
    "Fantasy",
    "Romance",
    "Adventure",
    "Mystery",
    "Crime",
    "Animation",
    "Documentary",
    "Family",
    "History",
  ]);
  return (
    <div className={styles.tags}>
      {tags.map((tag, id) => {
        return (
          <p key={id} className={styles.tag}>
            {tag}
          </p>
        );
      })}
    </div>
  );
};

export default Tags;
