import React from "react"
import { Link } from "gatsby"
import "../../static/css/styles.css"
import styled from "styled-components"
import Button from "../components/atomos/Link/buttonLink"

import Layout from "../components/layout"
import ImgHeader from "../images/banner-header.png"

import SEO from "../components/seo"

const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #05b993;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    h1 {
      font-size: 3em;
    }
  }
`

const ContainerRight = styled.div`
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
`
const ContainerLeft = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`

const TitleBanner = styled.h1`
  font-size: 60px;
  line-height: 1.3em;
  font-weight: 600;
  color: #202428;
`

const DescriptionHeader = styled.p`
  font-size: 16px;
  color: #51585f;
  margin: 20px 0 70px 0;
`

const CardContainer = styled.div`
  display: flex;
  text-align: center;
`

const Card = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 2.5em 2em;
  border: none;
  background: #fff;
  box-shadow: 0 11px 42px 1px rgba(58, 52, 82, 0.1);
  margin-right: 20px;
  &&:last-child {
    margin-right: 0px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <ContainerBanner>
        <ContainerRight>
          <TitleBanner>
            Entrega <br /> com <br /> <span>Qualidade</span>
          </TitleBanner>
          <DescriptionHeader>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            dummy text dummy text industry. Lorem Ipsum has been the industry's
            standard dummy text dummy text dummy text ever since the 1500s, when
            an unknown printer took a galley of type
          </DescriptionHeader>
          <div>
            <Button primary style={{ marginRight: 30 }} href="">
              Demo site
            </Button>
            <Button href="">Movie Clip</Button>
          </div>
        </ContainerRight>
        <ContainerLeft>
          <img style={{}} src={ImgHeader} />
        </ContainerLeft>
      </ContainerBanner>
    </section>
    <section>
      <div className="container__fluid">
        <div className="content__feature">
          <h3 className="feature__title">Recursos</h3>
          <p className="feature__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            dummy text dummy text industry. Lorem Ipsum has been the industry's
            standard
          </p>
        </div>
      </div>
    </section>

    <CardContainer>
      <Card>teste</Card>
      <Card>teste</Card>
      <Card>teste</Card>
    </CardContainer>
  </Layout>
)

export default IndexPage
