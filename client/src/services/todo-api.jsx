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

// // Post a logout
// export const postLogout = async (logoutData) => {
//     const URL = `${baseUrl}/auth/logout`;
// }
