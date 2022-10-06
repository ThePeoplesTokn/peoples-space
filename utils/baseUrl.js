const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://thepeoplesspace.herokuapp.com";

module.exports = baseUrl;
