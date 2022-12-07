import React from 'react'
import Products from '../components/products/Products'
import TopSales from '../components/top-products/TopSales'
import HighLights from '../components/products/HighLights';
import TopRatedSales from '../components/hot-deals/TopRatedSales';
function HomePage() {
  return (
    <>
    <section className="flex flex-col gap-16 relative">
      <TopSales />
      <Products />
      <HighLights/>
      <TopRatedSales/>
    </section>
    </>
  );
}

export default HomePage