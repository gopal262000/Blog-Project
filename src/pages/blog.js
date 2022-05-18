import { useParams } from "react-router";
import useFetch from "./useFetch";

const Blogs = () => {
    const { id } = useParams();
    const {data: blog, isloading, error} = useFetch("http://localhost:8000/blogs/" + id)

    return ( 
        <div className="blog">
            {isloading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div>
                <h1>{blog.title}</h1>
                <h3>{blog.author}</h3>
                <p>{blog.body}</p>
                </div>
            )}
        </div>
     );
}
 
export default Blogs;