import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "./cc/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./cc/ImageModal/ImageModal.jsx";
import ImagesList from "./cc/ImagesList/ImageGallery.jsx";
import Loader from "./cc/Loader/Loader.jsx";
import LoadMoreBtn from "./cc/LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "./cc/SearchBar/SearchBar.jsx";
import "./css/App.css";
import searchApi from "./searchApi.js";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
        {images.length > 0 && (
          <ImagesList images={images} onImageClick={openModal} />
        )}
        {loading && <Loader />}
        {images.length > 0 && <LoadMoreBtn page={handlePage} />}

        {selectedImage && (
          <ImageModal
            isOpen={selectedImage && true}
            image={selectedImage}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
