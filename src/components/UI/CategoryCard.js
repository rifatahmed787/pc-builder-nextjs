import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CategoryCard = ({ products }) => {
  const { Meta } = Card;
  const router = useRouter();
  const selectedCategory = router.query.category;
  console.log(selectedCategory);
  console.log(products);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  console.log(filteredProducts);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Filter Data
      </h1>

      <Row>
        {filteredProducts?.map((product) => (
          <Col
            key={product._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            style={{ marginBottom: "20px", padding: "20px" }}
          >
            <Link href={`/products/${product._id}`}>
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
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoryCard;
