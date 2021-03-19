import en_resume from "../json/EN_resume.json";
import es_resume from "../json/ES_resume.json";
import en_lang from "../json/EN_lang.json";
import es_lang from "../json/ES_lang.json";

const imageDir = "images";
const iconDir = "/icons";
const portfolioDir = "/portfolio";
const backgroundDir = "/background";

export const directories = {
  images: imageDir,
  icons: `${imageDir}${iconDir}`,
  portfolio: `${imageDir}${portfolioDir}`,
  backgrounds: `${imageDir}${backgroundDir}`,
  pdf: "/pdf",
};

export const languages = [
  {
    key: "es",
    desc: "Español",
    text: es_lang,
    resume: es_resume,
    icon: `${directories.icons}/spain_flag_icon.png`,
  },
  {
    key: "en",
    desc: "English",
    text: en_lang,
    resume: en_resume,
    icon: `${directories.icons}/gb_flag_icon.png`,
  },
];
