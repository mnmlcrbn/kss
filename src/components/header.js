import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./scroll"

const Header = ({ siteTitle }) => (
  <nav
    className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
    id="mainNav"
  >
    <div className="container">
      <a
        className="navbar-brand js-scroll"
        style={{
          backgroundImage: `url(img/kss.png)`,
          backgroundSize: `contain`,
          backgroundRepeat: `no-repeat`,
          height: 50,
          width: 100,
        }}
        href="#page-top"
      ></a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className="navbar-collapse collapse justify-content-end"
        id="navbarDefault"
      >
        <Scrollspy
          items={["home", "about", "service", "work", "contact"]}
          currentClassName="is-active"
          offset={-300}
          style={{
            display: `flex`,
            paddingLeft: 0,
            marginBottom: 0,
            listStyle: `none`,
          }}
        >
          <li className="nav-item">
            <Scroll type="id" element="home">
              <a className="nav-link js-scroll active" href="#">
                Home
              </a>
            </Scroll>
          </li>
          <li className="nav-item">
            <Scroll type="id" element="about">
              <a className="nav-link js-scroll" href="#">
                About
              </a>
            </Scroll>
          </li>
          <li className="nav-item">
            <Scroll type="id" element="service">
              <a className="nav-link js-scroll" href="#">
                Services
              </a>
            </Scroll>
          </li>
          <li className="nav-item">
            <Scroll type="id" element="work">
              <a className="nav-link js-scroll" href="#">
                Selected Work
              </a>
            </Scroll>
          </li>
          <li className="nav-item">
            <Scroll type="id" element="contact">
              <a className="nav-link js-scroll" href="#">
                Contact
              </a>
            </Scroll>
          </li>
        </Scrollspy>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
