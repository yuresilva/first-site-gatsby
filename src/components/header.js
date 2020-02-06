import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import logo from "../images/logo-gatsby.svg"

import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container__fluid">
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img style={{ height: 40 }} src={logo} />
          </Link>
        </div>

        <nav>
          <ul className="header__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Produtos</Link>
            </li>
            <li>
              <Link to="/">Preços</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
          </ul>
        </nav>
        <div>
          <div>
            <input
              className="search"
              type="search"
              placeholder="Pesquise aqui...."
            />
            <button className="button btn__color-search">
              <span className="">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
