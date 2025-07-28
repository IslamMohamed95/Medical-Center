import { LanguageProvider } from "./LanguageContext";
import { NavProvider } from "./NavContext";
import { SocialProvider } from "./SocialMedialContext";
import { Responsive3DProvider } from "./Resposive3DContext";

export const GlobalProvider = ({ children }) => {
  return (
    <LanguageProvider>
      <Responsive3DProvider>
        <NavProvider>
          <SocialProvider>{children}</SocialProvider>
        </NavProvider>
      </Responsive3DProvider>
    </LanguageProvider>
  );
};
