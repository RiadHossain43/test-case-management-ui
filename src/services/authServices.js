import http from "./httpServices";
import jwtDecode from "jwt-decode";
const apiEndPoint = `/api/Auth`;
let accessTokenKey = "accessToken";
http.setJwt(getAccessToken());
export async function login(data) {
  const { data: jwt } = await http.post(apiEndPoint, {
    name:"asdasdasdasd",
    email: data.email,
    password: data.password,
  });
  saveAccessTokens(jwt);
  http.setJwt(getAccessToken());
}
export function saveAccessTokens(accessToken) {
  sessionStorage.setItem(accessTokenKey, accessToken);
}
export async function forgotPassword(data) {
  return http.post(`${apiEndPoint}/forgotpassword`, {
    email: data.email,
  });
}
export async function logout() {
  sessionStorage.removeItem(accessTokenKey);
}
export function getAccessTokenData() {
  try {
    let accessTokenData = sessionStorage.getItem(accessTokenKey);
    let data = jwtDecode(accessTokenData);
    return data;
  } catch (ex) {
    return null;
  }
}
export function getAccessToken() {
  return sessionStorage.getItem(accessTokenKey);
}
