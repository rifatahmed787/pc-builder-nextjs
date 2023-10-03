import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import HomeCard from "@/components/UI/HomeCard";
import Category from "@/components/UI/Category";
const HomePage = ({ featuredData, category }) => {
  return (
    <>
      <Head>
        <title>PC-Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Banner />

      <HomeCard featuredData={featuredData} />
      <Category categories={category} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featured");
  const data = await res.json();

  const categoryRes = await fetch("http://localhost:5000/category");
  const categoryData = await categoryRes.json();
  return {
    props: {
      featuredData: data,
      category: categoryData,
    },
    revalidate: 30,
  };
};
