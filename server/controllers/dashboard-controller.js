import db from "../src/db.js";

export const saveNote = async (req, res) => {
  const { user_id, problem_id, note } = req.body;

  try {
    const existedNote = await db("notes")
      .where({
        user_id,
        problem_id,
      })
      .first();
    console.log("existedNote: ", existedNote);
    console.log("user_id: ", user_id);
    console.log("problem_id: ", problem_id);
    console.log("note: ", note);
    let newNote;
    if (existedNote) {
      newNote = await db("notes")
        .where({
          user_id,
          problem_id,
        })
        .update({
          note,
        })
        .returning("*");
    } else {
      newNote = await db("notes")
        .insert({
          user_id,
          problem_id,
          note,
        })
        .returning("*");
    }

    console.log("note updated: ", newNote[0].note);
    return res.status(201).json({ message: "notes updated", data: newNote[0] });
  } catch (error) {
    console.error("Error during notes updating:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getNote = async (req, res) => {
  const { user_id, problem_id } = req.body;

  try {
    const note = await db("notes")
      .where({
        user_id,
        problem_id,
      })
      .returning("*");

    return res.status(200).json({
      message: "note fetched",
      data: note && note[0] ? note[0].note : "",
    });
  } catch (error) {
    console.error("Error fetching note:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { user_id, problem_id } = req.body;

  try {
    await db("notes")
      .where({
        user_id,
        problem_id,
      })
      .del();

    return res.status(200).json({
      message: "note deleted",
      data: "",
    });
  } catch (error) {
    console.error("Error deleting note:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
