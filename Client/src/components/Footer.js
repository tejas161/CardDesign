import React from 'react';

const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">

                                    <ul className="text-center">
                                        <h3>Company</h3>
                                        <li>
                                            <a href="#">VistaPrint</a>
                                        </li>
                                        <li>
                                            <a href="#">CardMaker</a>
                                        </li>
                                        <li>
                                            <a href="#">Printerix</a>
                                        </li>
                                        <li>
                                            <a href="#">Delightful</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">

                                    <ul className="text-center">
                                        <h3 >Different Domains</h3>
                                        <li>
                                            <a href="#">Marketing</a>
                                        </li>
                                        <li>
                                            <a href="#">Social Appearance</a>
                                        </li>
                                        <li>
                                            <a href="#">Influencing</a>
                                        </li>
                                        <li>
                                            <a href="#">Youtube Channel</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">

                                    <ul className="text-center">
                                        <h3>Services</h3>
                                        <li>
                                            <a href="#">Easy Delivery</a>
                                        </li>
                                        <li>
                                            <a href="#">Customer Service</a>
                                        </li>
                                        <li>
                                            <a href="#">24xHrs Available</a>
                                        </li>
                                        <li>
                                            <a href="#">Easy and Fast Response</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h3 className="text-center">Follow Us</h3>
                                    <div className="row text-center">
                                        <div className="col-3 mx-auto footer-icons">
                                            <a href="https://www.facebook.com/login/" target="_blank"><i className="fab fa-facebook fontawesome-style"></i></a>
                                        </div>
                                        <div className="col-3 mx-auto footer-icons">
                                            <a href="https://www.instagram.com/?hl=en" target="_blank"><i className="fab fa-instagram fontawesome-style"></i></a>
                                        </div>
                                        <div className="col-3 mx-auto footer-icons">
                                            <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube fontawesome-style"></i></a>
                                        </div>
                                        <div className="col-3 mx-auto footer-icons">
                                            <a href="https://twitter.com/?lang=en" target="_blank" ><i className="fab fa-twitter fontawesome-style"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                           
                                <p className="text-center p-2 w-100">+22-9283787654  &nbsp; | &nbsp; Home &nbsp; | &nbsp; Site Map &nbsp; | &nbsp; Cookies and Privacy Policy &nbsp; | &nbsp; Terms of Use</p>
                                <p className="text-center w-100">Copyright @CardMaker 2021. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;