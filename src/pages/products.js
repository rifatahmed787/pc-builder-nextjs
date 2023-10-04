import RootLayout from "@/components/Layouts/RootLayout";
import CategoryCard from "@/components/UI/CategoryCard";

const Products = ({ product }) => {
  return (
    <div>
      <CategoryCard products={product} />
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const productData = await res.json();

  return {
    props: {
      product: productData,
    },
    revalidate: 30,
  };
};
