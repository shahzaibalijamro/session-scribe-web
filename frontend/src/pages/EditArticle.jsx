import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ArticleForm from "../components/ArticleForm";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setArticle(response.data);
    } catch (error) {
      console.error("Error fetching article:", error);
      toast.error("Failed to fetch article");
      navigate("/articles-admin");
    } finally {
      setFetchLoading(false);
    }
  };

  const handleSave = async (formData) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.put(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles/admin/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      toast.success("Article updated successfully!");
      navigate("/articles-admin");
    } catch (error) {
      console.error("Error updating article:", error);
      toast.error(error.response?.data?.message || "Failed to update article");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/articles-admin");
  };

  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <ArticleForm
      article={article}
      mode="edit"
      onSave={handleSave}
      onCancel={handleCancel}
      loading={loading}
    />
  );
};

export default EditArticle;