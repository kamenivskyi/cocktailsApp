import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import clx from "classnames";

import logo from "assets/icons/drink-logo.png";
import langIcon from "assets/icons/lang-icon.png";
import { Button } from "components/layout/Button";

import "./Navbar.css";

const UA_LANG = "ua";
const EN_LANG = "en";
const DEFAULT_LANG = EN_LANG;

const Navbar = (): JSX.Element => {
  const [selectedLang, setSelectedLang] = useState(() => {
    if (window.localStorage.getItem("i18nextLng")) {
      return window.localStorage.getItem("i18nextLng");
    }
    return DEFAULT_LANG;
  });
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (
    e: React.MouseEvent<HTMLAnchorElement>,
    lang: string
  ): void => {
    e.preventDefault();
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Drink" />
        {t("Main logo")}
      </NavLink>
      <Button
        type="button"
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
            <a
              href="#change-lang"
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
                alt="lang"
              />
              {t("Change lang")}
            </a>
            <div className="dropdown">
              <div className="dropdown-menu">
                <a
                  onClick={(e) => onChangeLanguage(e, "ua")}
                  className={clx("dropdown-item", {
                    active: selectedLang === UA_LANG,
                  })}
                  href="#ua"
                >
                  UA
                </a>
                <a
                  onClick={(e) => onChangeLanguage(e, "en")}
                  className={clx("dropdown-item", {
                    active: selectedLang === EN_LANG,
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
