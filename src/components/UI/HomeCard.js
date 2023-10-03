import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const HomeCard = ({ featuredData }) => {
  const { Meta } = Card;
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
        {featuredData?.map((product) => (
          <Col
            key={product._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            style={{ marginBottom: "20px", padding: "20px" }}
          >
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  alt="example"
                  src={product.image}
                  width={300}
                  height={250}
                />
              }
            >
              <Meta title={product.name} />
              <h3>Category: {product.category}</h3>
              <p>Price: ${product.price}</p>
              <p>Status: {product.status}</p>
              <p>Rating: {product.averageRating}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeCard;
