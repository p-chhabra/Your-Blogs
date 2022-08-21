import React from "react";
import styles from './BlogCard.module.css';
import background from '../assets/background.jpg'
import { Link } from "react-router-dom";

//Card Template for blogs shown at home screen

const BlogCard = (props) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.hoverbox + ` flex flex-col justify-between items-center`}>
          <img
            className={styles.hoverbox__image}
            src={background}
            alt="Test Img"
          ></img>
          <h3>{props.title}</h3>
          <div className="text-gray-300" dangerouslySetInnerHTML={{__html: props.description}}></div>
          <div className="flex flex-col items-end">
          <Link to={`/${props.id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;