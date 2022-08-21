import React, {useState, useEffect} from "react";
import BlogCard from "../Components/BlogCard";
import AnimatedPage from "../Shared/AnimatedPage";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

//Home Page where all blogs will be displayed

const Home = () => {

  //Blogs State
  const [blogs, setBlogs] = useState([]);

  //Fetching Blogs
    useEffect(()=>{
      const getRequest = async ()=>{
        try{
          const response = await fetch('http://localhost:8000/api');
          const responseData = await response.json();

          if(!response.ok){
            throw new Error(responseData.message);
          }

          setBlogs(responseData.blogs);

        }catch(err){
          console.log(err.message);
        }
      }
      getRequest();
    },[])

  const allBlogs = blogs.map((blog) => {
    return (
      <BlogCard
        key={blog.id}
        id={blog.id}
        title={blog.title}
        description={blog.description}
      ></BlogCard>
    );
  });

  return (
    <AnimatedPage>
      <div className="flex flex-col">
      <div>{allBlogs}</div>
      <div className="flex flex-row justify-center mt-20">{<Link to='/addBlog'><Button>Add Blog</Button></Link>}</div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
