import React, { useState } from 'react';
import Services1api from '../API/Services1api';
import Services2api from '../API/Services2api';


const Services = () => {
    const [aboutData1, setAboutData1] = useState(Services1api);
    const [aboutData2, setAboutData2] = useState(Services2api);

    return (
        <>

            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/services1.jpeg" alt="Services2IMG" />
                        </div>

                        {/* 1section right side data  */}

                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- AVAILABLE AT ANDROID AND IOS APPS ONLY
                            </h3>
                            <h2 className="main-heading">APP Features and Guide</h2>

                            {aboutData1.map((currElem) => {
                                const { id, title, info } = currElem;

                                return (
                                    <>
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h3>{title}</h3>
                                                <p className="main-hero-para">
                                                    {info}
                                                </p>
                                            </div>

                                        </div>

                                    </>
                                )

                            })}

                            <br />

                            <button className="btns-style btns-style-border">Learn More</button>
                        </div>

                    </div>
                </div>
            </section>



            {/* second part of services us */}



            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">

                        {/* 1section right side data  */}

                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-title">
                                -- SUPPORT IN ANY LANGUAGES
                            </h3>
                            <h2 className="main-heading">World Class support <br /> available for 24x7 hrs</h2>

                            {aboutData2.map((currElem) => {
                                const { id, title, info } = currElem;

                                return (
                                    <>
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h3>{title}</h3>
                                                <p className="main-hero-para">
                                                    {info}            </p>
                                            </div>

                                        </div>

                                    </>
                                )

                            })}

                            <br />

                            <button className="btns-style btns-style-border">Learn More</button>
                        </div>

                        {/* images section div */}
                        <div className="col-12 col-lg-5 our-service-rightside-img">
                            <img src="./images/services2.jpeg" alt="Services2IMG" />
                        </div>


                    </div>
                </div>
            </section>


        </>
    );
};


export default Services;