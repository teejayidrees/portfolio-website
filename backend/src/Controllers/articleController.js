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
// export async function createArticle(req, res) {
//   try {
//     // Get temp paths from Multer-uploaded files
//     const imagePath = req.files.image[0].path;

//     // Upload image to Cloudinary
//     const imageUpload = await cloudinary.uploader.upload(imagePath, {
//       resource_type: "image", // Image resource type
//       folder: "articles/images", // Optional folder
//     });

//     //Remove temp files after uploading
//     fs.unlinkSync(imagePath);

//     const newArticle = new Article({
//       title: req.body.title,
//       description: req.body.description,
//       imageUrl: imageUpload.secure_url,
//       createdAt: req.body.createdAt,
//       category: req.body.category,
//       readTime: req.body.readTime,
//       tags: req.body.tags,
//       author: req.body.author,
//       excerpt: req.body.excerpt,
//     });
//     await newArticle.save();
//     res.status(201).json({
//       message: "Article Created Successfully",
//       article: newArticle,
//     });
//     console.log("Article Successfully created");
//   } catch (error) {
//     console.error(`Error in createArticle Controller ${error}`);
//     res.status(500).json({ message: "Error in creating Article" });
//   }
// }

export async function createArticle(req, res) {
  try {
    const imagePath = req.files.image[0].path;
    if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imagePath, {
      resource_type: "image",
      folder: "articles/images",
    });

    // Delete local file after upload
    fs.unlinkSync(imagePath);

    const newArticle = new Article({
      title: req.body.title,
      description: req.body.description,
      imageUrl: imageUpload.secure_url,
      createdAt: req.body.createdAt,
      category: req.body.category,
      readTime: req.body.readTime,
      tags: JSON.parse(req.body.tags), // ✅ Ensure it's an array
      author: req.body.author,
      excerpt: JSON.parse(req.body.excerpt), // ✅ Ensure it's an object
    });

    await newArticle.save();
    res.status(201).json({
      message: "Article Created Successfully",
      article: newArticle,
    });
    console.log("Article Successfully created");
  } catch (error) {
    console.error(`Error in createArticle Controller ${error}`);
    res
      .status(500)
      .json({ message: "Error in creating Article", error: error.message });
  }
}
