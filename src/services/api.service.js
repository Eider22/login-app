import axios from "axios";
import { authConfig } from "../config/authConfig";

const checkAuthentication = async (user, password) => {
  let url = `${authConfig.urlAuthApi}/auth/login`;

  const response = await axios.post(
    url,
    {
      user: `${user}`,
      password: `${password}`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    // return true;
  }

  const data = response.data;

  const authenticatedUser = data.object.user;

  return authenticatedUser;
};

export { checkAuthentication };
