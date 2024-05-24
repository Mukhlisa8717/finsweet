import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  let data = await getData();
  return (
    <main>
      <Hero />
      <Products data={data} />
      <Category />
    </main>
  );
}
