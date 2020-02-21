import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Button from "../atomos/Button/index"
import Input from "../atomos/Input/index"

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  padding: 80px 15px;
`

const Title = styled.h1`
  color: #111;
  font-size: 2.1rem;
  margin: 20px 0px;
`

const FormContante = styled.div`
  display: flex;
  margin-top: 30px;
`

const Description = styled.p`
  font-size: 16px;
  color: #51585f;
  margin-bottom: 0.5rem;
`

const InputContact = styled(Input)`
  width: 70%;
  letter-spacing: 1px;
  box-shadow: 0 11px 42px 1px rgba(58, 52, 82, 0.1);
  padding: 14px 20px;
  background: white;
`

const ButtonIcon = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background: #05b993;
  margin-bottom: 0.5rem;
`

const ButtonForm = styled(Button)`
  width: 30%;
`

const ContactForm = () => {
  return (
    <ContactContainer>
      <ButtonIcon>
        <FontAwesomeIcon style={{ height: 25, width: 25 }} icon={faEnvelope} />
      </ButtonIcon>
      <Title>Receber Notícias</Title>
      <Description>
        Sinta-se á vontade para enviar um e-mail, responderei até mesmo as mais
        pequenas perguntas
      </Description>
      <FormContante>
        <InputContact placeholder="Teste@gmail.com" />
        <ButtonForm>Enviar</ButtonForm>
      </FormContante>
    </ContactContainer>
  )
}

export default ContactForm
