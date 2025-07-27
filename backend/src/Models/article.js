// models/article.js
import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    imageUrl: String,
    category: String,
          cloudinary_id: String,
    readTime: Number,
    tags: Array,
    author: String,
    excerpt: {
      preamble: String,
      passage: String,
    },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);
export default Article;
