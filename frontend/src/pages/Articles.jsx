import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  User,
  Eye,
  Heart,
  MessageSquare,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"))
  const categories = [
    { value: "all", label: "All Articles" },
    { value: "Tutorial", label: "Tutorials" },
    { value: "News", label: "News" },
    { value: "Tips", label: "Tips & Tricks" },
    { value: "Updates", label: "Updates" },
    { value: "Guide", label: "Guides" },
    { value: "Feature", label: "Features" }
  ];

  const fetchArticles = async (search = "", category = "all", page = 1) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "9"
      });

      if (search) params.append("search", search);
      if (category !== "all") params.append("category", category);

      const response = await axios.get(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles?${params}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` // Assuming you store the token in localStorage
        }
      });
      setArticles(response.data.articles);
      setPagination(response.data.pagination);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  const fetchFeaturedArticles = async () => {
    try {
      const response = await axios.get("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles?featured=true&limit=3", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` // Assuming you store the token in localStorage
        }
      });
      setFeaturedArticles(response.data.articles);
    } catch (err) {
      console.error("Error fetching featured articles:", err);
    }
  };

  useEffect(() => {
    fetchArticles(searchTerm, selectedCategory, currentPage);
  }, [searchTerm, selectedCategory, currentPage]);

  useEffect(() => {
    fetchFeaturedArticles();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchArticles(searchTerm, selectedCategory, 1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
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

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Articles</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
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
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Knowledge Base</h1>
                <p className="text-gray-600">Discover tutorials, tips, and insights</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Articles */}
          {featuredArticles?.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 text-yellow-500" />
                <h2 className="text-xl font-bold text-gray-900">Featured Articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredArticles.map((article, index) => (
                  <div
                    key={article._id}
                    onClick={() => navigate(`/articles/${article.slug}`)}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    <div className="relative">
                      {article.featuredImage ? (
                        <img
                          src={article.featuredImage}
                          alt={article.featuredImageAlt || article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-purple-400" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 bg-yellow-500 text-white p-1 rounded-full">
                        <Star className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <img
                            src={article.author?.avatar || '/default-avatar.png'}
                            alt={article.author?.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{article.author?.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Search and Filter */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                {/* Search */}
                <form onSubmit={handleSearch} className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                </form>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Articles Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-6 space-y-3">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : articles?.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || selectedCategory !== "all"
                    ? "Try adjusting your search or filter criteria"
                    : "No articles have been published yet"}
                </p>
                {(searchTerm || selectedCategory !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setCurrentPage(1);
                    }}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles?.map((article, index) => (
                  <motion.div
                    key={article._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => navigate(`/articles/${article.slug}`)}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    <div className="relative">
                      {article.featuredImage ? (
                        <img
                          src={article.featuredImage}
                          alt={article.featuredImageAlt || article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src={article.author?.avatar || '/default-avatar.png'}
                            alt={article.author?.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{article.author?.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime} min</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{article.likesCount}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Pagination */}
          {pagination?.totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center"
            >
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={!pagination.hasPrev}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {[...Array(pagination.totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isCurrentPage = page === currentPage;

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${isCurrentPage
                          ? "bg-purple-600 text-white"
                          : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={!pagination.hasNext}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
};

export default Articles;