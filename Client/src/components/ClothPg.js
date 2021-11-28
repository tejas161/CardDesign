import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Clothapi from '../API/Clothapi';


const ClothPg = () => {
    const [userCard, setUserCard] = useState(Clothapi);

    return (

        <>
            <Navbar2 />
            <section className="cloth-pg">

                <div className="container">
                    <div className="row">
                        {userCard.map((currElem) => {
                            const { isrc, title, info } = currElem;



                            return (
                                <>
                                    <div className="col-lg-4 my-4">
                                        <div class="card" style={{width: "18rem"}}>
                                            <img src={isrc} class="card-img-top" alt="..."
                                            style={{width:"18rem",height:"12rem"}} />
                                            <div class="card-body">
                                                <h5 class="card-title text-center">{title}</h5>
                                                <p class="card-text">{info}</p>
                                                <button href="#" class="btn btn-primary" style={{width:"70%"}}>Add to Cart</button>
                                            </div>
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
    )
}

export default ClothPg;