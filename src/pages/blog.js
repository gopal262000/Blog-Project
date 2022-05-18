import { useParams } from "react-router";

const Blogs = () => {
    const { id } = useParams();

    return ( 
        <div className="blog">
            <h1> Blog Details - {id}</h1> 
        </div>
     );
}
 
export default Blogs;