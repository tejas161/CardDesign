import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Clothapi from '../API/Clothapi';
import Footer from './Footer';


const BStore = () => {
    const [userCard, setUserCard] = useState(Clothapi);

    return (
        <>
        <div className="navbar2">
                <ul className="list-heading pt-1 px-2 text-center d-flex flex-row justify-content-start align-items-start">
                   <NavLink class="navu-link" to="/aprod"><li>All Products</li></NavLink>
                   <NavLink class="navu-link" to="/viscard"><li>Visiting Cards</li></NavLink>
                   {/* <NavLink class="navu-link" to="/statnds"><li>Stationary and Stamps</li></NavLink> */}
                   {/* <NavLink class="navu-link" to="/personpens"><li>Personalised Pens</li></NavLink> */}
                   <NavLink class="navu-link" to="/banpogns"><li>Banners,Posters and Signs</li></NavLink>
                   <NavLink class="navu-link" to="/flyials"><li>Flyers, Marketing materials</li></NavLink>
                   <NavLink class="navu-link" to="/labers"><li>Labels and Stickers</li></NavLink>
                   <NavLink class="navu-link" to="/clobags"><li>Clothings and Bags</li></NavLink>
                   <NavLink class="navu-link" to="/albuts"><li>Mugs,Albums and Gifts</li></NavLink>
                   <NavLink class="navu-link" to="/mascovid"><li>Face masks,COVID related</li></NavLink>
                  <NavLink class="navu-link" to="/nwarrival"><li className="bordnone">New Arrivals</li></NavLink>
                </ul>
            </div>
            <section className="brandstore-section mt-4">
                <div className="container">
                    <div className="b-img1-cont">
                        <h4 className="text-primary">Personalized Cards</h4>
                        <h6>A great way to add your brand to gift your</h6>
                        <h6>customers the best gifts</h6>
                        <button className="btn btn-primary">Shop Now</button>

                    </div>
                    <img src="./images/vcard5.jpeg" alt="A Brandstore secret image" style={{ width: "100%", height: "25rem" }} />




                </div>

                <div className="container mt-2">
                    <div className="text-center">
                        <hr />
                        <button className="btn btn-primary btn-br2">Featured Products</button>
                        <hr />
                    </div>


                </div>

                <div className="container">
                    <div className="row">
                        {userCard.map((currElem) => {
                            const { isrc, title, info } = currElem;



                            return (
                                <>
                                    <div className="col-lg-4 my-4">
                                        <div class="card" style={{width: "18rem"}}>
                                            <p className="bst-3 text-white bg-black">Buy 1 for @175/-</p>
                                            <img src={isrc} class="card-img-top" alt="..."
                                            style={{width:"18rem",height:"12rem"}} />

                                            <div class="card-body">
                                                <h5 class="card-title fw-bold text-center">{title}</h5>
                                                {/* <p class="card-text">{info}</p> */}
                                                {/* <button href="#" class="btn btn-primary" style={{width:"70%"}}>Add to Cart</button> */}
                                            </div>
                                        </div>
                                    </div>


                                </>
                            )
                        })
                        }






                    </div>



                </div>
                 <div className="container">
                     <img src="./images/order.jpeg" alt="footer up page" style={{width:"100%",height:"25rem"}}/>
                     <div className="brandlpg ">
                            <h2 className="text-primary fw-bold">Easy Returns:</h2>
                            <h3 className="text-primary fw-bold">Free Replacement or Full Refund</h3>
                            <h4 className="fw-bold">100% satisfaction or money back !!</h4>
                     </div>
                 </div>


            </section>
            <Footer/>



        </>
    );
};


export default BStore;