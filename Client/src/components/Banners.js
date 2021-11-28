import React,{useState} from 'react';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Bannerapi from '../API/Bannerapi';


const Banners = () => {
    const [userCard, setUserCard] = useState(Bannerapi);

    return(

        <>
        <Navbar2/>
        <section className="banner-pg">

        <div className="container">
                    <div className="row">
                        {userCard.map((currElem) => {
                            const { isrc, title, info } = currElem;



                            return (
                                <>
                                    <div className="col-lg-8 mx-auto">
                                        <div className="card my-4" style={{ width: "46rem" }}>
                                            <img className="card-img-top" src={isrc} alt="Card image cap"
                                                style={{ width: "46rem", height: "22rem" }} />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{title}</h5>
                                                <p className="card-text">{info}</p>
                                            </div>
                                           
                                            <div className="card-body text-center">
                                                <span>
                                                   
                                                    <button className="btn btn-success" style={{width:"80%"}}>Use this Poster</button>
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
        


        <Footer/>
        </>
    )
}

export default Banners;