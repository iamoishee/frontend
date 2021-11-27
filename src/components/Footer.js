import React from 'react'
import Logo from "../assets/logo.png";
import Style from "../components/css/Footer.css"

const Footer = () => {
    return (
        <div className="fixed-bottom">
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <div className="mx-auto">
                            <a href="#" className="btn btn-success rounded-circle mx-2 my-2">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="#" className="btn btn-primary rounded-circle mx-2 my-2">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="btn rounded-circle mx-2 my-2" style={{ backgroundColor: '#8a3ab9', color: 'white' }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="btn rounded-circle mx-2 my-2" style={{ backgroundColor: '#171515', color: 'white' }}>
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img src={Logo} height={50} width={50} /> CRAFTSMEN
                                </h6>
                                <p>
                                    Our vision is to keep the local talent alive, and boost the economy of the region by giving them an online platform to showcase their gems.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>

                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> IEM, Kolkata</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    craftsmengdsc@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91xxxxxxxxxx</p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Subscribe To Our Newsletter
                                </h6>
                                <div className="container">
                                    <div className="content text-center">
                                    <p>
                                        Subscribe to our newsletter to get the latest updates.
                                    </p>
                                        <form className="subscription">
                                            <input className="add-email" type="email" placeholder="subscribe@me.now"/>
                                            <button className ="submit-email btn btn-primary my-2 p-2" type ="button">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="#"> CRAFTSMEN.COM</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
