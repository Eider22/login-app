import axios from "axios";
import { authConfig } from "../config/authConfig";
import { freeGameApiConfig } from "../config/freeGameApiconfig";

const checkAuthentication = async (user, password) => {
  let url = `${authConfig.urlAuthApi}/auth/login`;

  const options = {
    method: "POST",
    url: url,
    data: {
      user: `${user}`,
      password: `${password}`,
    },
    headers: {
      "content-type": "application/json",
    },
  };

  const response = await requestApi(options);

  if (response.status !== 200) {
    // return true;
  }

  const token = response.data.object?.token ? response.data.object.token : null;

  const userData = response.data.object?.user
    ? response.data.object.user
    : null;

  if (!token) {
    return null;
  }
  const authenticatedUser = {
    token: token,
    id: userData.id,
    firstName: userData.firstName,
    secondName: userData.secondName,
    firstlastname: userData.firstlastname,
    secondLastname: userData.secondLastname,
  };

  return authenticatedUser;
};

const getFreeGames = async (optionalCategory = null) => {
  const params = {
    category: "shooter"
  };
  if(optionalCategory){
    params.category = optionalCategory;
  }
  const options = {
    method: "GET",
    url: `${freeGameApiConfig.urlFreeToGameApi}/games?`,
    params,
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "e659cb101amshf849054fdd88a19p1e7ac8jsnd3036b8a3fe6",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const response = await requestApi(options);
  if (!response) {
    return null;
  }
  console.log("response api free games → ", response);
  console.log("data api free games → ", response.data);
  return response.data;
};

const requestApi = async (options) => {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    return null;
  }
};

export { checkAuthentication, getFreeGames };
