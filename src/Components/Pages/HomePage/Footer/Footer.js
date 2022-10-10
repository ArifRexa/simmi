import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer class="footer-area footer--light">
                <div class="footer-big">
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-md-4 col-sm-4">
                                <div class="footer-widget">
                                    <div class="footer-menu footer-menu--1">
                                        <h4 class="footer-widget-title text-light">ABOUT US</h4>
                                        <p className='text-light'>We envisions to develop a society based on legitimate rights, equity, justice, honesty, social sensitivity and a culture of service in which all are self-reliant.</p>
                                    </div>
                                </div>
                            </div>

  

                            <div class="col-md-3 col-sm-4">
                                <div class="footer-widget">
                                    <div class="footer-menu text-light">
                                        <h4 class="footer-widget-title text-light">INITIATIVES</h4>
                                        <ul>
                                            <li>
                                                <a href="#" class="text-light">Khel Sangathan</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Sukoon Parikram</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Simmi Olympiads</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Kalaakaar Manch</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-4">
                                <div class="footer-widget">
                                    <div class="footer-menu no-padding">
                                        <h4 class="footer-widget-title text-light">Help Support</h4>
                                        <ul>
                                            <li>
                                                <a href="#" class="text-light">Support Forum</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Support Policy</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Refund Policy</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Buyers Faq</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-light">Sellers Faq</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
<p className='text-center text-light ' style={{marginBottom:"-15px"}}>Copyright ©2022 All rights reserved | Simmi Foundation </p>
            </footer>

        </div>
    );
};

export default Footer;