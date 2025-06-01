import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchContext } from "./store/search-context";
import Pagiation from "./Pagiation";

const url = `https://api.unsplash.com/search/photos?query=animals&client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm, page } = useSearchContext();
  console.log(page);

  const searchUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=SUvn01G3U_D_S3kmIFQzX07PW6rm4Df1YXqQwfWjJ1U`;

  const urlToUse = searchTerm ? searchUrl : url;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["gallery", searchTerm, page],
    queryFn: async () => {
      const res = await axios.get(urlToUse);
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        throw new Error("Failed to fetch data");
      }
    },
  });

  let content;

  if (isLoading) {
    content = <h4 className="loading"></h4>;
  }

  if (isError) {
    content = <h4 className="error">There was an error...</h4>;
  }

  if (data && data.results.length === 0) {
    content = <h4 className="no-results">No Results Found!</h4>;
  }

  if (data && data.results && data.results.length > 0) {
    content = data.results.map((item) => {
      const { id, urls, alt_description } = item;
      return (
        <img
          key={id}
          loading="lazy"
          src={urls?.regular}
          alt={alt_description || "Image"}
          className="img"
        />
      );
    });
  }

  return (
    <>
      <section className="image-container">{content}</section>
      <section>
        <Pagiation totalPages={data ? data.total_pages : 0} />
      </section>
    </>
  );
};

export default Gallery;
