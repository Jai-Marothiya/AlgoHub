import db from "../src/db.js";

export const uploadProblem = async (req, res) => {
  const {
    problem_desc,
    problem_url,
    problem_tags,
    platform,
    problem_level,
    uploaded_by,
  } = req.body;

  try {
    // User does not exist, insert new user
    const newProblem = await db("problems")
      .insert({
        problem_desc,
        problem_url,
        problem_tags,
        platform,
        problem_level,
        uploaded_by,
      })
      .returning("*");

    return res
      .status(201)
      .json({ message: "Problem uploaded", newProblem: newProblem[0] });
  } catch (error) {
    console.error("Error during problem uploading:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const updateProblem = async (req, res) => {
  const {
    id,
    problem_desc,
    problem_url,
    problem_tags,
    platform,
    problem_level,
    uploaded_by,
  } = req.body;

  try {
    // User does not exist, insert new user
    const updatedProblem = await db("problems")
      .where({ id })
      .update({
        problem_desc,
        problem_url,
        problem_tags,
        platform,
        problem_level,
        uploaded_by,
      })
      .returning("*");

    return res
      .status(201)
      .json({ message: "Problem uploaded", updatedProblem: updatedProblem[0] });
  } catch (error) {
    console.error("Error during problem uploading:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getProblems = async (req, res) => {
  try {
    // Fetch all problems from the database
    const problems = await db.select("*").from("problems");

    // Send the problems data as a response
    return res.status(200).json(problems);
  } catch (error) {
    console.error("Error fetching problems:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const markCompleted = async (req, res) => {
  const { user_id, problem_id } = req.body;

  try {
    // Fetch the user's problems_completed array
    let user = await db("users").where({ id: user_id }).first();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let problemsCompleted = user.problems_completed || [];

    // Check if the problem_id is already in the problems_completed array
    const problemIndex = problemsCompleted.indexOf(problem_id);

    if (problemIndex === -1) {
      // If problem_id is not in the array, add it
      problemsCompleted.push(problem_id);
    } else {
      // If problem_id is in the array, remove it
      problemsCompleted = problemsCompleted.filter((id) => id !== problem_id);
    }

    // Update the user's problems_completed array in the database
    await db("users")
      .where({ id: user_id })
      .update({ problems_completed: problemsCompleted });
    user = await db("users").where({ id: user_id }).first();

    return res.status(200).json({
      message: "Problem status updated successfully",
      problems_completed: problemsCompleted,
      user: user,
    });
  } catch (error) {
    console.error("Error updating problem status:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
