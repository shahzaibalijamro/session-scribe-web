import Article from "../models/article.model.js";
import User from "../models/user.model.js";
import { uploadToS3, deleteFromS3 } from "../utils/s3Upload.js";

// Get all published articles (public)
export const getPublishedArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const category = req.query.category;
    const search = req.query.search;
    const featured = req.query.featured;

    let query = { status: "published" };

    if (category && category !== "all") {
      query.category = category;
    }

    if (featured === "true") {
      query.featured = true;
    }

    if (search) {
      query.$text = { $search: search };
    }

    const skip = (page - 1) * limit;

    const articles = await Article.find(query)
      .populate("author", "name email avatar")
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content"); // Exclude full content for listing

    const total = await Article.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      articles,
      pagination: {
        currentPage: page,
        totalPages,
        total,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error("Error fetching published articles:", error);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
};

// Get article by slug (public)
export const getArticleBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const article = await Article.findOne({ slug, status: "published" })
      .populate("author", "name email avatar")

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Increment views
    await article.incrementViews();

    res.status(200).json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ message: "Failed to fetch article" });
  }
};

// Get all articles (admin only)
export const getAllArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;
    const category = req.query.category;

    let query = {};

    if (status && status !== "all") {
      query.status = status;
    }

    if (category && category !== "all") {
      query.category = category;
    }

    const skip = (page - 1) * limit;

    const articles = await Article.find(query)
      .populate("author", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Article.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      articles,
      pagination: {
        currentPage: page,
        totalPages,
        total,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
};

// Get article by ID (admin)
export const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const article = await Article.findById(id)
      .populate("author", "name email avatar");

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ message: "Failed to fetch article" });
  }
};

// Create article (admin only)
export const createArticle = async (req, res) => {
  console.log(req.user);
  
  try {
    const {
      title,
      content,
      excerpt,
      category,
      tags,
      status,
      featured,
      seoTitle,
      seoDescription,
      featuredImageAlt
    } = req.body;

    // Generate unique slug
    let slug = title.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");

    // Check if slug exists and make it unique
    const existingArticle = await Article.findOne({ slug });
    if (existingArticle) {
      const timestamp = Date.now();
      slug = `${slug}-${timestamp}`;
    }

    const articleData = {
      title,
      slug,
      content,
      excerpt: excerpt || content.substring(0, 200) + "...",
      category,
      tags: tags ? tags.split(",").map(tag => tag.trim()) : [],
      status: status || "draft",
      featured: featured === "true",
      author: req.user._id,
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
      featuredImageAlt: featuredImageAlt || ""
    };

    // Handle image upload
    if (req.file) {
      try {
        const imageUrl = await uploadToS3(req.file, "articles");
        articleData.featuredImage = imageUrl;
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        return res.status(400).json({ message: "Failed to upload image" });
      }
    }

    const article = new Article(articleData);
    await article.save();

    const populatedArticle = await Article.findById(article._id)
      .populate("author", "name email avatar");

    res.status(201).json({
      message: "Article created successfully",
      article: populatedArticle
    });
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ message: "Failed to create article" });
  }
};

// Update article (admin only)
export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      content,
      excerpt,
      category,
      tags,
      status,
      featured,
      seoTitle,
      seoDescription,
      featuredImageAlt
    } = req.body;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Update slug if title changed
    if (title && title !== article.title) {
      let newSlug = title.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");

      const existingArticle = await Article.findOne({ slug: newSlug, _id: { $ne: id } });
      if (existingArticle) {
        const timestamp = Date.now();
        newSlug = `${newSlug}-${timestamp}`;
      }
      article.slug = newSlug;
    }

    // Update fields
    if (title) article.title = title;
    if (content) article.content = content;
    if (excerpt) article.excerpt = excerpt;
    if (category) article.category = category;
    if (tags) article.tags = tags.split(",").map(tag => tag.trim());
    if (status) article.status = status;
    if (featured !== undefined) article.featured = featured === "true";
    if (seoTitle) article.seoTitle = seoTitle;
    if (seoDescription) article.seoDescription = seoDescription;
    if (featuredImageAlt !== undefined) article.featuredImageAlt = featuredImageAlt;

    // Handle image upload
    if (req.file) {
      try {
        // Delete old image if exists
        if (article.featuredImage) {
          await deleteFromS3(article.featuredImage);
        }
        
        const imageUrl = await uploadToS3(req.file, "articles");
        article.featuredImage = imageUrl;
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        return res.status(400).json({ message: "Failed to upload image" });
      }
    }

    await article.save();

    const populatedArticle = await Article.findById(article._id)
      .populate("author", "name email avatar");

    res.status(200).json({
      message: "Article updated successfully",
      article: populatedArticle
    });
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).json({ message: "Failed to update article" });
  }
};

// Delete article (admin only)
export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Delete featured image if exists
    if (article.featuredImage) {
      try {
        await deleteFromS3(article.featuredImage);
      } catch (deleteError) {
        console.error("Failed to delete image:", deleteError);
      }
    }

    await Article.findByIdAndDelete(id);

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ message: "Failed to delete article" });
  }
};

// Like/Unlike article
export const incrementArticleLike = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    await article.incrementLikes();

    res.status(200).json({
      message: "Article liked",
      likesCount: article.likesCount,
      success: true
    });
  } catch (error) {
    console.error("Error incrementing article like:", error);
    res.status(500).json({ message: "Failed to like article" });
  }
};

// Get article statistics (admin)
export const getArticleStats = async (req, res) => {
  try {
    const totalArticles = await Article.countDocuments();
    const publishedArticles = await Article.countDocuments({ status: "published" });
    const draftArticles = await Article.countDocuments({ status: "draft" });
    const featuredArticles = await Article.countDocuments({ featured: true });

    const totalViews = await Article.aggregate([
      { $group: { _id: null, totalViews: { $sum: "$views" } } }
    ]);

    const totalLikes = await Article.aggregate([
      { $group: { _id: null, totalLikes: { $sum: "$likesCount" } } }
    ]);

    const categoryStats = await Article.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.status(200).json({
      totalArticles,
      publishedArticles,
      draftArticles,
      featuredArticles,
      totalViews: totalViews[0]?.totalViews || 0,
      totalLikes: totalLikes[0]?.totalLikes || 0,
      categoryStats
    });
  } catch (error) {
    console.error("Error fetching article stats:", error);
    res.status(500).json({ message: "Failed to fetch article statistics" });
  }
};
