import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import Footer from './Footer';


const AllProd = () => {


    return (

        <>
            <Navbar2 />
            <section className="allproducts my-2">
                <div className="container">
                <div className="row">

                    <div className="col-lg-6 my-4">
                        <div class="card" style={{ width: "25rem" }}>
                            <img src="./images/card1.jpeg" class="card-img-top" alt="..."
                                style={{ width: "25rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">B'Day Card</h5>
                                <p class="card-text">Birthday wishes from my name to the best person i know</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 my-4">
                        <div class="card" style={{ width: "25rem" }}>
                            <img src="./images/card2.jpeg" class="card-img-top" alt="..."
                                style={{ width: "25rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">Elite Fanclub Service</h5>
                                <p class="card-text">Fanclub's private and important information not to be</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-lg-8 mx-auto">
                        <div className="card my-4" style={{ width: "50rem" }}>
                            <img className="card-img-top" src="./images/vcard1.jpeg" alt="Card image cap"
                                style={{ width: "50rem", height: "22rem" }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Tourism and Travels South Africa,Afica Regiona</h5>
                                <p className="card-text">South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope</p>
                            </div>

                            <div className="card-body text-center">
                                <span>

                                    <button className="btn btn-primary" style={{ width: "80%" }}>Use this Poster</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-lg-4 my-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="./images/card3.jpeg" class="card-img-top" alt="..."
                                style={{ width: "18rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">The Bold and Surprising</h5>
                                <p class="card-text">Fanclub's private and important information not to be</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 my-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="./images/card5.jpeg" class="card-img-top" alt="..."
                                style={{ width: "18rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">Romantic Stories - The Interesting</h5>
                                <p class="card-text">Best stories on the net around the world</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 my-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="./images/card6.jpeg" class="card-img-top" alt="..."
                                style={{ width: "18rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">Noval Stories</h5>
                                <p class="card-text">Haunted and Thrilling Stories covered</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 my-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src="./images/vcard3.jpeg" class="card-img-top" alt="..."
                                style={{ width: "20rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">he Bold and Surprising</h5>
                                <p class="card-text">Fanclub's private and important information not to be</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 my-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <img src="./images/vcard2.jpeg" class="card-img-top" alt="..."
                                style={{ width: "20rem", height: "12rem" }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">Express Service</h5>
                                <p class="card-text">Company's private and valuable information not to be shared</p>
                                <button href="#" class="btn btn-primary" style={{ width: "70%" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

  











                </div>
                </div>





            </section>






            <Footer />
        </>
    )
}

export default AllProd;