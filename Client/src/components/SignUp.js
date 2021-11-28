import React,{useState,useEffect} from 'react';
import{useHistory} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';








const SignUp = () => {

    const history = useHistory();

    const[user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });
    
    let name,value;
    const handleInputs = (e) => {
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});


    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name,email,phone,work,password,cpassword} = user;
        const res = await fetch("/register",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });
       
        const data = await res.json();
        if(res.status === 422 || !data)
        {
           
            swal("Something Went Wrong!", "Registration Failed!", "error");

        }else{
           

            swal(
                'Registration Completed!',
                'Please,Sign In to Continue!',
                'success'
              )

            
            history.push("/SignIn");
            
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
            
            <section className="signup">
                <div className="container main-signup mt-4">
                    <div className="signup-content">
                        <h2 className="font-weight-bold text-center pt-4 sign-in-title">Sign Up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i class="zmdi zmdi-account"></i></label>
                                <input type="text" name="name" id="name" autocomplete="off" value={user.name} 
                                onChange={handleInputs} placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="email" id="email" autocomplete="off" value={user.email} 
                                onChange={handleInputs} placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone"><i class="zmdi zmdi-phone"></i></label>
                                <input type="number" name="phone" id="phone" autocomplete="off" value={user.phone} 
                                onChange={handleInputs} placeholder="Your Phone Number" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="work"><i class="zmdi zmdi-slideshow"></i></label>
                                <input type="text" name="work" id="work" autocomplete="off" value={user.work} 
                                onChange={handleInputs} placeholder="Your Profession" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" autocomplete="off" value={user.password} 
                                onChange={handleInputs} placeholder="Your Password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cpassword"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="cpassword" id="cpassword" autocomplete="off" value={user.cpassword} 
                                onChange={handleInputs} placeholder="Confirm Your Password" />
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="register"
                                onClick={PostData} />
                            </div>


                        </form>
                   
                    <div className="signup-image">
                        <figure>
                            <img src="./images/signup.jpeg" alt="signupimage" />
                        </figure>
                        <NavLink className="navus-link" to="/SignIn"><h6 className="text-center">I am already registered!!</h6></NavLink>

                    </div>
                    </div>

                </div>
            </section>

        </>
    );
};



export default SignUp;