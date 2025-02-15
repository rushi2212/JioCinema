import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./carousel.module.css";

const images = [
  "https://th.bing.com/th/id/OIP.CnDYG9GzbZOPbCT0-pbsyAAAAA?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.Q0jznKHv3hP2cPxbRZtWmAHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.UAAz5ReyNYt8ifhlB72g0AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.czytmKfsLmN8vEIB3EGCUQHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.-nBKbGH59U890ADE7-qduQHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.4TUsrVJ5B8YGZCFOcw-ivgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
];

export default function ImageSlider() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carousel}>
      <button 
        className={styles.leftButton}
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      <motion.div
        ref={carouselRef}
        className={styles.carousel}
      >
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            className={styles.imageContainer}
          >
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
          </motion.div>
        ))}
      </motion.div>

      <button 
        className={styles.rightButton}
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
