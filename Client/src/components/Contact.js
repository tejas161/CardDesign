import React,{useContext, useEffect,useState} from 'react';
import Navbar1 from './Navbar1';
import Footer from './Footer';
import swal from 'sweetalert';




const Contact = () => {
   
    const[userData,setUserData] = useState({name:"",email:"",phone:"",message:""});

   

    const handleInputs = (e) => {
        const name = e.target.name;
        const value=e.target.value;

        setUserData({...userData,[name]:value});
    }

  const contactForm = async (e) => {
      e.preventDefault();

      const{name,email,phone,message} = userData;

      const res = await fetch('/contact',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              name,email,phone,message
          })
      })
      const data = res.json();

      if(!data || res.status===404){
        swal("Message Not Sent!", "Something went wrong!", "error");
      }
      else{
        swal(
            'Message Sent',
            'We will reach you soon',
            'success'
          )

          setUserData({...userData,message:""});
      }
  }
    return (


        <>
            
            <section className="contact-info mb-2">
                <div className="fluid-container">
                    <div className="contact-up">
                        <div className="row">
                            <div className="contact-up-group col-12 col-lg-3 mx-auto d-flex">
                                <div className="imgcontact">
                                    <i class="zmdi zmdi-phone"></i>
                                </div>
                                <div className="imgcontent">
                                    <p>Phone</p>
                                    <p>+91 8912347564</p>
                                </div>
                            </div>

                            <div className="contact-up-group col-12 col-lg-3 mx-auto d-flex">
                                <div className="imgcontact">
                                    <i class="zmdi zmdi-email"></i>
                                </div>
                                <div className="imgcontent">
                                    <p>Email</p>
                                    <p>cardmaker@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-up-group col-12 col-lg-3 mx-auto d-flex">
                                <div className="imgcontact">
                                    <i class="zmdi zmdi-pin"></i>
                                </div>
                                <div className="imgcontent">
                                    <p>Address</p>
                                    <p>Sanpada,Mumbai-400052</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="contact_form_container mt-2 py-4 px-3">
                                        <div className="contact_form_title pb-2">
                                            <h2>Get in Touch</h2>
                                        </div>
                                        <form method="POST" id="contact_form">
                                            <div className="contact_form_name d-flex justify-content-between align-items-center">
                                                <input type="text" id="contact_form_name" className="contact_form_name input-field"
                                                   value={userData.name} name="name" onChange={handleInputs} placeholder="Your Name" required="true" />

                                                <input type="email" id="contact_form_email" className="contact_form_email input-field"
                                                   value={userData.email} name="email" onChange={handleInputs} placeholder="Your Email" required="true" />


                                                <input type="number" id="contact_form_phone" className="contact_form_phone input-field"
                                                   value={userData.phone} name="phone" onChange={handleInputs} placeholder="Your Phone Number" required="true" />
                                            </div>
                                            <div className="contact_form_text mt-4">
                                                <textarea className="text_field contact_form_message" id=" " cols="70" rows="10"
                                                value={userData.message} name="message" onChange={handleInputs} placeholder="Message..."></textarea>

                                            </div>
                                            <div className="contact_form_button">
                                                <button type="submit" onClick={contactForm} className="contact_submit_button">Send Message</button>
                                            </div>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer/>
        </>
    );
};


export default Contact;