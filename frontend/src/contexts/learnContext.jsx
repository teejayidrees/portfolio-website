import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context to share state across components
const LearnContext = createContext();
const LearnProvider = ({ children }) => {
  const [learnCard, setLearnCard] = useState([]);
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  //data of the articles
  // Fetch articles from backend API
  const fetchArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/articles");
      setLearnCard(res.data);
    } catch (err) {
      console.error(`Failed to fetch articles ${err}`);
    }
  };

  // useEffect(() => {
  //   fetchArticles();
  // });

  const articles = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: {
        preamble:
          "Learn the fundamentals of React Hooks and how they can simplify your component logic.",

        passage:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis repudiandae laudantium. Quasi voluptatum minus amet sapiente sed impedit expedita quae libero, dolores dicta hic placeat aliquam commodi ab facere, animi qui neque perferendis delectus maxime velit? Vero, ex ad?",
      },
      category: "React",
      author: "Alex Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: {
        preamble:
          "Learn the fundamentals of React Hooks and how they can simplify your component logic.",

        passage:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis repudiandae laudantium. Quasi voluptatum minus amet sapiente sed impedit expedita quae libero, dolores dicta hic placeat aliquam commodi ab facere, animi qui neque perferendis delectus maxime velit? Vero, ex ad?",
      },
      category: "CSS",
      author: "Alex Johnson",
      date: "2024-01-10",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["CSS", "Layout", "Design"],
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features You Should Know",
      excerpt: {
        preamble:
          "Learn the fundamentals of React Hooks and how they can simplify your component logic.",

        passage:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis repudiandae laudantium. Quasi voluptatum minus amet sapiente sed impedit expedita quae libero, dolores dicta hic placeat aliquam commodi ab facere, animi qui neque perferendis delectus maxime velit? Vero, ex ad?",
      },
      category: "JavaScript",
      author: "Alex Johnson",
      date: "2024-01-05",
      readTime: "12 min read",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["JavaScript", "ES6", "Programming"],
    },
    {
      id: 4,
      title: "Building Responsive Websites with Bootstrap 5",
      excerpt: {
        preamble:
          "Learn the fundamentals of React Hooks and how they can simplify your component logic.",

        passage:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis repudiandae laudantium. Quasi voluptatum minus amet sapiente sed impedit expedita quae libero, dolores dicta hic placeat aliquam commodi ab facere, animi qui neque perferendis delectus maxime velit? Vero, ex ad?",
      },
      category: "Bootstrap",
      author: "Alex Johnson",
      date: "2024-01-01",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Bootstrap", "Responsive", "CSS"],
    },
    {
      id: 5,
      title: "Introduction to Node.js and Express",
      excerpt: {
        preamble:
          "Learn the fundamentals of React Hooks and how they can simplify your component logic.",

        passage:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis repudiandae laudantium. Quasi voluptatum minus amet sapiente sed impedit expedita quae libero, dolores dicta hic placeat aliquam commodi ab facere, animi qui neque perferendis delectus maxime velit? Vero, ex ad?",
      },
      category: "Backend",
      author: "Alex Johnson",
      date: "2023-12-28",
      readTime: "15 min read",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Node.js", "Express", "Backend"],
    },
    {
      id: 6,
      title: "Git and GitHub Best Practices",
      excerpt: {
        preamble:
          "Learn the fundamentals of React Hooks and how they can simplify your component logic.",

        passage:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis repudiandae laudantium. Quasi voluptatum minus amet sapiente sed impedit expedita quae libero, dolores dicta hic placeat aliquam commodi ab facere, animi qui neque perferendis delectus maxime velit? Vero, ex ad?",
      },
      category: "Tools",
      author: "Alex Johnson",
      date: "2023-12-25",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Git", "GitHub", "Version Control"],
    },
  ];
  //fetch the articles and set it to the state "learnCard"
  // const fetchLearn = () => {
  //   setLearnCard(articles);
  // };

  useEffect(() => {
    fetchArticles();
  }, []);
  // Extract unique categories for filter dropdown
  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category)),
  ];

  /**
   * Handle search input change
   * @param {Event} e - Input change event
   */
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   * Handle category filter change
   * @param {Event} e - Select change event
   */
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <LearnContext.Provider
      value={{
        learnCard,
        selectedCategory,
        searchTerm,
        categories,
        handleCategoryChange,
        handleSearchChange,
      }}>
      {children}
    </LearnContext.Provider>
  );
};

export { LearnProvider, LearnContext };
