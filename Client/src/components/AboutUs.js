import React from 'react';



const AboutUs = () => {

    return (
        <>
            <div className="fluid-container about-main-container m-2 bg-danger">

                <img className="aboutpic" src="./images/about1.jpeg" alt="no" />
                <div className="aboutcontent">
                    <div className="text-white shipbox d-flex">
                        <div className="shipbox-content mx-2">
                            <h6 className="text-decoration-underline">Free Shipping!!</h6>
                            <h6>No Extra Cost</h6>
                        </div>
                        <div className="mt-2 text-danger">
                            <i class="fas fa-truck fa-2x"></i>
                        </div>
                    </div>


                    <div className="text-white cardcreate w-25 text-center border border-white mx-auto m-2 p-2 ">
                        <h6>100 Visiting Cards at <span className="text-primary">RS.150</span></h6>
                        <h5>Get your Unique Card</h5>
                        <h5>Professional Identity</h5>
                        <button type="button" class="btn btn-primary">Order Now</button>

                    </div>
                </div>
              





            </div>
        </>
    );
};


export default AboutUs;