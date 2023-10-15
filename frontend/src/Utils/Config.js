// NODE_ENV:
// "development" after running "npm run start"
// "production" after running "npm run build"
const isLocalDevelopment = process.env.NODE_ENV === "development";

// Passing "http://localhost:8000" when running local development
// Passing "" (to use relative path) when running production code
const config = {
  apiUrl: isLocalDevelopment ? "http://localhost:8000/api" : "api",
};

export { isLocalDevelopment, config };
