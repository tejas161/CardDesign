import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import swal from 'sweetalert';
 



const SignIn = () => {

   
    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');






    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();
        if (res.status === 400 || !data) {
           
            swal("Oops!", "Invalid Credentials!", "error");
        }
        else {
            dispatch({ type: 'USER', payload: true });
            
            swal(
                'Good job!',
                'Successfully Signed In!',
                'success'
              )


            history.push("/");

        }

    }

    const hidesearchbar = () => {
        var a = document.getElementById('search-nav');
        a.classList.add('search-hide');


       
    }

    useEffect(() => {
        hidesearchbar();

    })




    return (


        <> 
      


            <section className="signin">
               
                <h2 className="text-center sign-in-title">SIGN IN PAGE</h2>
                <div className="container mt-3 d-flex border">

                    <div className="signin-img  ps-2 pt-3">
                        <figure>
                            <img src="./images/login.jpeg" alt="loginimg" />
                        </figure>

                        <NavLink className="navu-link" to="/signup"><h6 className="ps-4 pt-0">Not Registered yet?</h6></NavLink>
                    </div>
                    <div className="signin-content mt-2 mx-auto">
                        <form method="POST">

                            <div className="form-group">
                                <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="email" id="email" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" autocomplete="off" value={password} onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password" />
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit"
                                    onClick={loginUser} value="Log In" />
                            </div>
                        </form>
                    </div>
                </div>






            </section>


        </>
    );
};


export default SignIn;