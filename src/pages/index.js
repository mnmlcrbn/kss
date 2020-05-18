import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: `url(img/IMG_3576.jpg)` }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">
              Revolutionizing audio and lighting in the caribbean.
            </h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">
                DJ Services,PA Systems,Equipment Rental,Lighting,Audio
                Equipment,Special Event Full Production
              </span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box text-center">
                      <h5 className="title-a">About Us</h5>
                      <div className="line-mf"></div>
                    </div>
                    <p className="lead">
                      A license and locally owned business. A household name
                      within our community, with 20 plus years in business. We
                      offer DJ services, pa systems, rental equipment, special
                      event full production, stage and sortable roof, and
                      lighting services. Home and business installations
                      available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services and Equipment Available</h3>
              <p className="subtitle-a">
                For all your audio and lighting needs.
              </p>
              <div className="line-mf"></div>
              <ul className="kss-services">
                <li>DJ Services</li> <li>PA Systems</li>{" "}
                <li>Equipment Rentals</li>{" "}
                <li>Special Event Full Production</li>{" "}
                <li>Stage and Sortable Roof</li> <li>Lighting Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      className="section-counter paralax-mf bg-image"
      style={{ backgroundImage: `url(img/homepage-1.jpg)` }}
    >
      <div className="overlay-mf"></div>
      <div className="container"></div>
    </div>

    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Past Work Showcase</h3>
              <p className="subtitle-a">
                Here's some pictures of some the many events we've serviced.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/IMG_3724.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/IMG_3724.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Church Installation</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Installation</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/IMG_0266.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/IMG_0266.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Leatherback Brewery</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Outdoor Event </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/IMG_7431.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/IMG_7431.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Carvelle Casino</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Outdoor Installation</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/parade_float.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img
                    src="img/parade_float.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Parade Float</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Truck Setup</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/IMG_1079.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/IMG_1079.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Airplane Hangar</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Backline Rental</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="img/IMG_3575.jpg" data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src="img/IMG_3575.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">St.Thomas Jouvert</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Truck Setup</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(img/overlay-bg.jpg)` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form
                        action=""
                        method="post"
                        role="form"
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Let's get started on planning your next event! Send us a
                        message.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location"></span> PO BOX 5085
                          Kingshill, VI 00851
                        </li>
                        <li>
                          <span className="ion-ios-telephone"></span> (340)
                          277-5492{" "}
                        </li>
                        <li>
                          <span className="ion-email"></span>{" "}
                          kssaudioent@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-facebook"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="ion-social-pinterest"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  &copy; Copyright <strong>KSS Audio Enterprises</strong>. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>

    <a href="#" className="back-to-top">
      <i className="fa fa-chevron-up"></i>
    </a>
  </Layout>
)

export default IndexPage
