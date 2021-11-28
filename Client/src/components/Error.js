import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';


const Error = () => {

    const history = useHistory();
    const hidesearchbar = () => {
        var a = document.getElementById('search-nav');
        a.classList.add('search-hide');

       
       
    }
    const errorjava = () => {
   


    history.push('/');

    }

  
 
    useEffect(() => {
        hidesearchbar();

    })

    return(

        <>
       
        <div className="container">
           <div className="row ">
               <div className="col-lg-5 pt-4">
               <img src="./images/error.jpeg" alt="ITS AN ERROR PAGE" style={{height:"12rem",width:"15rem"}}/>

               </div>
               <div className="col-lg-7 pt-4">
            <h1>OOPS! U Landed on a Wrong or Underconstruction Page!!</h1>
             <button className="btn btn-success" onClick={errorjava}>Click here to go to Home Page</button>
            
            </div>


           </div>
           

            
        </div>
         
        
        </>
    );
};


export default Error;