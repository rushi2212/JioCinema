const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Serve the `dist` folder statically
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// Serve `index.html` on `/`
app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Path to the JSON file
const moviesFilePath = path.join(__dirname, "movies_data.json");

// Utility function to read the JSON file
function readMoviesData() {
  try {
    const data = fs.readFileSync(moviesFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading the JSON file:", err);
    return [];
  }
}

// Route to get all movies
app.get("/movies", (req, res) => {
  const movies = readMoviesData();
  res.send(movies);
});

// Route to get a specific movie by ID
app.get("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movies = readMoviesData();
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send({ error: "Movie not found" });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
