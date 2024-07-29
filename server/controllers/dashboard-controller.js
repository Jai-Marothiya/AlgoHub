import db from "../src/db.js";

export const saveNote = async (req, res) => {
  const { user_id, problem_id, note } = req.body;

  try {
    const existedNote = await db("user_problems")
      .where({
        user_id,
        problem_id,
      })
      .first();
    let newNote;
    if (existedNote) {
      newNote = await db("user_problems")
        .where({
          user_id,
          problem_id,
        })
        .update({
          note,
        })
        .returning("*");
    } else {
      newNote = await db("user_problems")
        .insert({
          user_id,
          problem_id,
          note,
        })
        .returning("*");
    }

    return res.status(201).json({ message: "notes updated", data: newNote[0] });
  } catch (error) {
    console.error("Error during notes updating:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getUserProblems = async (req, res) => {
  const { user_id } = req.body;

  try {
    const userProblems = await db("user_problems")
      .where({
        user_id,
      })
      .returning("*");

    return res.status(200).json({
      message: "user problems fetched",
      userProblems,
    });
  } catch (error) {
    console.error("Error clearing note:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { user_id, problem_id } = req.body;

  try {
    const userProblem = await db("user_problems")
      .where({
        user_id,
        problem_id,
      })
      .update({
        note: "",
      })
      .returning("*");

    return res.status(200).json({
      message: "Note cleared",
      userProblem: userProblem[0],
    });
  } catch (error) {
    console.error("Error clearing note:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
