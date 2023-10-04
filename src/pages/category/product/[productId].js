import RootLayout from "@/components/RootLayout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProductDetails = ({ data }) => {
  const router = useRouter();
  const id = router.query?.productId;

  const {
    features,
    image,
    name,
    reviews,
    category,
    price,
    rating,
    status,
    description,
    indivisualRating,
  } = data.data;
  console.log(data);
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Head>
        <title>Build PC</title>
      </Head>
      <Image width={300} height={400} src={image} alt="" />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="font-semibold mt-3">
          <h1 className="mt-2">Name: {name}</h1>
          <h1 className="mt-2">Category: {category}</h1>
          <h1 className="mt-2">Price: $ {price}</h1>
          <h1 className="mt-2">
            Status:{" "}
            <span
              className={`${
                status === "In Stock" ? "text-[#1fc600]" : "text-red-500"
              }`}
            >
              {status}
            </span>
          </h1>
          <h1 className="mt-2">Rating: {rating}</h1>
          <h1 className="mt-2">Indivisual Rating: {indivisualRating}</h1>
        </div>
        <div className="font-semibold mt-3">
          <h1 className="mt-2">Description: {description}</h1>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-center font-semibold text-2xl">
          Reviews: {reviews?.length}
        </h1>
        {reviews?.map((review, i) => (
          <div key={i} className="mt-3 font-semibold">
            <h1>
              <span className="font-bold">{i + 1}. </span>Rating:{" "}
              {review.rating}
            </h1>
            <h1>Comment: {review.comment}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products?.data.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (contex) => {
  const { params } = contex;

  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
