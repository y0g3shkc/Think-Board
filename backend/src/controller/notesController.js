//get notes
exports.getNotes = (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
  });
};

//create notes
exports.createNotes = (req, res) => {
  res.status(200).json({
    message: "Notes created successfully",
  });
};

//update notes
exports.updateNote = (req, res) => {
  res.status(200).json({
    message: "Notes updated successfully",
  });
};

//delete notes
exports.deleteNote = (req, res) => {
  res.status(200).json({
    message: "Notes deleted successfully",
  });
};
