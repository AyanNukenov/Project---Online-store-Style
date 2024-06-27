import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "men's clothing") {
      navigate("/categories/mens-clothing");
    }
  };

  return (
    <div className="categories-container">
      {categories && categories.length > 0 ? (
        categories.map((category, index) => (
          <h2 key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </h2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categories;
