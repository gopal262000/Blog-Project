import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <br />
      {blogs.map((blog) => (
        <div className="box-preview" key={blog.id}>
          <div>
            <Link to={`/blogs/${blog.id}`}>
              <h2 className="heading">{blog.title}</h2>
            </Link>
            <h4>Written by {blog.author}</h4>
          </div>
          <div className="delete">
            <button
              className="delete-btn"
              onClick={() => handleDelete(blog.id)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
