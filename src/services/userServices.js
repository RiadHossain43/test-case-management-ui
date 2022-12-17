import http from "./httpServices";
const apiEndPoint = `/api/User`;
export function createUser(user) {
  return http.post(`${apiEndPoint}/`, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}
export function updateUser(userId, user) {
  return http.put(`${apiEndPoint}/${userId}/`, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}
export function getUsers() {
  return http.get(`${apiEndPoint}/`);
}
export function getUser(userId) {
  return http.get(`${apiEndPoint}/${userId}`);
}
export function deleteUser(userId) {
  return http.delete(`${apiEndPoint}/${userId}/`);
}
