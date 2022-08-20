import React from "react";
import BlogCard from "../Components/BlogCard";
import AnimatedPage from "../Shared/AnimatedPage";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

//Home Page where all blogs will be displayed

const Home = () => {
  //DUMMY_DATA
  const DUMMY_BLOG = [
    {
      title: "ABC",
      description: "asdafbdsahfbjsd",
      id: 1,
    },
    {
      title: "XNY",
      description: "asfnkksdbfkhsdbggsdu",
      id: 2,
    },
    {
      title: "POR",
      description: "dkjasbhgvusgtasdyisdi",
      id: 3,
    },
    {
      title: "CSD",
      description: "asfdsfsdgsfgfsgasfg",
      id: 4
    },
    {
      title: "WYU",
      description: "sdiufhsdvbisdvisdfsdv",
      id: 5
    }
  ];

  const allBlogs = DUMMY_BLOG.map((blog) => {
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
      <div className="flex flex-row justify-end mr-24">{<Link to='/addBlog'><Button>Add Blog</Button></Link>}</div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
