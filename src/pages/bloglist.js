import { BiTrash } from "react-icons/bi";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <br />
      {blogs.map((blog) => (
        <div className="box-preview" key={blog.id}>
          <div>
            <h2 className="heading">{blog.title}</h2>
            <body>{blog.body}</body>
            <h4>Written by {blog.author}</h4>
          </div>
          <div className="delete">
            <button
              className="delete-btn"
              onClick={() => handleDelete(blog.id)}
            >
              <BiTrash className="bitrash" size={15} style={{ fill: 'white' }}/>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
