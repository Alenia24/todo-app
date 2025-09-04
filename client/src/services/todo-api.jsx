import axios from "axios";

// Dev Mode
const baseUrl = "http://localhost:3000";

// // Production Mode
// const basUrl = ""

// Post a register
export const postRegister = async (registerData) => {
  const URL = `${baseUrl}/api/auth/register`;
  const response = await axios.post(URL, registerData);
  return response;
};

// Post a login
export const postLogin = async (loginData) => {
    const URL = `${baseUrl}/api/auth/login`;
    const response = await axios.post(URL, loginData);
    return response;    
}

// Post a logout
export const postLogout = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const URL = `${baseUrl}/api/auth/logout`; // your backend logout endpoint
  const response = await axios.post(
    URL,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// // Post a logout
// export const postLogout = async () => {
//     localStorage.removeItem("token");
//     window.location.href = "/"
// }

// Get User info 
export const getName = async () => {
  const token = localStorage.getItem("token");
  if(!token) {
    throw new Error("No token fornd.");
  }

  const response = await axios.get(`${baseUrl}/api/auth/user`, {
    headers: {Authorization: `Bearer ${token}`},
  })
  return response.data.name;
};

