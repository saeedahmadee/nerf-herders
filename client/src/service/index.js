import axios from "axios";

const DATA_API_PATH = "http://localhost:3000/trees";

// Switch to this for getting data from gist

// const DATA_API_PATH =
//   "https://gist.githubusercontent.com/leefreemanxyz/903b8d090e8cb7caa82ab2ebf17c6a35/raw";

export default {
  fetchData() {
    return axios
      .get(DATA_API_PATH)
      .then(response => {
        if (response.data.data) {
          return response.data.data;
        }
        return null;
      })
      .catch(e => {
        throw e;
      });
  }
};
