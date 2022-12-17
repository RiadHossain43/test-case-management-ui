import { getAccessTokenData } from "./authServices";
import http from "./httpServices";
const apiEndPoint = `/api/Post`;
export function createPost(data) {
  return http.post(`${apiEndPoint}/`, {
    type: data.type,
    title: data.title,
    body: data.body,
    refPostId: data.refPostId || -1,
    createdBy: parseInt(getAccessTokenData()?.nameid),
  });
}
export function updatePost(dataId, data) {
  return http.put(`${apiEndPoint}/${dataId}/`, {
    type: data.type,
    title: data.title,
    body: data.body,
  });
}
export function getPosts() {
  return http.get(`${apiEndPoint}/`);
}
export function getPostAnswers(dataId) {
  return http.get(`${apiEndPoint}/answers/${dataId}`);
}
export function getPost(dataId) {
  return http.get(`${apiEndPoint}/${dataId}`);
}
export function deletePost(dataId) {
  return http.delete(`${apiEndPoint}/${dataId}/`);
}
