// Category.js

import React, { useState } from "react";
import { Col, Row } from "antd";
import Link from "next/link"; // Import the Link component

const Category = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Featured Product
      </h1>
      <Row>
        {categories?.map((category) => (
          <Col
            key={category._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            style={{
              marginBottom: "20px",
              padding: "20px",
              textAlign: "center",
              border: "1px solid gray",
              cursor: "pointer",
              backgroundColor:
                category.name === selectedCategory ? "#e0e0e0" : "white",
            }}
          >
            <Link href={`/products?category=${category.category}`}>
              <h1 onClick={() => handleCategoryClick(category.name)}>
                {category.name}
              </h1>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Category;
