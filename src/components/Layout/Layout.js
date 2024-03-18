import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet";

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
      <Header/>
        <main style={{minHeight:"80vh"}}>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout