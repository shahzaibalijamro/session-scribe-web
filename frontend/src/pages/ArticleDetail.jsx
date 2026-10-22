import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Heart,
  MessageSquare,
  Clock,
  Share2,
  Bookmark,
  Tag,
  Send
} from "lucide-react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../components/context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"))
  const { user } = useApp();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLiking, setIsLiking] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      // Remove authorization header for public article viewing
      const response = await axios.get(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles/slug/${slug}`);
      console.log(response);

      setArticle(response.data);
      setLikeCount(response.data.likesCount || 0);

      // Fetch related articles
      if (response.data.category) {
        fetchRelatedArticles(response.data.category, response.data._id);
      }
    } catch (err) {
      console.error("Error fetching article:", err);
      setError(err.response?.data?.message || "Failed to fetch article");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedArticles = async (category, excludeId) => {
    try {
      // Remove authorization header for public related articles
      const response = await axios.get(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles?category=${category}&limit=3`);
      const filtered = response.data.articles.filter(art => art._id !== excludeId);
      setRelatedArticles(filtered.slice(0, 3));
    } catch (err) {
      console.error("Error fetching related articles:", err);
    }
  };

  const handleLike = async () => {
    if (isLiking) return;

    if (isLiked) {
      toast.error("Already liked this article");
      return;
    }
    try {
      setIsLiking(true);
      // No authentication required - anyone can like
      const response = await axios.post(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles/${article._id}/like`
      );

      setLikeCount(response.data.likesCount);
      toast.success(response.data.message);
      setIsLiked(true);
    } catch (err) {
      console.error("Error liking article:", err);
      toast.error("Failed to like article");
    } finally {
      setIsLiking(false);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please sign in to comment");
      return;
    }

    if (!newComment.trim()) {
      toast.error("Please enter a comment");
      return;
    }

    try {
      setSubmittingComment(true);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles/${article._id}/comments`,
        { content: newComment },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // Add the new comment to the article
      setArticle(prev => ({
        ...prev,
        comments: [...prev.comments, response.data.comment]
      }));

      setNewComment("");
      toast.success("Comment added successfully");
    } catch (err) {
      console.error("Error adding comment:", err);
      toast.error("Failed to add comment");
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Article link copied to clipboard!");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Tutorial: "bg-blue-100 text-blue-800",
      News: "bg-green-100 text-green-800",
      Tips: "bg-purple-100 text-purple-800",
      Updates: "bg-orange-100 text-orange-800",
      Guide: "bg-indigo-100 text-indigo-800",
      Feature: "bg-pink-100 text-pink-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto p-6 lg:p-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
            <div className="p-8 space-y-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              <div className="space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate("/articles")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-4 sm:px-20">
        {true && <header className="bg-white sticky top-0 z-50">
          <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3" role="navigation" aria-label="Main navigation">
            <div className="flex justify-between items-center">
              {/* Logo - Optimized with proper sizing and alt text */}
              <div onClick={() => navigate("/")} className="flex-shrink-0 cursor-pointer">
                <a>
                  <img
                    src="/assets/Logo.png"
                    alt="Session Scribe - AI Meeting Companion Logo"
                    className="h-14 w-auto object-contain"
                    width={128}
                    height={40}
                  />
                </a>
              </div>
              {/* Navigation Links - Better semantics & hover effects */}
              <div className="hidden md:flex items-center space-x-8" role="menubar">
                <a
                  onClick={() => navigate("/#")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  aria-current="page"
                  role="menuitem"
                >
                  Home
                </a>
                <a
                  onClick={() => navigate("/#about")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  About
                </a>
                <a
                  onClick={() => navigate("/#Features")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Features
                </a>
                <a
                  onClick={() => navigate("/#plans")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Pricing
                </a>
                <a
                  onClick={() => navigate("/#contact")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Contact
                </a>
                <a
                  onClick={() => navigate("/articles")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Articles
                </a>
              </div>
              {/* Right-side CTA - Enhanced button styling */}
              <div className="flex items-center space-x-6">
                {!token && (
                  <a
                    href="/signin"
                    className="text-gray-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    Login
                  </a>
                )}
                <button
                  onClick={() => navigate("/home")}
                  className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-3 py-2 rounded-2xl font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg text-sm"
                  type="button"
                >
                  Start For Free
                </button>
              </div>
            </div>
          </nav>
        </header>}
      </div>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto p-6 lg:p-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Articles</span>
          </motion.button>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8"
          >
            {/* Featured Image */}
            {article.featuredImage && (
              <div className="relative h-64 lg:h-80">
                <img
                  src={article.featuredImage}
                  alt={article.featuredImageAlt || article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}

            <div className="p-8">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h1>

                {article.excerpt && (
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}

                {/* Author and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={article.author?.avatar || '/default-avatar.png'}
                      alt={article.author?.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{article.author?.name}</div>
                      <div className="text-sm text-gray-500">{article.author?.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Eye className="w-5 h-5" />
                      <span>{article.views}</span>
                    </div>

                    <button
                      onClick={handleLike}
                      disabled={isLiking}
                      className={`flex items-center space-x-1 transition-colors hover:text-red-500 ${isLiking ? "opacity-50 cursor-not-allowed" : "text-gray-500"
                        }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      <span>{likeCount}</span>
                    </button>

                    <button
                      onClick={handleShare}
                      className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex items-center space-x-2 mb-8 pt-8 border-t border-gray-100">
                  <Tag className="w-5 h-5 text-gray-400" />
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <div
                    key={relatedArticle._id}
                    onClick={() => navigate(`/articles/${relatedArticle.slug}`)}
                    className="cursor-pointer group"
                  >
                    <div className="relative mb-4">
                      {relatedArticle.featuredImage ? (
                        <img
                          src={relatedArticle.featuredImage}
                          alt={relatedArticle.featuredImageAlt || relatedArticle.title}
                          className="w-full h-32 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                        />
                      ) : (
                        <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <span className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(relatedArticle.category)}`}>
                        {relatedArticle.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{relatedArticle.readTime} min</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{relatedArticle.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{relatedArticle.likesCount || 0}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
    </>
  );
};

export default ArticleDetail;