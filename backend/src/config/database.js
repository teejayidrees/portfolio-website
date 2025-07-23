//database file
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    //async and await because it'll take time before the program fetches the database
    await mongoose.connect(process.env.MONGO_URI);
    // console.log("MONGODB CONNECTED SUCCESFULLY!");
    console.log("MONGODB CONNECTED SUCCESFULLY!");
  } catch (error) {
    console.error(`Error connecting to MONGODB Error:${error}`);
    process.exit(1); //1 means exit with failure 0 is sucess
  }
};
