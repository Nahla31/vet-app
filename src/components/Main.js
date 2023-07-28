import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "eg",
    dir: "rtl",
  },
];

export default function Main() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [code, setCode] = useState("en");

  function checkLanguage() {
    if (currentLanguageCode === "en") {
      document.querySelector("body").style.backgroundImage =
        " url('../images/Cat-Cloud_Feet-EN2.jpg')";
    } else {
      document.querySelector("body").style.backgroundImage =
        " url('../images/Cat-Cloud_Feet-AR2.jpg')";
    }
  }

  function handleLang(e) {
    if (code === "en") {
      i18next.changeLanguage("ar");
      // e.target.textContent = "ع";
      document.querySelector("body").style.backgroundImage =
        " url('../images/Cat-Cloud_Feet-AR2.jpg')";
      setCode("ar");
    } else {
      i18next.changeLanguage("en");
      // e.target.textContent = "EN";
      document.querySelector("body").style.backgroundImage =
        " url('../images/Cat-Cloud_Feet-EN2.jpg')";
      setCode("en");
    }
  }

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  checkLanguage();
  return (
    <>
      <div className="main">
        <img src="./images/logo.png" className="logo--nav" alt="logo"></img>
        <h2 className="main--title">Pet Your Pet</h2>
        <div className="list--container">
          <ul className="nav--list">
            <a href="#">
              <li className="nav--items">{t("first_list_item")}</li>
            </a>

            <a href="#">
              <li className="nav--items">{t("second_list_item")}</li>
            </a>
            <a href="#">
              <li className="nav--items">{t("third_list_item")}</li>
            </a>
            <a href="#">
              <li className="nav--items">{t("fourth_list_item")}</li>
            </a>
          </ul>
        </div>
        <button
          className="lang--button"
          onClick={(e) => {
            handleLang(e);
          }}
        >
          {t("language_button")}
        </button>
      </div>
      <div className="div--content">
        <p className="content--head">{t("content_head")}</p>
        <p className="content--text">{t("content_text")}</p>
        <a className="create--profile--button" href="#form">
          {t("create_profile_button")}
        </a>
      </div>
    </>
  );
}
