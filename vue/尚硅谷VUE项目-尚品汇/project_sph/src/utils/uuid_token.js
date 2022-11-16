import { v4 as uuidv4 } from "uuid";

export const getUUID = () => {
  let uuid = window.localStorage.getItem("uuid_token");
  if (!uuid) {
    uuid = uuidv4();
    window.localStorage.setItem("uuid_token", uuid);
  }
  return uuid;
};
