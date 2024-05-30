import "./css/App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useState } from "react";
import searchApi from "./searchApi.js";
import toast, { Toaster } from "react-hot-toast";
import { MagnifyingGlass } from "react-loader-spinner";
import ImagesList from "./Components/ImagesList/ImagesList";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (result, page = 1) => {
    try {
      if (page === 1) {
        setImages([]);
      }
      setLoading(true);
      setError(false);

      const data = await searchApi(result, page);

      if (data.length !== 0) {
        setImages((prevImages) => [...prevImages, ...data]);
        setSearchTerm(result);
        setCurrentPage(page);
      } else {
        setError(true);
      }
      console.log(data);
    } catch (error) {
      toast.error(
        "Network error. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePage = () => {
    handleSearch(searchTerm, currentPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="container">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            error: {
              style: {
                border: "1px solid #f44336",
                padding: "16px",
                color: "#f44336",
              },
            },
          }}
        />
        {error && <ErrorMessage />}
        {images.length > 0 && <ImagesList images={images} />}
        {loading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
        {images.length > 0 && !loading && <LoadMoreBtn page={handlePage} />}
      </div>
    </>
  );
}

export default App;
