import "./App.css";
import Main from "./components/Main";
import Service from "./components/Service";
import Form from "./components/Form";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Main />
      <div className="service--section">
        <Service
          image="./images/icons8-hospital-50.png"
          title={t("first_service_title")}
          content={t("first_service_content")}
        />
        <Service
          image="./images/icons8-home-50.png"
          title={t("second_servic_title")}
          content={t("second_service_content")}
        />
        <Service
          image="./images/icons8-shopping-bag-50.png"
          title={t("third_service_title")}
          content={t("third_service_content")}
        />
      </div>
      <Form />
    </div>
  );
}

export default App;
