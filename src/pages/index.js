import FeaturedCategory from "@/components/FeaturedCategory";
import FeaturedProduct from "@/components/FeaturedProduct";
import RootLayout from "@/components/RootLayout";
import Head from "next/head";
import banner from "../assets/images/banner-images/banner.png";
import Image from "next/image";

export default function Home({ data, category }) {
  return (
    <div>
      <Head>
        <title>Build PC</title>
      </Head>
      <Image
        width={undefined}
        height={undefined}
        className="w-full  md:h-[500px]"
        src={banner}
        alt=""
      />
      <FeaturedProduct data={data} />
      <FeaturedCategory data={category} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://building-pc.vercel.app/api/v1/product/random-products"
  );
  const data = await res.json();
  const response = await fetch(
    "https://building-pc.vercel.app/api/v1/category/categorys"
  );
  const category = await response.json();
  return {
    props: {
      data,
      category,
    },
  };
};
