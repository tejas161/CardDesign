import React, { useState } from 'react';
import Footer from './Footer';
import Acart from '.././API/Acartapi';




const AddCart = () => {
    const [cartData, setCartData] = useState(Acart);

    return (


        <>
            <section>
                <div className="container mx-auto my-2">
                    <div className="row">
                        {
                            cartData.map((currElem) => {
                                const { id, isrc, title, info } = currElem;
                                return (
                                    <>
                                        <div className="card mx-4 my-4" style={{ width: "18rem" }}>
                                            <img className="card-img-top pt-1" src={isrc} alt="Card image cap"
                                                style={{ width: "16rem", height: "12rem" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text">{info}</p>
                                                <span className="pe-2">
                                                    <a href="#" className="btn btn-primary">Go to Card</a>
                                                    <a href="#" className="btn btn-danger">Delete Card</a>
                                                </span>
                                            </div>
                                        </div>



                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
};


export default AddCart;