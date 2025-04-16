import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./routes/book.routes.js";
import cors from "cors";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const MongodbURI = process.env.MongodbURI;
app.use(cors());
//mongodb conn
try {
  mongoose.connect(MongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to Mongodb");
} catch (error) {
  console.log("error:", error);
}

//defining routes
app.use("/book", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
