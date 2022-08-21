import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import { Link, useParams } from "react-router-dom";
import AnimatedPage from "../Shared/AnimatedPage";
import homeImg from "../assets/home.png";

//Blog Post Page

const BlogPost = (props) => {
  //Getting params
  const { blogID } = useParams();
  //State
  const [blog, setBlog] = useState({});

  //Get a Certain Blog
  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/${blogID}`);
        const responseData = await response.json();

        if (!response.ok) {
          console.log(responseData.message);
        }

        setBlog(responseData.blog);
      } catch (err) {
        console.log(err.message);
      }
    };
    getBlog();
  }, []);

  return (
    <React.Fragment>
      <AnimatedPage>
        <div>
          <Link to="/">
            <Button>{`Home`}</Button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center p-20 pt-5">
          <p className="text-4xl font-bold mb-10">{blog.title}</p>
          <div dangerouslySetInnerHTML={{__html: blog.description }}></div>
        </div>
      </AnimatedPage>
    </React.Fragment>
  );
};

export default BlogPost;
