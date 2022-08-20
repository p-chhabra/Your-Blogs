import React from 'react'
import BlogCard from '../Components/BlogCard';
import AnimatedPage from '../Shared/AnimatedPage';

const BlogPost = () => {

  const DUMMY_BLOG = [{
    title: "ABC", description: "asdafbdsahfbjsd"
  }, {
    title: "XNY", description: "asfnkksdbfkhsdbggsdu"
  },{
    title: "POR", description: "dkjasbhgvusgtasdyisdi"
  }];
  
  const allBlogs = DUMMY_BLOG.map((blog)=>{
    return <BlogCard title={blog.title} description={blog.description}></BlogCard>
  })

  return (
    <AnimatedPage>
    {allBlogs}
    </AnimatedPage>
  )
}

export default BlogPost