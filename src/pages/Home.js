import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "that contains some dummy information",
      author: "Mario",
      id: 1,
    },
    {
      title: "I Love React",
      body: " I have to make this tutorial to at its end",
      author: "Gopal",
      id: 2,
    },
    {
      title: "Some Flask Restful",
      body: "The api that servers many benefits",
      author: "Gopal",
      id: 3,
    },
    {
      title: "Some Flask Restful",
      body: "The api that servers many benefits",
      author: "Gopal",
      id: 4,
    },
    {
      title: "Some Flask Restful",
      body: "The api that servers many benefits",
      author: "Gopal",
      id: 5,
    },
  ]);
  const handleDelete = (_id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== _id);
    setBlogs(newBlogs);
  }

  return (
    <div>
      <BlogList blogs={blogs} title={"Blog Lists"} handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Gopal")} title={"Update Version"} handleDelete={handleDelete}/> 
    </div>
  ); 
};

export default Home;
