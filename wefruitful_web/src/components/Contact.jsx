import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <section id='contact'>
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Get <b>In</b> Touch</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <img src="./assets/team.jpg" alt="contact" className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="wefruitful@gmail.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>

                                <NavLink className="btn btn-outline-primary" to="/contact">Send Message <i className="fa fa-paper-plane ms-2"/></NavLink>

                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Contact;
