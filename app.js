const blogRouter = require("./routes/BlogRoutes");
const express = require("express");
const app = express();
 
//middleware
app.use(express.json());

app.use("/api/blogs", blogRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://animecookinshop:mpqQBKYWRDcfKrRr@cluster0.ap1uo.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
 
module.exports = app;