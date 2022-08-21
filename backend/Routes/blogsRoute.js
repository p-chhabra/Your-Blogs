//ALL ROUTES 
const express = require('express');
const router = express.Router();
const HttpError = require('../modals/HttpError');
const Blog = require('../modals/blogSchema');

//Home Route
router.get('/', async (req, res, next)=>{
    let blogs;
    try{
        blogs = await Blog.find({});
    } catch{
        const error = new HttpError('Could not fetch the blogs', 404);
        return next(error);
    }

    res.status(200).json({blogs: blogs.map((blog) => blog.toObject({getters: true}))});
});

//BlogPost Route
router.get('/:bid', async (req, res, next)=>{
    const blogID = req.params.bid;

    let blog;
    try{
        blog = await Blog.findById(blogID);
    }catch(err){
        const error = new HttpError(err.message, 404);
        return next(error);
    }

    if(!blog){
        const error = new HttpError('Could not find the blog for given id', 404);
        return next(error);
    }

    res.json({blog: blog.toObject({getters: true})});
})

//Add Blog Route
router.post('/addBlog', async (req, res, next)=>{
    const {title, description} = req.body;

    const createdBlog = new Blog({
        title,
        description
    })

    try{
        await createdBlog.save();
    } catch(err){
        const error = new HttpError("Creating Blog Failed!",500);
        return next(error);
    }

    res.status(200).json({createdBlog: createdBlog.toObject({getters: true})});

});

module.exports = router;