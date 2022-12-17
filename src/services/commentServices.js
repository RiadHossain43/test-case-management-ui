import { getAccessTokenData } from "./authServices";
import http from "./httpServices";
const apiEndPoint = `/api/Comment`;
export function createComment(data) {
  return http.post(`${apiEndPoint}/`, {
    body: data.body,
    postId: data.postId,
    createdBy:  parseInt(getAccessTokenData().nameid),
  });
}
export function updateComment(dataId, data) {
  return http.put(`${apiEndPoint}/${dataId}/`, {
    body: data.body,
    postId: data.postId,
    createdBy: parseInt(getAccessTokenData().nameid),
  });
}
export function getComments() {
  return http.get(`${apiEndPoint}/`);
}
export function getCommentsByPost(dataId) {
  return http.get(`${apiEndPoint}/post/${dataId}`);
}
export function getComment(dataId) {
  return http.get(`${apiEndPoint}/${dataId}`);
}
export function deleteComment(dataId) {
  return http.delete(`${apiEndPoint}/${dataId}/`);
}
