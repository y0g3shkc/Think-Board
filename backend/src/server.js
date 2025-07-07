require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const noteRoutes = require("./routes/notesRoute");
const { connectDB } = require("./database/database");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
