import axios from "axios";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Form() {
  const { t } = useTranslation();
  const [confirm, setConfirm] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    const requestData = {
      Firstname: elements.FN.value,
      Lastname: elements.LN.value,
      Petname: elements.PN.value,
      PetType: elements.PT.value,
      Phone: elements.Phone.value,
      Email: elements.Email.value,
      Address: elements.Address.value,
    };
    const sendEmail = () => {
      var templateParams = {
        SendTo: requestData.Email,
        name: requestData.Firstname,
        message: `we successfully created your pet's profile, and we will contact you soon. \n Thank you for being interested in our services.`,
      };
      emailjs
        .send(
          "service_5icdp7q",
          "template_l0i63q8",
          templateParams,
          "NAVS1D1SpZlsWOEJj"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    };
    const requestJson = JSON.stringify(requestData);
    try {
      const response = await axios.post(
        " http://localhost:5000/savedata",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Do something with the response data if required
    } catch (error) {
      console.error("Error:", error.message);
      // Handle any error that occurred during the AJAX call
    }
    sendEmail();
    setConfirm(false);
  };

  if (confirm) {
    return (
      <div className="center--form" id="form">
        <form className="profile--form" onSubmit={handleSubmit}>
          <h4 className="form--title">{t("form_title")}</h4>
          <label htmlFor="fname">{t("first_name")}</label>
          <input type="text" id="fname" name="FN" required />
          <label htmlFor="lname">{t("second_name")}</label>
          <input type="text" id="lname" name="LN" required />
          <label htmlFor="pet--type">{t("pet_name")}</label>
          <input type="text" id="pname" name="PN" required />
          <label htmlFor="pet--type">{t("pet_type")}</label>
          <input type="text" name="PT" required />
          <label htmlFor="phone">{t("phone")}</label>
          <input type="number" id="phone" name="Phone" />
          <label htmlFor="email">{t("email")}</label>
          <input type="email" id="email" name="Email" required />
          <label htmlFor="address">{t("address")}</label>
          <input type="text" id="address" name="Address" />
          <button type="submit" className="submit--btn">
            {t("submit_button")}
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="center--form" id="form">
        <form className="profile--form">
          <img
            src=".\images\email.jpg"
            width="300px"
            alt="Confirmation"
            className="email--img"
          ></img>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            {t("submitted")}
          </p>
        </form>
      </div>
    );
  }
}
