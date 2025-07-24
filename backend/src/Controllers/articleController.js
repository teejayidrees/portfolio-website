import Article from "../Models/article.js";
import fs from "fs";
import cloudinary from "../config/cloudinary.js";

export async function getAllArticle(_, res) {
  try {
    const article = await Article.find().sort({ createdAt: -1 });
    res.status(200).json(article);
  } catch (error) {
    console.error("Error in getAllArticle Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function deleteArticle(req, res) {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle)
      return res.status(404).json({ message: "Article Not Found" });
    res.json({ message: "Article Deleted Successfully" });
  } catch (error) {
    console.error(`Error in deleteArticle Controller, ${error}`);
    res.status(500).json({ message: "internal server Error" });
  }
}

export const createArticle = async (req, res) => {
  try {

    const imageFile = req?.files?.image?.[0];

    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload image to Cloudinary
    let uploadResult;
    try {
      uploadResult = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
        folder: "articles/images",
      });
    } catch (uploadErr) {
      console.error("Cloudinary Upload Error:", uploadErr);
      return res
        .status(500)
        .json({ message: "Failed to upload image to Cloudinary" });
    }

    // Delete local temp file (safe async)
    fs.unlink(imageFile.path, (err) => {
      if (err) console.error("Failed to delete temp file:", err);
    });

    const newArticle = new Article({
      title: req.body.title,
      imageUrl: uploadResult.secure_url,
      cloudinary_id: uploadResult.public_id,
      createdAt: new Date(),
      category: req.body.category,
      readTime: req.body.readTime,
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
      author: req.body.author,
      excerpt: req.body.excerpt ? JSON.parse(req.body.excerpt) : {},
    });

    await newArticle.save();

    res.status(201).json({
      message: "Article Created Successfully",
      article: newArticle,
    });
  } catch (error) {
    console.error("Error in createArticle Controller", error);
    res.status(500).json({
      message: "Error in creating Article",
      error: error.message,
    });
  }
};

