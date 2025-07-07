const Note = require("../../model/noteModel");

//get notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//get single notes

exports.getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const notes = await Note.findById(id);
    res.status(200).json({
      message: "Note fetched successfully",
      data: notes,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//create notes
exports.createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const notes = await Note.create({
      title,
      content,
    });
    res.status(200).json({
      message: "Notes created successfully",
      data: notes,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//update notes
exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const notes = await Note.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Notes updated successfully",
      data: notes,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//delete notes
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);

    res.status(200).json({
      message: "Notes deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
