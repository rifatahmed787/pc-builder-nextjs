import React from "react";
import { Col, Row } from "antd";
const Category = ({ categories }) => {
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
        {categories?.map((product) => (
          <Col
            key={product._id}
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
            }}
          >
            <div>{product.name}</div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Category;
