import { createContext, useState } from "react";

//Importing Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

export const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  const icons = [
    { icon: <FaFacebook />, className: "facebook-icon" },
    { icon: <FaInstagram />, className: "instagram-icon" },
    { icon: <FaSnapchatGhost />, className: "snapchat-icon" },
  ];
  return (
    <SocialContext.Provider value={{ icons }}>
      {children}
    </SocialContext.Provider>
  );
};
