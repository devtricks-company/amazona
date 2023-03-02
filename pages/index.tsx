import type { NextPage } from "next";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import ProductItem from "../components/ProductItem";
import { ProductType } from "../types/product.type";
import { data } from "../utils/data";
const Home: NextPage = () => {
  return (
    <Layout title="homepage">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product: ProductType) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
