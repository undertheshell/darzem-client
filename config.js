require("dotenv").config();

// const dataBaseHost = "localhost";
// const dataBasePort = "5000";

const dataBaseAddress = process.env.SERVER_URL;

export { dataBaseAddress }