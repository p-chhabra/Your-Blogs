import React from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import AnimatedPage from "../Shared/AnimatedPage";
import homeImg from '../assets/home.png'

//Blog Post Page

const BlogPost = (props) => {
  return (
    <React.Fragment>
      <AnimatedPage>
        <div>
          <Link to="/">
            <Button>{`Home`}</Button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center p-20 pt-5">
          <p className="text-4xl font-bold mb-10">Title</p>
          <p>
            jhdgfsukdygfffffffsdyugfksduygfsdlyfigdslyfgdsilfgsufgsdliufdgfiadglfYSGDFGSDYGFLSDFliu
          </p>
        </div>
      </AnimatedPage>
    </React.Fragment>
  );
};

export default BlogPost;
