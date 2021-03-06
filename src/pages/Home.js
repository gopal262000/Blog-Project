import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isloading, error, handleDelete} = useFetch("http://localhost:8000/blogs")

  return (
    <>
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
    </>
  );
};

export default Home;
