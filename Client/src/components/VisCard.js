import react, { useState } from 'react';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import VisCardapi from '../API/Viscardapi';




const VisCard = () => {
    const [userCard, setUserCard] = useState(VisCardapi);

    return (
        <>
            <Navbar2 />
            <section className="vist-card">
                <div className="container">
                    <div className="row">
                        {userCard.map((currElem) => {
                            const { isrc, title, info, l1, l2 } = currElem;



                            return (
                                <>
                                    <div className="col-lg-6">
                                        <div className="card my-4" style={{ width: "28rem" }}>
                                            <img className="card-img-top" src={isrc} alt="Card image cap"
                                                style={{ width: "28rem", height: "18rem" }} />
                                            <div className="card-body">
                                                <h5 className="card-title font-bold text-center"><strong>
                                                {title}</strong></h5>
                                                <p className="card-text">{info}</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{l1}</li>
                                                <li className="list-group-item">{l2}</li>
                                               
                                            </ul> 
                                            <div className="card-body text-center">
                                                <span>
                                                    <button className="btn btn-primary me-2">Add to Cart</button>
                                                    <button className="btn btn-success">Customize</button>
                                                </span>
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
    );
}


export default VisCard;