// const baseURL = `https://temp.lessonpal.com`;
// const baseURL = `https://lessonpal.com`;
const baseURL = `http://localhost:5000`;
// const baseURL = `http://192.168.1.4:3000`;
// export const graphqlApiURL = `${baseURL}/graphql`;

export const endpoints = {
  googleLogin: `${baseURL}/login`,
  getUser: `${baseURL}/get-user`,
  uploadProblem: `${baseURL}/problem`,
  getProblems: `${baseURL}/get-problems`,
  markCompleted: `${baseURL}/mark-completed`,
};
