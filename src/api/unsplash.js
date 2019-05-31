import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 5dc04c05f5227324e618d4681b293b66a8c929924fcccbd89a272a9b1a51db51"
  }
});
