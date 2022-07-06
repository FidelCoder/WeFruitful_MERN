import React from 'react'

const Home =  () => {
    return(
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">WeFruitful We are just getting started so tukue rada</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque consectetur optio, repudiandae, laboriosam ipsa nulla vel distinctio accusantium eveniet dolore facilis aliquam vero blanditiis temporibus eius quod? Esse, voluptatum.</p>
                            <div className="buttons d-flex">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Go To Market</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">Start Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Home;