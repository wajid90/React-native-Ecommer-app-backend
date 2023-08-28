import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(`mongodb+srv://root:Ts6iIpsxnrrLwh3D@cluster0.fqtpa.mongodb.net/`, {
      dbName: "UdemyCourse",
    });

    console.log(`Server connected to database ${connection.host}`);
  } catch (error) {
    console.log("Some Error Occurred", error);
    process.exit(1);
  }
};
