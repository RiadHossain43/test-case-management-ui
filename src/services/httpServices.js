import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    alert("An unexpected error occured");
  }
  return Promise.reject(error);
});
function setJwt(accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}
let http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
};
export default http;
