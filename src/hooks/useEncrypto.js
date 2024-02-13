import React, { useState } from "react";
import { secretPass } from "../utils/data";
import CryptoJS from "crypto-js";

const useEncryption = () => {
  const [encryptedData, setEncryptedData] = useState("");

  const encrypt = (data) => {
    if (data && secretPass) {
      const dataToEncrypt = JSON.stringify(data);
      const encrypted = CryptoJS.AES.encrypt(
        dataToEncrypt,
        secretPass
      ).toString();
      setEncryptedData(encrypted);
    }
  };

  return { encryptedData, encrypt };
};

export default useEncryption;
