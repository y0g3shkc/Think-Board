require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3000;
const noteRoutes = require("./routes/notesRoute");
const { connectDB } = require("./database/database");
const rateLimiter = require("../midlleware/rateLimiter");
const __dirname = path.resolve();

connectDB();
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

if (preocess.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
