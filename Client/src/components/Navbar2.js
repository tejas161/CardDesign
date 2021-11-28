import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar2 = () => {
   
    return (
        <>
            <div className="navbar2">
                <ul className="list-heading pt-1 px-2 text-center d-flex flex-row justify-content-start align-items-start">
                   <NavLink class="navu-link" to="/aprod"><li>All Products</li></NavLink>
                   <NavLink class="navu-link" to="/viscard"><li>Visiting Cards</li></NavLink>
                   <NavLink class="navu-link" to="/statnds"><li>Stationary and Stamps</li></NavLink>
                   <NavLink class="navu-link" to="/personpens"><li>Personalised Pens</li></NavLink>
                   <NavLink class="navu-link" to="/banpogns"><li>Banners,Posters and Signs</li></NavLink>
                   <NavLink class="navu-link" to="/flyials"><li>Flyers, Marketing materials</li></NavLink>
                   <NavLink class="navu-link" to="/labers"><li>Labels and Stickers</li></NavLink>
                   <NavLink class="navu-link" to="/clobags"><li>Clothings and Bags</li></NavLink>
                   <NavLink class="navu-link" to="/albuts"><li>Mugs,Albums and Gifts</li></NavLink>
                   <NavLink class="navu-link" to="/mascovid"><li>Face masks,COVID related</li></NavLink>
                  <NavLink class="navu-link" to="/nwarrival"><li className="bordnone">New Arrivals</li></NavLink>
                </ul>
            </div>
            <div className="li-1 d-none container-fluid">
                
            </div>


        </>
    );
};



export default Navbar2;