const express = require("express");
const app = express();
const { UserRouter } = require("./routes/user");
const { CourseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose")

app.use("/api/v1/user",UserRouter)
app.use("/api/v1/admin",adminRouter)

app.use("/api/v1/course",CourseRouter)
async function main() {
    await mongoose.connect("mongodb+srv://Cluster26961:Ketan9811%40%40@cluster0.6u71e.mongodb.net/coursera-app");
    app.listen(3000);

    console.log("mongoose is connected");
}
main();