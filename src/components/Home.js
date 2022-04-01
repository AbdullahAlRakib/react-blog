import React, { useState } from 'react';

const Home = () => {
const [blogs, setBlogs] = useState([
    {title:'My New Website',body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryauthor s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',author:'mario',id:1},
    {title:'My New Website',body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryauthor s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',author:'ario',id:2},
    {title:'My New Website',body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryauthor s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',author:'rio',id:3},
]);
  return (
    <div className='home'>
   {blogs.map((blog)=>(
       <div className='blog-preview' key={blog.id}>
           <h2>{blog.title}</h2>
           <p>{blog.body}</p>
           <p>{blog.author}</p>
        </div>
   ))}
    </div>
  )
}

export default Home