import mongoose from "mongoose";
// Define a new schema for the "Post" collection.
// A schema describes the structure of documents stored in MongoDB.
const PostSchema = new mongoose.Schema(
  { title: { type: String, required: true }, content: { type: String, default: "" } },
    // Enable automatic "createdAt" and "updatedAt" timestamp fields
  { timestamps: true }
);
// Export a Mongoose model named "Post" based on the schema above.
// This model represents the "posts" collection in MongoDB.
export default mongoose.model("Post", PostSchema);
