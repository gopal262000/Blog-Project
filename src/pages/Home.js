import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (_id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== _id);
    setBlogs(newBlogs);
  }

  useEffect (() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json();
      })

      .then(data => {
        setBlogs(data);
      })
  },[])

  return (
    <div>
      {blogs && <BlogList blogs={blogs} title={"Blog Lists"} handleDelete={handleDelete}/>}
    </div>
  ); 
};

export default Home;
