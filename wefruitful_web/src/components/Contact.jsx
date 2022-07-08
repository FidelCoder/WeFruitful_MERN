import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <section id='contact'>
                <div classNameName="container my-5 py-5">
                    <div classNameName="row mb-5">
                        <div classNameName="col-12">
                            <h3 classNameName="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 classNameName="display-6 text-center mb-4">Get <b>In</b> Touch</h1>
                            <hr classNameName='w-25 mx-auto' />
                        </div>
                    </div>

                    <div classNameName="row">
                        <div classNameName="col-md-6">
                            <img src="./assets/team.jpg" alt="contact" classNameName='w-100' />
                        </div>
                        <div classNameName="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Enter Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Enter Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="wefruitful@gmail.com"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>

                                <NavLink classNameName="btn btn-outline-primary">Send Message <i classNameName="fa fa-paper-plane ms-2"/></NavLink>

                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Contact;
