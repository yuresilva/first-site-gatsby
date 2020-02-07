import React from "react"
import { Link } from "gatsby"
import "../../static/css/styles.css"

import Layout from "../components/layout"
import ImgHeader from "../images/banner-header.png"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div className="container__header">
        <div className="content__header">
          <h1 className="title__header">
            Entrega <br /> com <br /> <span>Qualidade</span>
          </h1>
          <p className="header__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            dummy text dummy text industry. Lorem Ipsum has been the industry's
            standard dummy text dummy text dummy text ever since the 1500s, when
            an unknown printer took a galley of type
          </p>
          <div className="mt3">
            <a className="btn --color__btn-green " href="">
              Demo site
            </a>
            <a className="btn --color__btn-roxo ml3 " href="">
              Movie Clip
            </a>
          </div>
        </div>
        <div className="header__banner">
          <img src={ImgHeader} />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
