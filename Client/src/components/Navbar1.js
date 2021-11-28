import React, { useContext,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';


const Navbar1 = () => {







    const { state, dispatch } = useContext(UserContext);

  

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <div className="box help-box mx-4 d-flex flex-column justify-content-center align-items-center">
                        <i className="fas fa-headphones-alt fa-2x"></i>
                        <NavLink class="navu-link" to='/contact'>Help is Here</NavLink>
                    </div>



                    <div className="box user-box mx-4 d-flex flex-column justify-content-center align-items-center">
                        <i class="fas fa-user-alt fa-2x"></i>
                        <NavLink class="navu-link" to='/logout'>Logout</NavLink>

                    </div>

                    <div className="box cart-box mx-4 d-flex flex-column justify-content-center align-items-center">
                        <i class="fas fa-shopping-cart fa-2x"></i>
                        <NavLink class="navu-link" to='/addcart'>Cart</NavLink>

                    </div>

                </>
            )
        }
        else {
            return (
                <>

                    

                    <div className="box user-box pe-5 me-5 d-flex flex-column justify-content-center align-items-center">
                        <i class="fas fa-user-alt fa-2x"></i>
                        <NavLink class="navu-link" to='/signin'>Sign In</NavLink>

                    </div>







                </>
            );
        }
    }
    return (
        <>
            <div className="navbar-header">
                <div className="header-button">



                    <button className="btnnav" type="button"><NavLink class="navu-link" to='/'>CardMaker</NavLink></button>
                    <button className="btnnav" type="button"><NavLink class="navu-link" to='/bstore'>BrandStore</NavLink></button>


                </div>
            </div>
            <div className="navbar-header2 ms-auto d-flex mt-2" style={{ width: "8rem", height: "0.8rem" }}>
                <img style={{ width: "1.8rem", height: "1rem" }} src="./images/indianflag.jpeg" alt="Flag" />
                <h6>INDIA</h6>
            </div>
            <hr />


            <div className="navbar-main d-flex flex-row">
                <div id="navbar-id-main">
                    <h3>CardMaker</h3>
                </div>


                <div className="input-group mx-auto" id="search-nav">
                    <input type="text" className="form-control" placeholder="Search" />
                    <button className="input-group-text"><i class="fas fa-search"></i></button>
                </div>

                <RenderMenu />
            </div>

        </>
    );
};


export default Navbar1;