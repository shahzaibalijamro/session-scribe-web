import React, { useState, useEffect } from "react";
import {
  Save,
  ArrowLeft,
  Image,
  Eye,
  EyeOff,
  Upload,
  X,
  Star,
  Hash,
  FileText,
  Globe,
  Search
} from "lucide-react";
import { motion } from "framer-motion";

const ArticleForm = ({ 
  article = null, 
  onSave, 
  onCancel, 
  loading = false,
  mode = "create" // "create" or "edit"
}) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "Tutorial",
    tags: "",
    status: "draft",
    featured: false,
    seoTitle: "",
    seoDescription: "",
    featuredImageAlt: ""
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    "Tutorial",
    "News", 
    "Tips",
    "Updates",
    "Guide",
    "Feature"
  ];

  const statusOptions = [
    { value: "draft", label: "Draft", color: "yellow" },
    { value: "published", label: "Published", color: "green" },
    { value: "archived", label: "Archived", color: "gray" }
  ];

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || "",
        content: article.content || "",
        excerpt: article.excerpt || "",
        category: article.category || "Tutorial",
        tags: article.tags ? article.tags.join(", ") : "",
        status: article.status || "draft",
        featured: article.featured || false,
        seoTitle: article.seoTitle || "",
        seoDescription: article.seoDescription || "",
        featuredImageAlt: article.featuredImageAlt || ""
      });
      
      if (article.featuredImage) {
        setImagePreview(article.featuredImage);
      }
    }
  }, [article]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: "Image size must be less than 5MB" }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setErrors(prev => ({ ...prev, image: "Only image files are allowed" }));
        return;
      }

      setSelectedImage(file);
      setErrors(prev => ({ ...prev, image: "" }));

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    const input = document.getElementById("featured-image");
    if (input) input.value = "";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length > 200) {
      newErrors.title = "Title cannot exceed 200 characters";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (formData.excerpt && formData.excerpt.length > 300) {
      newErrors.excerpt = "Excerpt cannot exceed 300 characters";
    }

    if (formData.seoTitle && formData.seoTitle.length > 60) {
      newErrors.seoTitle = "SEO title cannot exceed 60 characters";
    }

    if (formData.seoDescription && formData.seoDescription.length > 160) {
      newErrors.seoDescription = "SEO description cannot exceed 160 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const submitData = new FormData();
    
    // Add form fields
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });

    // Add image if selected
    if (selectedImage) {
      submitData.append("featuredImage", selectedImage);
    }

    onSave(submitData);
  };

  const generatePreviewContent = () => {
    return `
      <div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: system-ui, -apple-system, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: #1f2937;">${formData.title}</h1>
        ${formData.excerpt ? `<p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 2rem;">${formData.excerpt}</p>` : ''}
        <div style="border-bottom: 1px solid #e5e7eb; margin-bottom: 2rem; padding-bottom: 1rem;">
          <span style="background: #ddd6fe; color: #7c3aed; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600;">${formData.category}</span>
        </div>
        ${imagePreview ? `<img src="${imagePreview}" alt="${formData.featuredImageAlt}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 2rem;" />` : ''}
        <div style="line-height: 1.7; color: #374151;">${formData.content.replace(/\n/g, '<br>')}</div>
      </div>
    `;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={onCancel}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {mode === "edit" ? "Edit Article" : "Create New Article"}
              </h1>
              <p className="text-gray-600">
                {mode === "edit" ? "Update your existing article" : "Share your knowledge with the community"}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showPreview ? "Hide Preview" : "Preview"}</span>
            </button>
            
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? "Saving..." : mode === "edit" ? "Update Article" : "Create Article"}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
              </div>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter article title..."
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.title ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.title.length}/200 characters
                  </p>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your article content here..."
                    rows="15"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                      errors.content ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.content && (
                    <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                  )}
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief summary of the article..."
                    rows="3"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                      errors.excerpt ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.excerpt && (
                    <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.excerpt.length}/300 characters
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Image className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">Featured Image</h2>
              </div>

              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload a featured image</p>
                  <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 5MB</p>
                  <label className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                    Choose File
                    <input
                      id="featured-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

              {errors.image && (
                <p className="mt-2 text-sm text-red-600">{errors.image}</p>
              )}

              {imagePreview && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    name="featuredImageAlt"
                    value={formData.featuredImageAlt}
                    onChange={handleInputChange}
                    placeholder="Describe the image for accessibility..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              )}
            </motion.div>

            {/* SEO Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Search className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">SEO Settings</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleInputChange}
                    placeholder="SEO optimized title..."
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.seoTitle ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.seoTitle && (
                    <p className="mt-1 text-sm text-red-600">{errors.seoTitle}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.seoTitle.length}/60 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Description
                  </label>
                  <textarea
                    name="seoDescription"
                    value={formData.seoDescription}
                    onChange={handleInputChange}
                    placeholder="SEO meta description..."
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                      errors.seoDescription ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.seoDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.seoDescription}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.seoDescription.length}/160 characters
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publishing Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">Publishing</h2>
              </div>

              <div className="space-y-4">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                      errors.category ? "border-red-300" : "border-gray-200"
                    }`}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                  )}
                </div>

                {/* Featured */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="featured" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Star className="w-4 h-4" />
                    <span>Featured Article</span>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Hash className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">Tags</h2>
              </div>

              <div>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags separated by commas..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Separate multiple tags with commas
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Preview Modal */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-transparent backdrop-blur-[3px] flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Article Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: generatePreviewContent() }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ArticleForm;