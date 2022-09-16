import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import clx from "classnames";

import { Button } from "components/layout/Button";

import logo from "assets/icons/drink-logo.png";
import langIcon from "assets/icons/lang-icon.png";

import "./Navbar.css";

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState(() => {
    if (window.localStorage.getItem("i18nextLng")) {
      return window.localStorage.getItem("i18nextLng");
    }
    return "en";
  });
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    const lang = e.target.hash.slice(1);

    e.preventDefault();
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-primary">
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Drink" />
        {t("Main logo")}
      </NavLink>
      <Button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              {t("Home link")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/random" className="nav-link">
              {t("Random link")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/categories" className="nav-link">
              {t("Categories link")}
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{
                    height: "25px",
                    marginRight: "10px",
                    position: "relative",
                    marginTop: "-6px",
                  }}
                  src={langIcon}
                  atr="lang"
                />
                {t("Change lang")}
              </a>
              <div className="dropdown-menu">
                <a
                  onClick={onChangeLanguage}
                  className={clx("dropdown-item", {
                    active: selectedLang === "ua",
                  })}
                  href="#ua"
                >
                  UA
                </a>
                <a
                  onClick={onChangeLanguage}
                  className={clx("dropdown-item", {
                    active: selectedLang === "en",
                  })}
                  href="#en"
                >
                  ENG
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              {t("About link")}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
