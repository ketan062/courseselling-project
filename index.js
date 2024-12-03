const express = require("express");
const app = express();
const { UserRouter } = require("./routes/user");
const { CourseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");


app.use("/api/v1/user",UserRouter)
app.use("/api/v1/admin",adminRouter)

app.use("/api/v1/course",CourseRouter)


app.listen(3000);