import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
    return(
        <div>
            <section id="about">
                <div classNameName="container my-5 py-5">
                    <div classNameName="row">
                        <img src="assets/logo.jpeg" alt="" classNameName='w-60 mt-5'/>
                    </div>
                    <div classNameName="col-md-6">
                        <h3 classNameName="fs-5 mb-0">About Us</h3>
                        <h1 classNameName="display-6" mb-2>Who <b>We</b> Are</h1>
                        <hr classNameName='w-50'/>
                        <p classNameName="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas error eaque laudantium ratione? Amet architecto maiores inventore tempore, voluptas qui, autem culpa minima molestiae sequi mollitia modi delectus asperiores accusantium!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, reprehenderit doloremque. Nemo perferendis ipsam fugit, nobis necessitatibus enim non iure autem odit, quaerat nulla, earum similique veniam quae hic labore!
                        </p>
                        <NavLink classNameName="btn btn-primary rounded-pill px-4 py-2">Get Started</NavLink>
                        <NavLink classNameName="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;