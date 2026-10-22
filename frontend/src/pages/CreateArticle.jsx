import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ArticleForm from "../components/ArticleForm";

const CreateArticle = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = async (formData) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.post("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/articles/admin", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      toast.success("Article created successfully!");
      navigate("/articles-admin");
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error(error.response?.data?.message || "Failed to create article");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/articles-admin");
  };

  return (
    <ArticleForm
      mode="create"
      onSave={handleSave}
      onCancel={handleCancel}
      loading={loading}
    />
  );
};

export default CreateArticle;