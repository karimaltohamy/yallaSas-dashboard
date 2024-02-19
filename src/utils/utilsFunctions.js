import CryptoJS from "crypto-js";
import { secretPass } from "./data";

export function convertFromBytes(bytes, decimals = 2) {
  const size = ["B", "K", "M", "G", "T", "PB", "EB", "ZB", "YB"];
  const factor = Math.floor((String(bytes).length - 1) / 3);

  return (bytes / 1024 ** factor).toFixed(decimals) + size[factor];
}

export const encryptedData = (data) => {
  const dataToEncrypt = JSON.stringify(data);
  let encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();

  return encrypted;
};

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
