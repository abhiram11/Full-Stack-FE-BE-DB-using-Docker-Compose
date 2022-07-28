import APP from "express"; //export default, can be named anything.

const app = new APP();
const connectDB = () => {};
const PORT = process.env.PORT || 3001;

//before starting server, we create database connection, other queues initiated,etc.
const startServer = () => {
  //   Promise.all([DB_Conn code, queue conn, cron jobs, etc.]);
  Promise.all([connectDB()]).then(() => {
    app.listen(PORT);
    console.log("Server started on port: ", PORT);
  });
};

startServer(app);
