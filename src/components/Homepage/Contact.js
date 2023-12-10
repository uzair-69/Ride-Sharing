import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center text-white">
                        <h1 style={{ fontSize: '60px', marginBottom: '40px', marginTop: '60px' }}>Contact</h1>
                        <h2>Get in touch with us</h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 text-white mt-5 mb-5">
                        <h3>For any queries, please contact us by filling this form </h3>
                        <br />
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}