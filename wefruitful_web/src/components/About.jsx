import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <img src="assets/logo.jpeg" alt="" className='w-60 mt-5'/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6" >Who <b>We</b> Are</h1>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas error eaque laudantium ratione? Amet architecto maiores inventore tempore, voluptas qui, autem culpa minima molestiae sequi mollitia modi delectus asperiores accusantium!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, reprehenderit doloremque. Nemo perferendis ipsam fugit, nobis necessitatibus enim non iure autem odit, quaerat nulla, earum similique veniam quae hic labore!
                        </p>
                        <NavLink className="btn btn-primary rounded-pill px-4 py-2" to="/">Get Started</NavLink>
                        <NavLink className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2" to="/contact">Contact Us</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
