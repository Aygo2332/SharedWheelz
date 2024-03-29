import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img src="/images/contactus.jpeg" alt="contactus" style={{ width: "100%" }}/>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">any query and info about prodduct feel free to call anytime we 24X7</p>
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

export default Contact;