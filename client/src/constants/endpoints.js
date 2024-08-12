// const baseURL = `https://temp.lessonpal.com`;
const baseURL = `https://algohub.onrender.com`;
// const baseURL = `http://localhost:5000`;
// const baseURL = `http://192.168.1.4:3000`;
// export const graphqlApiURL = `${baseURL}/graphql`;

export const endpoints = {
  googleLogin: `${baseURL}/google-login`,
  getUser: `${baseURL}/get-user`,
  uploadProblem: `${baseURL}/upload-problem`,
  updateProblem: `${baseURL}/update-problem`,
  getProblems: `${baseURL}/get-problems`,
  markCompleted: `${baseURL}/mark-completed`,
  getUserProblems: `${baseURL}/get-user-problems`,
  saveNote: `${baseURL}/save-note`,
  deleteNote: `${baseURL}/delete-note`,
  markStared: `${baseURL}/mark-stared`,
  // getNote: `${baseURL}/get-note`,
};
