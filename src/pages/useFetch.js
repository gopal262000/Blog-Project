import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = (_id) => {
    const newBlogs = data.filter((blog) => blog.id !== _id);
    setData(newBlogs);
  };

  useEffect(() => {
    const abortcontroller = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortcontroller.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for the resource!⛑️ help");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setLoading(false);
            setData(null);
          }
        });
    });

    return () => abortcontroller.abort();
  }, [url]);

  return { data, isloading, error, handleDelete };
};

export default useFetch;
