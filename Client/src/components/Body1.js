import React, { useState } from 'react';
import Body1api from '.././API/Body1api';

const Body1 = () => {

    const [workData, setWorkData] = useState(Body1api);

    return (
        <>
            <section>
                <div className="body1-container container">
                    <h2 className="main-heading text-center"><b>USING APP VERSION</b></h2>
                    <div className="row">
                        {
                            workData.map((currElem) => {
                                const { id, logo, title, info } = currElem;
                                return (<>
                                    <div className="col-12 col-lg-6 text-center body1-container-subdiv">
                                        <i class={`fontawesome-style ${logo}`}></i>
                                        <h3 className="sub-heading">{title}</h3>
                                        <p className="body1-info w-100">{info}</p>

                                    </div>
                                </>
                                );
                            })
                        }





                    </div>
                </div>
            </section>



        </>


    );

};


export default Body1;