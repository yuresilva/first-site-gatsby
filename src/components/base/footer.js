import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container__fluid">
        <div className="icons__sociais">
          <ul>
            <li>Icon</li>
            <li>Icon</li>
          </ul>
        </div>
        <div>
          <p className="">
            Criado por Yuri Silva desenvolvedor front end siga no
            <a
              style={{ marginLeft: 5 }}
              href="https://www.linkedin.com/in/yuri-nogueira/"
              target="_blank"
            >
              linkedin
            </a>
          </p>
        </div>
        <a href="#home" className="">
          Icon
        </a>
      </div>
    </footer>
  )
}

export default Footer
