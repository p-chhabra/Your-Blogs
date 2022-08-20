import React from "react";
import { Routes, Route } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Layout from "./Shared/Layout";
import Home from "./Home/Home";
import BlogPost from "./Blog/BlogPost";
import AddBlog from "./Blog/AddBlog";

function App() {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:blog' element={<BlogPost/>}/>
          <Route path='/addBlog' element={<AddBlog/>}/>
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
