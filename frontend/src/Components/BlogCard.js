import React from "react";
import styles from './BlogCard.module.css';

const BlogCard = (props) => {
  return (
    <React.Fragment>
      <h1>Hover Cards</h1>
      <div className={styles.container}>
        <div className={styles.hoverbox}>
          <img
            className={styles.hoverbox__image}
            src="https://picsum.photos/400/400"
            alt="Test Img"
          ></img>
          <h3>{props.title}</h3>
          <p>
            {props.description}
          </p>
          <link href="">More infos</link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;