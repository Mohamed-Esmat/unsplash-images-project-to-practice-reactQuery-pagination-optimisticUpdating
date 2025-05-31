import { QueryClient } from "@tanstack/react-query";
import { useSearchContext } from "./store/search-context";
export const queryClient = new QueryClient();

const SearchForm = ({ onSearch }) => {
  const { handleSearch } = useSearchContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value.trim();
    if (!searchTerm) return;
    handleSearch(searchTerm);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cats, dogs, nature..."
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
