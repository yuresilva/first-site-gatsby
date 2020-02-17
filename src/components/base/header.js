import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import logo from "../../images/logo-gatsby.svg"
import Input from "../atomos/Input/index"
import Alink from "../atomos/Link/link"
import PropTypes from "prop-types"

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
  box-shadow: 0.33333rem 0 1.33333rem rgba(87, 87, 87, 0.1);
`

const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
const ButtonIcon = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 0;
  background: #05b993;
  transition: all 0.5s;

  &&:hover {
    opacity: 0.8;
  }
`

const HeaderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`

const Header = ({ siteTitle }) => (
  <header id="header">
    <HeaderContainer>
      <HeaderContent>
        <div className="header__logo">
          <Link to="/">
            <img style={{ height: 40 }} src={logo} />
          </Link>
        </div>

        <nav id="nav">
          <HeaderList>
            <li>
              <Alink>
                <Link to="/">Home</Link>
              </Alink>
            </li>
            <li>
              <Alink>
                <Link to="/">Produtos</Link>
              </Alink>
            </li>
            <li>
              <Alink>
                <Link to="/">Preços</Link>
              </Alink>
            </li>
            <li>
              <Alink>
                <Link to="/">Contato</Link>
              </Alink>
            </li>
          </HeaderList>
        </nav>

        <div>
          <Input type="search" placeholder="Pesquise aqui...." />

          <ButtonIcon>
            <span className="">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </ButtonIcon>
        </div>
      </HeaderContent>
    </HeaderContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
