import axios from "axios";

const fetchingImages = async (search, currentPage) => {
  try {
    const result = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "UCJjWnG08jeao8sM7OJ8hSqLlV3r9XrdgYBruP7vBPc",
        page: currentPage,
        query: search,
        orientation: "landscape",
      },
    });
    return result.data.results;
  } catch (error) {
    console.error("We cant get data from server");
  }
};

export default fetchingImages;
