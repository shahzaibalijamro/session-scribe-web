import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"]
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    content: {
      type: String,
      required: [true, "Content is required"]
    },
    excerpt: {
      type: String,
      maxlength: [300, "Excerpt cannot exceed 300 characters"],
      trim: true
    },
    featuredImage: {
      type: String,
      default: null
    },
    featuredImageAlt: {
      type: String,
      default: ""
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft"
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Tutorial", "News", "Tips", "Updates", "Guide", "Feature"]
    },
    tags: [{
      type: String,
      trim: true
    }],
    readTime: {
      type: Number,
      default: 1
    },
    views: {
      type: Number,
      default: 0
    },
    likesCount: {
      type: Number,
      default: 0
    },
    publishedAt: {
      type: Date,
      default: null
    },
    seoTitle: {
      type: String,
      maxlength: [60, "SEO title cannot exceed 60 characters"]
    },
    seoDescription: {
      type: String,
      maxlength: [160, "SEO description cannot exceed 160 characters"]
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Indexes for performance
articleSchema.index({ slug: 1 });
articleSchema.index({ status: 1, publishedAt: -1 });
articleSchema.index({ category: 1, status: 1 });
articleSchema.index({ featured: 1, status: 1 });
articleSchema.index({ title: "text", content: "text" });

// Virtual for like count
articleSchema.virtual("likeCount").get(function() {
  return this.likes ? this.likes.length : 0;
});

// Pre-save middleware to generate slug and calculate read time
articleSchema.pre("save", function(next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  
  if (this.isModified("content")) {
    // Calculate read time (average 200 words per minute)
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.max(1, Math.ceil(wordCount / 200));
  }
  
  if (this.isModified("status") && this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  next();
});

// Static method to find published articles
articleSchema.statics.findPublished = function() {
  return this.find({ status: "published" }).sort({ publishedAt: -1 });
};

// Instance method to increment views
articleSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Instance method to increment likes
articleSchema.methods.incrementLikes = function() {
  this.likesCount = (this.likesCount || 0) + 1;
  return this.save();
};

const Article = mongoose.model("Article", articleSchema);
export default Article;
