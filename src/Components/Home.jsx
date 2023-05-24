import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight,  faCubesStacked, faDesktop,  faPalette, faRubleSign } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/image1.png';
import aboutImage  from '../images/farshid-moghadam-kl19eQHULDE-unsplash.jpg'
import images1 from '../images/p-image-1.jpg'
import images2 from '../images/p-image2.jpg'
import images3 from '../images/p-image3.jpg'
import images4 from '../images/p-image4.jpg'
import images5 from '../images/p-image5.jpg'
import images6 from '../images/p-image6.jpg'


const Home = () => {
    return (
        <div className="container">
        <header>
          <section className="header-container">
            <div className="header-content">
              <nav>
                <div className="logo">
                <FontAwesomeIcon icon={faRubleSign} />
                </div>
                <ul className="menu">
                  <li><a href="#" className="active">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            
            {/* Banner Section */}
              
              <div className="banner">
                <div className="intro">
                  <h1>I'M LUCY DEO</h1>
                  <h3>WEB DEVELOPER</h3>
                </div>
                <div className="banner-img">
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
          </section>
        </header>
    
        <main>
          <section className="about-container wide-padding">
            <div className="about-img">
              <img
                src={aboutImage}
 alt=""
              />
            </div>

            {/* about Section */}


            <div className="about-text">
              <h3>About</h3>
              <div className="line"></div>
    
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quos, culpa, voluptatem a obcaecati dicta rerum amet iure
                praesentium eligendi incidunt. Nemo ullam eum dict. <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                dolores quibusdam, inventore rerum fugit non. Obcaecati, ab ad!
                Eius laborum voluptatum quod distinctio tenetur, culpa ex! A iusto
                culpa libero nisi! Illo ipsam.<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                iure minima eum illo beatae quo tenetur quibusdam saepe dolores
                minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nihil quo eligendi provident magnam, deserunt voluptas quisquam
                hic. Lorem ipsum dolor sit.
              </p>
              <div className="social-media">
                <span>Share :</span>
                <i><FontAwesomeIcon icon={faFacebook} /></i>
                <i><FontAwesomeIcon icon={faTwitter} /></i>
                <i><FontAwesomeIcon icon={faLinkedin} /></i>
                <i><FontAwesomeIcon icon={faGithub} /></i>
              </div>
            </div>
          </section>
        
          {/* Services Section */}
          
          <section className="services wide-padding">
            <div className="services-column">
              <div className="service">
                <h3><i><FontAwesomeIcon icon={faDesktop} /></i>Web Desigh</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  voluptatem quaerat dignissimos quas enesciunt non.
                </p>
              </div>
              <div className="service">
                <h3><i><FontAwesomeIcon icon={faPalette} /></i>Illustrator</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  voluptatem quaerat dignissimos quas enesciunt non.
                </p>
              </div>
              <div className="service">
                <h3>
                <i><FontAwesomeIcon icon={faCubesStacked} /></i>Digital Marketing
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  voluptatem quaerat dignissimos quas enesciunt non.
                </p>
              </div>
            </div>
          </section>
         
         {/* Portfolio-Section */}

          <section className="Protfolio-section">
            <div className="protfolio wide-padding">
              <h3>Portfolio</h3>
              <div className="line"></div>
              <nav className='navbar'>
                <ul className="menu">
                  <li><a href="#" className="active">All</a></li>
                  <li><a href="about.html">Marketing</a></li>
                  <li><a href="#">Web</a></li>
                  <li><a href="#">Graphics</a></li>
                </ul>
              </nav>
              <div className="card-container">
                <div className="row">
                  <div className="card">
                    <img src={images6} alt="" />
                  </div>
                  <div className="card">
                    <img src={images5} alt="" />
                  </div>
                  <div className="card">
                    <img src={images4} alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="card">
                    <img src={images3} alt="" />
                  </div>
                  <div className="card">
                    <img src={images2} alt="" />
                  </div>
                  <div className="card">
                    <img src={images1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className="contact-section wide-padding">
            <h1>Get in Touch</h1>
            <div className="contact-content">
              <div className="address">
                <p>123 Fake Street Cityville Imaginary Country</p>
                <p>Suppote@email.com</p>
                <p>+9999222222</p>
                <div className="social-media">
                <span>Share :</span>
                <i><FontAwesomeIcon icon={faFacebook} /></i>
                <i><FontAwesomeIcon icon={faTwitter} /></i>
                <i><FontAwesomeIcon icon={faLinkedin} /></i>
                <i><FontAwesomeIcon icon={faGithub} /></i>
              </div>
              </div>
    
              <div className="contact-from">
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Name here"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email here"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="message"
                    ></textarea>
                    
                  </div>
                  <button className="btn">Send Message <FontAwesomeIcon icon={faArrowRight} /></button>
                </form>
              </div>
            </div>
          </section>
        </main>
    
        <footer>
          <div className="footer-content wide-padding">
            <i><FontAwesomeIcon icon={faRubleSign} /></i>
            <p>&copy;RockSter 2023 | Made with ❤️ by Basir</p>
          </div>
        </footer>
      </div>
    );
};

export default Home;