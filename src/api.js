import axios from "axios";

const imageSearch = async (keyword) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID YH2l617FqJWs-6Koo5FtefP0m7Xsx7mbZX-ETp2U3uY",
    },
    params: {
      query: keyword,
    },
  });
  console.log(response);
  return response.data.results;
};

export default imageSearch;
