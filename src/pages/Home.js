import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = (_id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== _id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for the resource!⛑️ help')
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setLoading(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message)
          setLoading(false)
          setBlogs(null)
        });
    });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isloading ? (
        <div>loading...</div>
      ) : (
        blogs && (
          <BlogList
            blogs={blogs}
            title={"Blog Lists"}
            handleDelete={handleDelete}
          />
        )
      )}
    </div>
  );
};

export default Home;
