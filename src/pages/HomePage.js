import React from "react";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <h1>HomePage</h1>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "SharedWheelz",
  description: "ECommerce Website",
  keywords: "mern,react,node,mongodb",
  author:"Ayush Goyal"
}

export default HomePage;