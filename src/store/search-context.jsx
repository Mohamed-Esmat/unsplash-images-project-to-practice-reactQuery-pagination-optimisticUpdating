import { createContext, useContext, useState, useEffect } from "react";
import { queryClient } from "../SearchForm";

const SearchContext = createContext({
  searchTerm: "",
  handleSearch: () => {},
  page: 0,
  setPage: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);

  const handleSearch = (term) => {
    if (term.trim() === "") return;
    setSearchTerm(term);
    setPage(0);
    // queryClient.setQueryData(["gallery", term], null); // Invalidate the cache for the new search term
  };

  //   useEffect(() => {
  //     const savedSearchTerm = localStorage.getItem("searchTerm");
  //     if (savedSearchTerm) {
  //       setSearchTerm(savedSearchTerm);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("searchTerm", searchTerm);
  //   }, [searchTerm]);

  const ctxValue = {
    searchTerm,
    handleSearch,
    page,
    setPage, // Expose setPage to allow pagination control
  };

  return (
    <SearchContext.Provider value={ctxValue}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
