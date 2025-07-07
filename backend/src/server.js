const express = require("express");
const app = express();
const noteRoutes = require("./routes/notesRoute");

app.use("/api/notes", noteRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
