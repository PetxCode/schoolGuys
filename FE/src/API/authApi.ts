import axios from "axios";

const url = "http://localhost:4000/api/v1";

export const getURL = async () => {
  try {
    return await axios.get(`https://growgrade.onrender.com/`);
  } catch (error) {
    console.log(error);
  }
};

export const createSchoolAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/register-account`, data);
  } catch (error) {
    console.log(error);
  }
};

export const verifySchoolAccount = async (data: any) => {
  try {
    return await axios.patch(`${url}/verify-account`, { token: data });
  } catch (error) {
    console.log(error);
  }
};

export const loginSchoolAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/login-account`, data);
  } catch (error) {
    console.log(error);
  }
};
