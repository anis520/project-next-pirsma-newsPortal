import { CreateToken } from "./JWTTokenHelper";

export const setToken = async (email, id) => {
  let token = await CreateToken(email, id);
  return {
    "Set-Cookie": `token=${token}; Max-Age=10d; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
};
