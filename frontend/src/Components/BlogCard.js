import React from "react";
import styles from './BlogCard.module.css';
import background from '../assets/background.jpg'
import { Link } from "react-router-dom";

//Card Template for blogs shown at home screen

const BlogCard = (props) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.hoverbox}>
          <img
            className={styles.hoverbox__image}
            src={background}
            alt="Test Img"
          ></img>
          <h3>{props.title}</h3>
          <p>
            {props.description}
          </p>
          <Link to={`/${props.title}`}>Read More</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;