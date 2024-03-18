import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/about.jpeg" alt="contactus" style={{ width: "100%" }}/>
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus</p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "SharedWheelz",
  description: "ECommerce Website",
  keywords: "mern,react,node,mongodb",
  author:"Ayush Goyal"
}

export default About;